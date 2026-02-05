# Guia de Integração: Jira Service Desk

**Portal**: https://one-click.atlassian.net/servicedesk/customer/portal/31  
**Status**: Configuração Backend Necessária  
**Tipo**: API REST do Jira Service Desk

---

## Visão Geral

Este guia explica como integrar o formulário de suporte do site Blueberry Math com o Jira Service Desk da One Click usando a API REST do Atlassian.

---

## Arquitetura da Solução

### Fluxo Atual (Implementado)
```
[Formulário HTML] 
    ↓ (JavaScript)
[Tentativa API Jira] 
    ↓ (se falhar)
[Fallback mailto]
```

### Fluxo Completo (Recomendado)
```
[Formulário HTML] 
    ↓ (fetch POST)
[Backend Proxy] 
    ↓ (API Call)
[Jira Service Desk] 
    ↓ (Ticket Criado)
[Resposta ao Frontend]
```

---

## Por Que Precisa de Backend?

### Segurança
- API tokens do Jira **NÃO PODEM** ser expostos no frontend
- Credenciais devem ficar no servidor
- CORS policies do Jira bloqueiam chamadas diretas do navegador

### Benefícios
- Controle de autenticação
- Validação adicional no servidor
- Logs de requisições
- Rate limiting
- Transformação de dados

---

## Configuração do Jira Service Desk

### Passo 1: Obter Credenciais

1. Acesse: https://id.atlassian.com/manage-profile/security/api-tokens
2. Clique em "Create API token"
3. Nome: "Blueberry Support Integration"
4. Copie o token gerado (ele só aparece uma vez!)

### Passo 2: Identificar IDs Necessários

**Service Desk ID**: `31` (já identificado na URL)

**Request Type ID**: Precisa ser identificado
```bash
# Chamada para listar tipos de requisição
curl -X GET \
  'https://one-click.atlassian.net/rest/servicedeskapi/servicedesk/31/requesttype' \
  -u email@oneclick.es:YOUR_API_TOKEN \
  -H 'Accept: application/json'
```

Exemplos de tipos comuns:
- "Incident" (Incidente)
- "Service Request" (Requisição de Serviço)
- "Bug Report" (Reporte de Bug)

### Passo 3: Campos Customizados

Identificar campos disponíveis no portal:
```bash
curl -X GET \
  'https://one-click.atlassian.net/rest/servicedeskapi/servicedesk/31/requesttype/REQUEST_TYPE_ID/field' \
  -u email@oneclick.es:YOUR_API_TOKEN \
  -H 'Accept: application/json'
```

---

## Implementação do Backend

### Opção 1: Node.js + Express

**Arquivo**: `backend/jira-proxy.js`

```javascript
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Configuração do Jira
const JIRA_CONFIG = {
  baseUrl: 'https://one-click.atlassian.net',
  email: process.env.JIRA_EMAIL, // Variável de ambiente
  apiToken: process.env.JIRA_API_TOKEN, // Variável de ambiente
  serviceDeskId: '31',
  requestTypeId: '10001' // Ajustar conforme seu portal
};

// Endpoint para criar ticket
app.post('/api/jira-proxy/create-ticket', async (req, res) => {
  try {
    const { nome, email, escola, tipoProblema, navegador, descricao, urgencia } = req.body;

    // Validação básica
    if (!nome || !email || !descricao) {
      return res.status(400).json({ 
        error: 'Campos obrigatórios ausentes' 
      });
    }

    // Construir descrição formatada (Jira Wiki Markup ou ADF)
    const description = `
*REPORTE DE ERRO - BLUEBERRY MATH SESI*

*INFORMAÇÕES DO PROFESSOR:*
* Nome: ${nome}
* E-mail: ${email}
* Escola SESI: ${escola}

*DETALHES DO PROBLEMA:*
* Tipo de Problema: ${tipoProblema}
* Navegador: ${navegador}
* Nível de Urgência: ${urgencia.toUpperCase()}

*DESCRIÇÃO:*
${descricao}

----
_Data/Hora do Reporte: ${new Date().toLocaleString('pt-BR')}_
    `.trim();

    const summary = `[${urgencia.toUpperCase()}] ${tipoProblema} - ${escola}`;

    // Payload para Jira Service Desk API
    const jiraPayload = {
      serviceDeskId: JIRA_CONFIG.serviceDeskId,
      requestTypeId: JIRA_CONFIG.requestTypeId,
      requestFieldValues: {
        summary: summary,
        description: description,
        // Campos customizados (ajustar conforme portal)
        // customfield_10001: email, // Email do reporter
        // customfield_10002: escola, // Escola
        // customfield_10003: navegador, // Navegador
        // priority: { name: mapUrgencyToPriority(urgencia) }
      },
      requestParticipants: [email] // Adicionar professor como participante
    };

    // Autenticação Basic Auth
    const authHeader = Buffer.from(
      `${JIRA_CONFIG.email}:${JIRA_CONFIG.apiToken}`
    ).toString('base64');

    // Fazer requisição ao Jira
    const response = await axios.post(
      `${JIRA_CONFIG.baseUrl}/rest/servicedeskapi/request`,
      jiraPayload,
      {
        headers: {
          'Authorization': `Basic ${authHeader}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-ExperimentalApi': 'opt-in' // Para APIs experimentais
        }
      }
    );

    // Log para auditoria
    console.log(`Ticket criado: ${response.data.issueKey} para ${email}`);

    // Responder ao frontend
    res.json({
      success: true,
      ticketId: response.data.issueKey,
      ticketUrl: response.data._links.web
    });

  } catch (error) {
    console.error('Erro ao criar ticket no Jira:', error.response?.data || error.message);
    
    res.status(500).json({
      error: 'Falha ao criar ticket',
      details: error.response?.data?.errorMessages || error.message
    });
  }
});

// Mapear urgência para prioridade do Jira
function mapUrgencyToPriority(urgencia) {
  const map = {
    'baixa': 'Low',
    'media': 'Medium',
    'alta': 'High'
  };
  return map[urgencia] || 'Medium';
}

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Jira Proxy rodando na porta ${PORT}`);
});
```

**Instalação**:
```bash
npm install express axios cors dotenv
```

**Variáveis de Ambiente** (`.env`):
```
JIRA_EMAIL=suporte@oneclick.es
JIRA_API_TOKEN=seu_token_aqui
PORT=3000
```

**Executar**:
```bash
node jira-proxy.js
```

---

### Opção 2: Python + Flask

**Arquivo**: `backend/jira_proxy.py`

```python
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
from datetime import datetime
import base64

app = Flask(__name__)
CORS(app)

# Configuração do Jira
JIRA_CONFIG = {
    'base_url': 'https://one-click.atlassian.net',
    'email': os.getenv('JIRA_EMAIL'),
    'api_token': os.getenv('JIRA_API_TOKEN'),
    'service_desk_id': '31',
    'request_type_id': '10001'  # Ajustar conforme portal
}

@app.route('/api/jira-proxy/create-ticket', methods=['POST'])
def create_ticket():
    try:
        data = request.json
        
        # Validação
        required_fields = ['nome', 'email', 'descricao']
        if not all(field in data for field in required_fields):
            return jsonify({'error': 'Campos obrigatórios ausentes'}), 400
        
        # Construir descrição
        description = f"""
*REPORTE DE ERRO - BLUEBERRY MATH SESI*

*INFORMAÇÕES DO PROFESSOR:*
* Nome: {data['nome']}
* E-mail: {data['email']}
* Escola SESI: {data.get('escola', 'N/A')}

*DETALHES DO PROBLEMA:*
* Tipo de Problema: {data.get('tipoProblema', 'N/A')}
* Navegador: {data.get('navegador', 'N/A')}
* Nível de Urgência: {data.get('urgencia', 'media').upper()}

*DESCRIÇÃO:*
{data['descricao']}

----
_Data/Hora do Reporte: {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}_
        """.strip()
        
        urgencia = data.get('urgencia', 'media')
        summary = f"[{urgencia.upper()}] {data.get('tipoProblema', 'Erro')} - {data.get('escola', 'SESI')}"
        
        # Payload para Jira
        payload = {
            'serviceDeskId': JIRA_CONFIG['service_desk_id'],
            'requestTypeId': JIRA_CONFIG['request_type_id'],
            'requestFieldValues': {
                'summary': summary,
                'description': description
            },
            'requestParticipants': [data['email']]
        }
        
        # Autenticação
        auth_string = f"{JIRA_CONFIG['email']}:{JIRA_CONFIG['api_token']}"
        auth_bytes = auth_string.encode('ascii')
        auth_b64 = base64.b64encode(auth_bytes).decode('ascii')
        
        # Fazer requisição
        response = requests.post(
            f"{JIRA_CONFIG['base_url']}/rest/servicedeskapi/request",
            json=payload,
            headers={
                'Authorization': f'Basic {auth_b64}',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-ExperimentalApi': 'opt-in'
            }
        )
        
        response.raise_for_status()
        result = response.json()
        
        print(f"Ticket criado: {result.get('issueKey')} para {data['email']}")
        
        return jsonify({
            'success': True,
            'ticketId': result.get('issueKey'),
            'ticketUrl': result.get('_links', {}).get('web')
        })
        
    except requests.exceptions.HTTPError as e:
        print(f"Erro HTTP: {e.response.text}")
        return jsonify({
            'error': 'Falha ao criar ticket',
            'details': e.response.text
        }), 500
    except Exception as e:
        print(f"Erro: {str(e)}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=3000)
```

**Instalação**:
```bash
pip install flask flask-cors requests python-dotenv
```

**Executar**:
```bash
python jira_proxy.py
```

---

## Atualizar Frontend para Usar Backend

O código já está preparado! Basta garantir que o backend esteja rodando.

**URL do Backend**: `http://localhost:3000` (desenvolvimento) ou `https://seu-dominio.com` (produção)

Se o backend estiver em outro domínio, ajuste a URL:

```javascript
const response = await fetch('https://api.blueberry.sesi.org.br/api/jira-proxy/create-ticket', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload)
});
```

---

## Deploy do Backend

### Opção 1: Heroku (Node.js/Python)
```bash
heroku create blueberry-jira-proxy
git push heroku main
heroku config:set JIRA_EMAIL=suporte@oneclick.es
heroku config:set JIRA_API_TOKEN=seu_token
```

### Opção 2: AWS Lambda (Serverless)
- Criar função Lambda
- Configurar API Gateway
- Adicionar variáveis de ambiente

### Opção 3: Docker
```dockerfile
FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "jira-proxy.js"]
```

---

## Testes

### Teste Local

```bash
curl -X POST http://localhost:3000/api/jira-proxy/create-ticket \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva",
    "email": "joao.silva@sesi.org.br",
    "escola": "SESI São Paulo",
    "tipoProblema": "erro-tecnico",
    "navegador": "chrome",
    "descricao": "Teste de integração",
    "urgencia": "media"
  }'
```

### Resposta Esperada (Sucesso)
```json
{
  "success": true,
  "ticketId": "SD-123",
  "ticketUrl": "https://one-click.atlassian.net/servicedesk/customer/portal/31/SD-123"
}
```

### Resposta de Erro
```json
{
  "error": "Falha ao criar ticket",
  "details": "Invalid requestTypeId"
}
```

---

## Configurações Adicionais do Jira

### Campos Customizados

Para mapear os campos do formulário no Jira:

1. Acesse: Service Desk → Request types
2. Edite o tipo de requisição desejado
3. Adicione campos customizados:
   - Email do Professor
   - Escola SESI
   - Navegador
   - Tipo de Problema

### Automações

Configure automações no Jira para:
- Enviar e-mail de confirmação ao professor
- Notificar equipe de suporte
- Categorizar tickets por urgência
- Escalar tickets urgentes automaticamente

---

## Segurança

### Checklist de Segurança

- [ ] API token em variável de ambiente (nunca no código)
- [ ] HTTPS obrigatório em produção
- [ ] CORS configurado corretamente
- [ ] Rate limiting no backend
- [ ] Validação de inputs
- [ ] Logs de auditoria
- [ ] Sanitização de dados
- [ ] Timeout nas requisições

---

## Monitoramento

### Métricas Importantes

- Taxa de sucesso de criação de tickets
- Tempo de resposta da API
- Erros e falhas
- Volume de tickets por período
- Tipos de problemas mais comuns

### Ferramentas

- **Logs**: Winston, Bunyan (Node.js) ou Python logging
- **APM**: New Relic, Datadog
- **Alertas**: PagerDuty, Opsgenie

---

## Troubleshooting

### Erro: "Invalid requestTypeId"
**Solução**: Verificar ID correto com a API de listar tipos

### Erro: "401 Unauthorized"
**Solução**: Verificar email e API token

### Erro: "CORS policy"
**Solução**: Configurar CORS no backend

### Erro: "Field required"
**Solução**: Verificar campos obrigatórios do portal

---

## Documentação Oficial

- **Jira Service Desk API**: https://developer.atlassian.com/cloud/jira/service-desk/rest/
- **Autenticação**: https://developer.atlassian.com/cloud/jira/platform/basic-auth-for-rest-apis/
- **SDKs**: https://developer.atlassian.com/cloud/jira/platform/sdks/

---

## Próximos Passos

1. [ ] Obter API token do Jira
2. [ ] Identificar Request Type ID correto
3. [ ] Implementar backend (Node.js ou Python)
4. [ ] Testar localmente
5. [ ] Deploy em produção
6. [ ] Configurar automações no Jira
7. [ ] Monitorar e ajustar

---

**Status Atual**: Frontend preparado, backend pendente de implementação.  
**Tempo Estimado**: 2-4 horas para implementação completa do backend.

---

**Criado em**: 12/01/2026  
**Versão**: 1.0
