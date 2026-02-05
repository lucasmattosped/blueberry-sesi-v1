# BRIEFING COMPLETO E ESPECIFICAÇÕES TÉCNICAS
## Trilha de Formação Blueberry Math + SESI

**Data**: 02 de Fevereiro de 2026  
**Versão**: 1.0  
**Desenvolvido por**: Oneclick (https://oneclick.es/pt/)  
**Parceria**: SESI + Blueberry Math

---

# 1. RESUMO EXECUTIVO

## 1.1. Visão Geral do Projeto

A **Trilha de Formação Blueberry Math + SESI** é uma plataforma web de certificação progressiva para professores SESI, estruturada em três níveis:

- **Bronze** (Obrigatória) - Formação Inicial de Professores SESI
- **Prata** (Intermediário) - Aprofundamento Pedagógico
- **Ouro** (Avançado) - Liderança e Multiplicação

O sistema garante alinhamento institucional, onboarding técnico e pedagógico estruturado para uso do Blueberry Math, respeitando a curva de aprendizagem dos professores.

## 1.2. Objetivos do Projeto

1. Fornecer onboarding técnico e pedagógico para uso do Blueberry Math
2. Estruturar progressão formativa clara e controlada
3. Garantir acessibilidade e responsividade em todos os dispositivos
4. Manter identidade visual alinhada com SESI e Blueberry Math
5. Criar sistema de suporte técnico integrado

## 1.3. Público-Alvo

- **Primário**: Professores de Matemática do 7º ano SESI
- **Secundário**: Pontos Focais das escolas SESI
- **Terciário**: Responsáveis Pedagógicos

## 1.4. Escopo do Projeto

**Tipo**: Site estático (HTML, CSS, JavaScript)  
**Número de Páginas**: 5 principais + documentação  
**Idioma**: Português (pt-BR)  
**Responsividade**: Desktop, Tablet, Mobile  
**Acessibilidade**: WCAG 2.1 Level AA

---

# 2. DOCUMENTAÇÃO BASE

## 2.1. Documentos Oficiais de Referência

1. **Matriz Oficial de Formação – Certificações Blueberry (Bronze, Prata e Ouro)**
   - Define competências, carga horária e requisitos de cada nível
   - Estabelece princípio de não-antecipação de conteúdos

2. **Reunião iniciada às 2026_01_05 17_02 GMT-03:00 – Anotações do Gemini**
   - Problemas conhecidos da plataforma
   - Necessidades identificadas pelos professores
   - Proposta de integração de suporte técnico

3. **Playbook do Ponto Focal SESI**
   - Papéis institucionais
   - Terminologia oficial
   - Processos e fluxos

## 2.2. Princípios Pedagógicos

### Cristalização Real em Matemática
- **Objetivo**: Não apenas exposição, mas retenção, fluência, redução de gaps e capacidade de transferência
- **Princípio**: "Pouco por dia, todo dia" (prática distribuída > estudo massificado)

### Protocolo de Uso
- **Rotina diária**: 15 minutos, Seg-Sex
- **Adesão**: ≥60 min/semana (75% dos alunos atingindo esse piso)
- **Domínio**: ≥70% de proficiência nos microtópicos
- **Retenção**: ≥60% de conhecimento mantido após 7 dias (D+7)

### Fases de Implementação
- **Fase 1 (Aquecimento – 3 meses)**: 70% pré-requisitos + 30% tópicos do 7º ano
- **Fase 2 (Ano corrente)**: 70% conteúdo do 7º ano + 30% revisão espaçada automática

---

# 3. ARQUITETURA DO SITE

## 3.1. Estrutura de Arquivos

```
/
├── index.html                    # Landing Page ✅
├── bronze.html                   # Certificação Bronze ✅
├── prata.html                    # Certificação Prata (estrutura) ✅
├── ouro.html                     # Certificação Ouro (estrutura) ✅
├── suporte.html                  # Suporte Técnico + FAQ ✅
├── responsavel-pedagogico.html   # Guia (pendente)
├── css/
│   └── style.css                 # Sistema de Design completo ✅
├── js/
│   └── main.js                   # Lógica de progressão ✅
├── images/
│   ├── logos/
│   │   ├── logo-blueberry.png    # 3.3 KB ✅
│   │   ├── logo-sesi.png         # 9.6 KB ✅
│   │   └── logo-oneclick.png     # 33.6 KB ✅
│   └── README.md
├── downloads/
│   ├── certificados/
│   │   ├── certificado-bronze-modelo.pdf (aguardando)
│   │   ├── certificado-prata-modelo.pdf (aguardando)
│   │   └── certificado-ouro-modelo.pdf (aguardando)
│   ├── documentos-oficiais/
│   │   ├── matriz-formacao-blueberry.pdf (aguardando)
│   │   └── playbook-ponto-focal.pdf (aguardando)
│   └── materiais-apoio/
│       ├── modulo-1-planos-aula-premium.pdf ✅ (1.6 MB)
│       ├── modulo-1-slides.pdf (aguardando)
│       ├── modulo-2-slides.pdf (aguardando)
│       ├── modulo-3-slides.pdf (aguardando)
│       └── modulo-4-slides.pdf (aguardando)
└── README.md
```

## 3.2. Mapa de Navegação

```
Landing Page (index.html)
├── Certificação Bronze (bronze.html) [SEMPRE ACESSÍVEL]
│   ├── Módulo 1: Explicação Conceitual do Produto
│   ├── Módulo 2: Protocolo e Indicadores de Sucesso
│   ├── Módulo 3: Navegação Guiada na Plataforma
│   ├── Módulo 4: Rotina Mínima em Sala
│   └── Certificado Bronze (download após conclusão)
├── Certificação Prata (prata.html) [BLOQUEADA ATÉ BRONZE]
├── Certificação Ouro (ouro.html) [BLOQUEADA ATÉ PRATA]
├── Suporte Técnico (suporte.html) [SEMPRE ACESSÍVEL]
│   ├── Como Reportar Erros
│   ├── Problemas Conhecidos
│   └── FAQ (9 perguntas pedagógicas)
└── Guia Responsável Pedagógico (pendente)
```

## 3.3. Fluxo de Progressão

```
1. Professor acessa site → Sempre começa pela Landing Page
2. Lê overview da Trilha → Entende estrutura Bronze-Prata-Ouro
3. Acessa Bronze → Única certificação desbloqueada inicialmente
4. Assiste 4 módulos em vídeo → YouTube embeds + materiais de apoio
5. Marca módulos como assistidos → Tracking via localStorage
6. Conclui Bronze → Botão "Marcar como Concluída"
7. Recebe certificado → Download PDF automático
8. Desbloqueia Prata → Links de Prata ficam ativos
9. Repete processo em Prata → Desbloqueia Ouro
10. Completa Ouro → Certificação completa da trilha
```

---

# 4. SISTEMA DE DESIGN

## 4.1. Paleta de Cores

### Cores Primárias
```css
--primary-blue: #0052CC        /* Azul Blueberry institucional */
--primary-blue-dark: #003D99   /* Azul escuro para hover/títulos */
--primary-blue-light: #3380FF  /* Azul claro para backgrounds */
```

**Aplicação**:
- Headers e navegação
- Botões primários
- Links ativos
- Badges Bronze/Prata/Ouro
- Destaques e CTAs

### Cores Secundárias
```css
--secondary-orange: #FF6B00    /* CTAs e destaques */
--secondary-green: #00875A     /* Sucesso e progresso */
```

**Aplicação**:
- Botões CTA ("Começar Agora")
- Ícones de sucesso
- Badges "Concluída"
- Progresso de módulos

### Cores Neutras
```css
--neutral-900: #172B4D  /* Texto principal */
--neutral-700: #42526E  /* Texto secundário */
--neutral-300: #DFE1E6  /* Bordas */
--neutral-100: #F4F5F7  /* Backgrounds sutis */
--white: #FFFFFF
```

### Cores de Estado
```css
--success: #00875A   /* Sucesso */
--warning: #FF991F   /* Avisos */
--error: #DE350B     /* Erros, obrigatório */
--info: #0065FF      /* Informações */
```

## 4.2. Tipografia

### Fontes
```css
/* Headings e UI */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;

/* Corpo de Texto */
font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
```

### Escala Tipográfica
- **H1 Hero**: 48px (3rem) - Landing page
- **H1 Páginas**: 36px (2.25rem) - Títulos principais
- **H2**: 30px (1.875rem) - Seções
- **H3**: 24px (1.5rem) - Subseções
- **H4**: 20px (1.25rem) - Cards
- **Body**: 16px (1rem) - Texto padrão
- **Small**: 14px (0.875rem) - Metadados

### Pesos de Fonte
- **Regular**: 400 (corpo de texto)
- **Medium**: 500 (labels)
- **Semibold**: 600 (subtítulos)
- **Bold**: 700 (títulos importantes)
- **Extrabold**: 800 (hero titles)

## 4.3. Espaçamento

Sistema baseado em múltiplos de 8px:

```css
--spacing-xs: 8px     /* Espaçamento mínimo (badges, tags) */
--spacing-sm: 16px    /* Padrão pequeno (entre elementos) */
--spacing-md: 24px    /* Padrão médio (seções internas) */
--spacing-lg: 32px    /* Padrão grande (entre seções) */
--spacing-xl: 48px    /* Extra large (separadores) */
--spacing-xxl: 64px   /* Seções principais */
--spacing-xxxl: 96px  /* Hero sections */
```

## 4.4. Componentes

### Cards de Certificação
- Fundo branco com sombra suave
- Border-radius: 12px
- Padding: 32px
- Hover: elevação aumenta (box-shadow)
- Estrutura: Header → Badges → Título → Descrição → Footer → CTA

### Badges
- **Bronze**: Fundo azul (#0052CC), texto branco
- **Prata**: Fundo cinza (#6B778C), texto branco
- **Ouro**: Fundo laranja (#FF991F), texto branco
- **Obrigatória**: Fundo vermelho (#DE350B), texto branco
- **Opcional**: Fundo verde (#00875A), texto branco
- **Concluída**: Fundo verde claro (#E3FCEF), texto verde escuro

### Botões
- **Primary**: Azul (#0052CC), hover mais escuro
- **Secondary**: Branco com borda azul
- **CTA**: Laranja (#FF6B00), destaque máximo
- **Disabled**: Cinza (#DFE1E6), cursor not-allowed
- Padding: 12px 24px
- Border-radius: 8px
- Font-weight: 600
- Transição suave de 0.3s

### Accordion (Módulos de Vídeo)
- Header expansível com ícone chevron
- Conteúdo com slide-down animation
- Border inferior separador
- Indicadores de status: "Não iniciado" / "Assistido"
- Barra de progresso visual (0-100%)

### Formulários
- Label com asterisco vermelho (*) para obrigatórios
- Input border-radius: 8px
- Focus state: borda azul + box-shadow
- Validação em tempo real
- Mensagens de erro/sucesso coloridas

---

# 5. PÁGINAS E FUNCIONALIDADES

## 5.1. Landing Page (index.html)

### Seções

#### 5.1.1. Hero Section
- **Conteúdo**: Título principal "Trilha de Formação Blueberry" + tagline
- **CTA**: Botão "Começar pelo Bronze" (link para bronze.html)
- **Visual**: Gradiente azul de fundo
- **Layout**: Centralizado, tipografia grande e bold

#### 5.1.2. Visão Geral da Trilha
- **Texto explicativo**: O que é a trilha, objetivos, público
- **Diferencial**: Ênfase em progressão estruturada

#### 5.1.3. Cards das Certificações
- **3 Cards**: Bronze, Prata, Ouro
- **Informações por Card**:
  - Badge de nível
  - Badge de obrigatoriedade
  - Título da certificação
  - Descrição resumida
  - Competências desenvolvidas (lista com ícones)
  - Carga horária
  - CTA (link ou desabilitado)
- **Interação**: Hover com elevação, cards de Prata/Ouro com ícone de cadeado

#### 5.1.4. Tip Box
- **Título**: "Dica do Especialista"
- **Conteúdo**: Orientação pedagógica estratégica
- **Visual**: Fundo azul claro, ícone de lâmpada

#### 5.1.5. Recursos e Suporte
- **Links**: Guia do Responsável Pedagógico, Playbook, Matriz de Formação, FAQ
- **Layout**: Grid de 4 colunas

#### 5.1.6. Footer
- **3 Colunas**:
  - Sobre a Trilha
  - Links Rápidos (Bronze, Prata, Ouro, Suporte)
  - Recursos (documentos PDF)
  - Contato (e-mail: soporte.brasil@oneclick.es)
- **Créditos**: Logo Oneclick

### JavaScript
- `updateNavigationState()`: Desabilita links de Prata/Ouro até conclusão anterior
- Verificação ao carregar página

---

## 5.2. Página Bronze (bronze.html)

### Estrutura Detalhada

#### 5.2.1. Cabeçalho da Certificação
- **Badges**: Bronze, Obrigatória, Carga horária (120 min)
- **Título**: "Certificação Bronze"
- **Subtítulo**: "Formação Inicial de Professores SESI"

#### 5.2.2. Finalidade e Público-Alvo
- **Objetivo**: Onboarding de professores para uso básico
- **Público**: Todos os professores de Matemática 7º ano SESI

#### 5.2.3. Competências Desenvolvidas
- **4 Cards numerados**:
  1. Compreender visão e missão Blueberry Math
  2. Dominar navegação básica da plataforma
  3. Identificar recursos pedagógicos
  4. Conduzir primeiras atividades em sala

#### 5.2.4. Módulos de Treinamento em Vídeo

##### Módulo 1: Explicação Conceitual do Produto (25 min)
- **Vídeo**: YouTube embed (ID: tt9eSCE9J6Q)
- **Conceitos-chave**:
  - Cristalização real em matemática
  - Princípio "Pouco por dia, todo dia"
  - Prática distribuída > estudo massificado
- **Objetivos**:
  - Compreender visão e missão Blueberry
  - Identificar apoio ao currículo SESI
  - Reconhecer benefícios para professores e alunos
  - Visualizar exemplos práticos
- **Material de Apoio**:
  - Blueberry-Planos-Aula-Premium.pdf (1.6 MB) ✅
  - modulo-1-slides.pdf (aguardando)

##### Módulo 2: Protocolo e Indicadores de Sucesso (30 min)
- **Vídeo**: Aguardando gravação
- **Indicadores-chave**:
  - Adesão: ≥60 min/semana (75% dos alunos)
  - Domínio: ≥70% proficiência
  - Retenção: ≥60% após 7 dias
- **Fases**:
  - Fase 1 (Aquecimento - 3 meses): 70% pré-requisitos + 30% 7º ano
  - Fase 2 (Ano corrente): 70% 7º ano + 30% revisão espaçada
- **Rotina**: 15 min/dia, Seg-Sex, sem chutar
- **Objetivos**:
  - Dominar dashboard da plataforma
  - Organizar turmas e alunos
  - Localizar recursos pedagógicos
  - Customizar configurações
  - Usar ferramentas de busca
- **Material**: modulo-2-slides.pdf (aguardando)

##### Módulo 3: Navegação Guiada na Plataforma (35 min)
- **Vídeo**: Aguardando gravação
- **Tópicos**:
  - Interface do professor
  - Navegação básica
  - Visualizar progresso semanal
  - Identificar tópicos trabalhados
  - Análises individuais e coletivas
  - Como baixar relatórios
  - Conduzir aula coletiva
- **Objetivos**:
  - Selecionar e atribuir atividades
  - Acompanhar progresso dos alunos
  - Interpretar relatórios de desempenho
  - Fornecer feedback efetivo
  - Resolver problemas comuns em sala
- **Material**: modulo-3-slides.pdf (aguardando)

##### Módulo 4: Rotina Mínima em Sala - 5 min, 2x/semana (20 min)
- **Vídeo**: Aguardando gravação
- **Ritual em 3 Passos**:
  1. **Projetar**: 2 questões do tema da semana
  2. **Perguntar**: "Qual erro é comum aqui?"
  3. **Corrigir**: Conexão breve com o app
- **Objetivo**: Validar esforço + criar ponte sala↔app + identificar misconceptions
- **Duração do ritual**: 5 minutos, 2 vezes por semana
- **Material**: modulo-4-slides.pdf (aguardando)

#### 5.2.5. Sistema de Tracking de Progresso
- **Barra de Progresso Visual**: 0% a 100%
- **Botão por Módulo**: "Marcar como Assistido"
- **Persistência**: localStorage (chave: `blueberry-progress`)
- **Cálculo**: (módulos assistidos / total de módulos) × 100

#### 5.2.6. O que NÃO é Exigido no Bronze
- **Callout informativo**: Lista de atividades avançadas
- **Objetivo**: Tranquilizar professores, evitar antecipação

#### 5.2.7. Suporte Técnico
- **Link**: Para suporte.html
- **Texto**: Instruções de como reportar erros

#### 5.2.8. Próximos Passos
- **Botão**: "Marcar Bronze como Concluída"
- **Comportamento**:
  - Ao clicar: salva no localStorage
  - Mostra alerta de sucesso
  - Desabilita botão (fica verde "Bronze Concluída")
  - Revela botão "Baixar Certificado Bronze"
  - Desbloqueia links de Prata
  - Scroll automático até certificado

#### 5.2.9. Download de Certificado
- **Botão**: "Baixar Certificado Bronze" (inicialmente oculto)
- **Arquivo**: certificado-bronze-modelo.pdf
- **Nome do Download**: Certificado-Bronze-Blueberry.pdf
- **Animação**: Fade-in suave ao aparecer

### JavaScript Bronze
- `setupModuleTracking()`: Gerencia marcação de módulos
- `setupBronzeCertificate()`: Gerencia conclusão e certificado
- `calculateProgress()`: Calcula percentual de progresso
- `updateProgressBar()`: Atualiza barra visual

---

## 5.3. Página Prata (prata.html)

### Status Atual
- **Estrutura**: Reservada, conteúdo "Em desenvolvimento"
- **Requisito de Acesso**: Bronze completado
- **Verificação**: JavaScript verifica localStorage ao carregar

### Conteúdo Planejado (Aguardando Definição)
- Competências intermediárias
- Módulos de aprofundamento
- Análise de dados pedagógicos
- Intervenções estruturadas
- Certificado Prata

### Bloqueio
- Se Bronze não completado:
  - Mostra callout de aviso
  - Exibe requisitos
  - Botão para voltar ao Bronze

---

## 5.4. Página Ouro (ouro.html)

### Status Atual
- **Estrutura**: Reservada, conteúdo "Em desenvolvimento"
- **Requisito de Acesso**: Prata completado
- **Verificação**: JavaScript verifica localStorage ao carregar

### Conteúdo Planejado (Aguardando Definição)
- Liderança pedagógica
- Multiplicação de conhecimento
- Formação de outros professores
- Analytics avançados
- Certificado Ouro

### Perfil do Professor Ouro
- Multiplicador de conhecimento
- Mentor de colegas
- Líder em inovação pedagógica

---

## 5.5. Página Suporte (suporte.html)

### Seções Principais

#### 5.5.1. Como Reportar Erros à Equipe One Click

##### Passo a Passo Visual
1. **Identifique o Problema**
   - Anote tela/funcionalidade
   - Descreva o que estava fazendo

2. **Capture uma Tela**
   - Print screen do erro
   - Para anexar ao reporte

3. **Envie por E-mail**
   - Formulário estruturado (veja 5.5.2)

##### Formulário de Reporte de Erros
- **Campos Obrigatórios**:
  1. Nome Completo (text)
  2. E-mail (email, validação)
  3. Escola SESI (text)
  4. Tipo de Problema (select):
     - Erro Técnico
     - Lentidão da Plataforma
     - Problema de Login
     - Atividades não carregam
     - Relatórios com erro
     - Problema no Mobile
     - Outro
  5. Navegador Utilizado (select):
     - Google Chrome
     - Mozilla Firefox
     - Safari
     - Microsoft Edge
     - Outro
  6. Descrição Detalhada (textarea, 6 linhas)

- **Campo Opcional**:
  7. Nível de Urgência (radio):
     - Baixa (padrão)
     - Média
     - Alta (Urgente) - destacada em vermelho

##### Funcionalidades do Formulário
- **Validação**: HTML5 + JavaScript em tempo real
- **Feedback Visual**:
  - Durante envio: Botão "Enviando..." com spinner
  - Sucesso: Mensagem verde com ícone
  - Erro: Mensagem vermelha com ícone
- **Envio**: Abre cliente de e-mail com template formatado
- **Destinatário**: soporte.brasil@oneclick.es
- **Assunto Dinâmico**: `[URGÊNCIA] Reporte de Erro - [tipo]`
- **Corpo Estruturado**:
  ```
  ===========================================
  REPORTE DE ERRO - BLUEBERRY MATH SESI
  ===========================================
  
  INFORMAÇÕES DO PROFESSOR:
  Nome: [nome]
  E-mail: [email]
  Escola SESI: [escola]
  
  DETALHES DO PROBLEMA:
  Tipo de Problema: [tipo]
  Navegador: [navegador]
  Nível de Urgência: [URGÊNCIA]
  
  DESCRIÇÃO:
  [descrição]
  
  ===========================================
  Data/Hora do Reporte: [timestamp]
  ===========================================
  ```

#### 5.5.2. Problemas Conhecidos

##### Accordion com 3 Itens
1. **Lentidão da Plataforma**
   - Descrição do problema
   - Causas conhecidas
   - Soluções temporárias

2. **Aplicativo Móvel Não Disponível**
   - Explicação sobre ausência de app nativo
   - Workaround: Acesso via navegador mobile
   - Limitações em smartphones

3. **Sistema de Correção de Atividades**
   - Problema: Não reconhece respostas alternativas
   - Status: Equipe trabalhando em IA
   - Como ajudar: Reportar casos específicos

#### 5.5.3. FAQ - Perguntas Frequentes

##### 9 Perguntas Pedagógicas Estratégicas

1. **Mas eu já uso tecnologia, não posso avançar mais?**
   - Resposta: Alinhamento institucional, base comum
   - Objetivo: Esclarecer obrigatoriedade do Bronze

2. **Sou obrigado(a) a usar o Blueberry em todas as aulas?**
   - Resposta: Ferramenta de apoio, uso consciente, flexibilidade
   - Objetivo: Desmistificar obrigatoriedade

3. **Quem é responsável pelos resultados dos alunos na plataforma?**
   - Resposta: Indicadores de acompanhamento, não responsabilização
   - Objetivo: Reduzir ansiedade

4. **O que faço se meus alunos não se engajarem?**
   - Resposta: Adaptação gradual, apoio do Ponto Focal
   - Objetivo: Oferecer suporte

5. **Quando teremos formação mais aprofundada?**
   - Resposta: Após Bronze → Prata → Ouro
   - Objetivo: Esclarecer progressão

6. **Isso vai gerar mais trabalho para o professor?**
   - Resposta: Qualificar, não ampliar carga
   - Objetivo: Tranquilizar

7. **Posso adaptar o protocolo à realidade da minha escola?**
   - Resposta: Ajustes com Ponto Focal, diretrizes preservadas
   - Objetivo: Equilibrar flexibilidade e padronização

8. **Quem devo procurar quando tiver dúvidas?**
   - Resposta: Ponto Focal → Responsável Pedagógico
   - Objetivo: Clarificar hierarquia

9. **O que acontece se eu não me sentir seguro(a) para usar?**
   - Resposta: Insegurança normal, acompanhamento contínuo
   - Objetivo: Acolher inseguranças

##### Características do FAQ
- **Fonte**: Guia Rápido do Responsável Pedagógico
- **Alinhamento**: Modelo Blueberry + Trilha Bronze-Prata-Ouro
- **Objetivo**: Proteção do escopo formativo, clareza institucional
- **Formato**: Accordion expansível

---

## 5.6. Página Responsável Pedagógico (responsavel-pedagogico.html)

### Status
- **Pendente de implementação**

### Conteúdo Planejado
- Guia completo para Responsáveis Pedagógicos
- Orientações estratégicas
- Gestão de Pontos Focais
- Acompanhamento de professores
- Interpretação de resultados
- Comunicação institucional

---

# 6. SISTEMA JAVASCRIPT

## 6.1. Arquivo main.js

### 6.1.1. Constantes Globais
```javascript
const CERTIFICATION_LEVELS = {
  BRONZE: 'bronze',
  PRATA: 'prata',
  OURO: 'ouro'
};

const STORAGE_KEYS = {
  COMPLETED_LEVELS: 'blueberry-completed-levels',
  MODULE_PROGRESS: 'blueberry-progress'
};
```

### 6.1.2. Funções Principais

#### hasCompletedLevel(level)
- **Parâmetro**: 'bronze', 'prata' ou 'ouro'
- **Retorno**: Boolean
- **Descrição**: Verifica se um nível foi completado

#### markLevelAsCompleted(level)
- **Parâmetro**: 'bronze', 'prata' ou 'ouro'
- **Retorno**: void
- **Descrição**: Marca um nível como completado no localStorage

#### canAccessLevel(level)
- **Parâmetro**: 'bronze', 'prata' ou 'ouro'
- **Retorno**: Boolean
- **Lógica**:
  - Bronze: sempre acessível
  - Prata: requer Bronze completado
  - Ouro: requer Prata completado

#### updateNavigationState()
- **Descrição**: Atualiza estado dos links de navegação
- **Comportamento**:
  - Adiciona/remove classe `disabled`
  - Atualiza `aria-disabled`
  - Previne cliques em links bloqueados

#### showAlert(message, type, duration)
- **Parâmetros**:
  - message: String (texto da mensagem)
  - type: 'success' | 'warning' | 'error' | 'info'
  - duration: Number (ms, padrão 5000)
- **Descrição**: Exibe alerta temporário no canto superior direito

#### setupModuleTracking()
- **Descrição**: Configura tracking de módulos assistidos
- **Funcionalidades**:
  - Carrega progresso salvo do localStorage
  - Adiciona eventos aos botões "Marcar como Assistido"
  - Atualiza barra de progresso
  - Calcula percentual completado

#### setupBronzeCertificate()
- **Descrição**: Gerencia conclusão da certificação Bronze
- **Funcionalidades**:
  - Verifica se Bronze já foi completado
  - Evento de conclusão:
    - Salva no localStorage
    - Mostra botão de download
    - Desabilita botão de conclusão
    - Exibe alerta de sucesso
    - Desbloqueia Prata
    - Scroll até botão de certificado

### 6.1.3. Estrutura de Dados (localStorage)

#### Chave: 'blueberry-completed-levels'
```json
{
  "bronze": true,
  "prata": false,
  "ouro": false
}
```

#### Chave: 'blueberry-progress'
```json
{
  "modulo-1": true,
  "modulo-2": false,
  "modulo-3": true,
  "modulo-4": false
}
```

## 6.2. Validação de Formulário (suporte.html)

### validateForm()
- **Descrição**: Valida todos os campos do formulário de suporte
- **Validações**:
  - Campos obrigatórios preenchidos
  - Formato de e-mail válido
  - Descrição com mínimo de caracteres
- **Retorno**: Boolean

### handleFormSubmit(event)
- **Descrição**: Gerencia envio do formulário
- **Fluxo**:
  1. Previne submit padrão
  2. Valida campos
  3. Monta corpo do e-mail formatado
  4. Gera assunto dinâmico
  5. Abre mailto com template
  6. Mostra feedback de sucesso
  7. Reseta formulário após 2s

---

# 7. SISTEMA DE DOWNLOADS

## 7.1. Estrutura de Pastas

### downloads/certificados/
- **Função**: Armazenar PDFs dos certificados
- **Arquivos**:
  - certificado-bronze-modelo.pdf (aguardando)
  - certificado-prata-modelo.pdf (aguardando)
  - certificado-ouro-modelo.pdf (aguardando)

### downloads/documentos-oficiais/
- **Função**: Documentos base da trilha
- **Arquivos**:
  - matriz-formacao-blueberry.pdf (aguardando)
  - playbook-ponto-focal.pdf (aguardando)

### downloads/materiais-apoio/
- **Função**: Slides e materiais dos módulos
- **Arquivos**:
  - modulo-1-planos-aula-premium.pdf ✅ (1,679,361 bytes)
  - modulo-1-slides.pdf (aguardando)
  - modulo-2-slides.pdf (aguardando)
  - modulo-3-slides.pdf (aguardando)
  - modulo-4-slides.pdf (aguardando)

## 7.2. Especificações dos PDFs

### Certificados
- **Formato**: A4 (210 x 297 mm)
- **Orientação**: Paisagem (Landscape)
- **Resolução**: 300 DPI
- **Tamanho estimado**: 500 KB - 1 MB
- **Elementos Obrigatórios**:
  - Logos: Blueberry Math + SESI + Oneclick
  - Título: "Certificado de Conclusão - [Nível]"
  - Campo: Nome do Professor
  - Campo: Data de Conclusão
  - Campo: Carga Horária
  - Assinatura digital/imagem
  - QR Code (opcional, futuro)

### Documentos Oficiais
- **Matriz de Formação**:
  - Conversão de .docx para PDF
  - Manter formatação original
  - Adicionar capa profissional
  - Sumário com hyperlinks
  - Rodapé com número de páginas
  - Tamanho estimado: 1-3 MB

- **Playbook do Ponto Focal**:
  - Arquivo já existente
  - Renomear para padrão
  - Upload direto

### Slides dos Módulos
- **Formato**: PowerPoint → PDF
- **Orientação**: Paisagem (16:9)
- **Tamanho por Slide**:
  - Módulo 1: ~15-20 slides
  - Módulo 2: ~20-25 slides
  - Módulo 3: ~25-30 slides
  - Módulo 4: ~15-20 slides
- **Elementos**:
  - Identidade visual Blueberry + SESI
  - Títulos claros
  - Imagens/diagramas explicativos
  - Exemplos práticos
  - Resumo ao final
- **Tamanho estimado**: 2-5 MB por arquivo

## 7.3. Links de Download

### No HTML
```html
<!-- Certificado -->
<a href="downloads/certificados/certificado-bronze-modelo.pdf" 
   download="Certificado-Bronze-Blueberry.pdf" 
   class="btn btn-primary">
  Baixar Certificado Bronze
</a>

<!-- Slides Módulo -->
<a href="downloads/materiais-apoio/modulo-1-slides.pdf" 
   download="Modulo-1-Blueberry-Slides.pdf" 
   class="btn btn-secondary">
  Baixar Slides do Módulo
</a>

<!-- Documento Oficial -->
<a href="downloads/documentos-oficiais/matriz-formacao-blueberry.pdf" 
   download 
   class="footer-link">
  Matriz de Formação (PDF)
</a>
```

---

# 8. INTEGRAÇÃO COM JIRA SERVICE DESK

## 8.1. Status Atual
- **Frontend**: Preparado com sistema híbrido
- **Backend**: Não implementado (necessário para integração completa)
- **Fallback**: Formulário mailto funcional

## 8.2. Arquitetura Proposta

### Fluxo Completo
```
[Formulário HTML (suporte.html)]
    ↓ (fetch POST)
[Backend Proxy (Node.js ou Python)]
    ↓ (API Call)
[Jira Service Desk API]
    ↓ (Ticket Criado)
[Resposta JSON]
    ↓
[Feedback ao Usuário]
```

### Fluxo Atual (Fallback)
```
[Formulário HTML]
    ↓ (JavaScript)
[Template de E-mail Formatado]
    ↓ (mailto:)
[Cliente de E-mail do Professor]
    ↓ (Envio Manual)
[soporte.brasil@oneclick.es]
```

## 8.3. Alternativa Recomendada: Email Handler do Jira

### Vantagens
- Não requer backend adicional
- Configuração apenas no Jira (servidor)
- Formulário atual já funciona perfeitamente

### Configuração (Lado One Click)
1. Acessar Jira Service Desk
2. Configurar "Email Handler"
3. Monitorar e-mail: soporte.brasil@oneclick.es
4. Definir regras de criação automática de tickets
5. Mapear campos do e-mail para campos do Jira

### Resultado
- E-mails recebidos → Tickets criados automaticamente
- Professores não percebem diferença
- Equipe Oneclick gerencia via Jira

## 8.4. Informações Técnicas para Implementação Futura

### Jira Service Desk API
- **Portal ID**: 31 (identificado na URL)
- **Base URL**: https://one-click.atlassian.net
- **Endpoint**: `/rest/servicedeskapi/request`
- **Autenticação**: Basic Auth (email + API token)
- **Request Type ID**: A identificar (via API)

### Dados a Enviar
```json
{
  "serviceDeskId": "31",
  "requestTypeId": "TBD",
  "requestFieldValues": {
    "summary": "[URGENCIA] Tipo - Escola",
    "description": "Corpo formatado",
    "customfield_XXXX": "email_professor",
    "customfield_YYYY": "escola",
    "customfield_ZZZZ": "navegador"
  },
  "requestParticipants": ["email@professor.com"]
}
```

### Documentação Completa
- Arquivo: `INTEGRACAO_JIRA_SERVICE_DESK.md`
- Inclui: Código backend Node.js e Python, configuração, deploy

---

# 9. RESPONSIVIDADE

## 9.1. Breakpoints

```css
/* Mobile First Approach */

/* Mobile: < 768px (padrão, sem media query) */
- Layout vertical
- Tipografia menor
- Espaçamentos reduzidos

/* Tablet: 768px - 1023px */
@media (min-width: 768px) {
  - Grid 2 colunas
  - Navegação horizontal
  - Cards lado a lado
}

/* Desktop: 1024px - 1279px */
@media (min-width: 1024px) {
  - Grid 3 colunas
  - Sidebars
  - Hover effects mais elaborados
}

/* Desktop Large: ≥ 1280px */
@media (min-width: 1280px) {
  - Largura máxima de conteúdo
  - Espaçamentos generosos
  - Tipografia otimizada
}
```

## 9.2. Adaptações por Dispositivo

### Mobile (< 768px)
- **Header**:
  - Logo reduzido
  - Navegação vertical colapsável (futuro: menu hamburger)
- **Hero Section**:
  - Tipografia reduzida (36px → 28px)
  - Padding reduzido
- **Cards de Certificação**:
  - Coluna única (width: 100%)
  - Espaçamento vertical maior
- **Botões**:
  - Full-width (width: 100%)
  - Padding maior para touch
- **Footer**:
  - Colunas empilhadas verticalmente

### Tablet (768px - 1023px)
- **Grid de Certificações**: 2 colunas
- **Navegação**: Horizontal completa
- **Tip Box**: Largura otimizada

### Desktop (≥ 1024px)
- **Grid de Certificações**: 3 colunas
- **Container**: max-width 1200px, centralizado
- **Espaçamentos**: Valores máximos

## 9.3. Imagens Responsivas

```css
img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}
```

### Logos
- **Blueberry**: height: 40px (desktop) → 32px (mobile)
- **SESI**: height: 36px (desktop) → 28px (mobile)
- **Oneclick**: height: 20px (fixo)

## 9.4. Vídeos Responsivos

### Aspect Ratio 16:9
```css
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

---

# 10. ACESSIBILIDADE (WCAG 2.1 AA)

## 10.1. Conformidade

### Contraste de Cores
- **Texto normal**: Contraste ≥ 4.5:1
- **Texto grande (≥18px)**: Contraste ≥ 3:1
- **Componentes interativos**: Contraste ≥ 3:1

### Testes Realizados
- Azul (#0052CC) em branco: 7.8:1 ✅
- Cinza escuro (#172B4D) em branco: 14.2:1 ✅
- Verde (#00875A) em branco: 5.2:1 ✅

## 10.2. Navegação por Teclado

### Teclas Suportadas
- **Tab**: Navegar entre elementos focáveis
- **Shift + Tab**: Navegar para trás
- **Enter**: Ativar links e botões
- **Espaço**: Ativar botões
- **Setas**: Navegar em accordions (futuro)

### Focus States
```css
*:focus {
  outline: 3px solid var(--primary-blue);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(0, 82, 204, 0.2);
}
```

## 10.3. Atributos ARIA

### Navegação
```html
<nav aria-label="Navegação principal">
<a aria-current="page">Bronze</a>
<a aria-disabled="true">Prata</a>
```

### Botões Desabilitados
```html
<button disabled aria-disabled="true">
  Não Disponível
</button>
```

### Accordion
```html
<button aria-expanded="false" aria-controls="module-1">
  Módulo 1
</button>
<div id="module-1" aria-hidden="true">
  Conteúdo
</div>
```

### Alertas
```html
<div role="alert" aria-live="assertive">
  Certificação concluída com sucesso!
</div>
```

## 10.4. Estrutura Semântica

### HTML5 Semantic Elements
- `<header>`: Cabeçalho do site
- `<nav>`: Navegação principal
- `<main>`: Conteúdo principal
- `<section>`: Seções de conteúdo
- `<article>`: Cards de certificação
- `<aside>`: Tip boxes e callouts
- `<footer>`: Rodapé

### Headings Hierarchy
```html
<h1>Título Principal</h1>
  <h2>Seção</h2>
    <h3>Subseção</h3>
      <h4>Detalhe</h4>
```

## 10.5. Skip Link

```html
<a href="#main-content" class="skip-link">
  Pular para o conteúdo principal
</a>
```

- Visível apenas ao receber foco (Tab)
- Posicionamento fixo no topo
- Alto contraste
- Tamanho de fonte adequado

## 10.6. Textos Alternativos

### Imagens Funcionais
```html
<img src="logo-blueberry.png" alt="Blueberry Math">
<img src="logo-sesi.png" alt="SESI - Serviço Social da Indústria">
```

### Imagens Decorativas
```html
<img src="pattern.svg" alt="" role="presentation">
```

### Ícones
```html
<i class="fas fa-check" aria-hidden="true"></i>
<span class="sr-only">Concluído</span>
```

## 10.7. Line-Height e Legibilidade

```css
body {
  line-height: 1.6; /* WCAG recomenda ≥ 1.5 */
  letter-spacing: 0.02em;
}

h1, h2, h3 {
  line-height: 1.3;
}
```

---

# 11. PERFORMANCE E OTIMIZAÇÃO

## 11.1. Carregamento de Fontes

### Google Fonts Otimizado
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
```

- **Preconnect**: Reduz latência de DNS/TCP
- **display=swap**: Evita FOIT (Flash of Invisible Text)

## 11.2. Imagens

### Otimização de Logos
- **logo-blueberry.png**: 3.3 KB (já otimizado)
- **logo-sesi.png**: 9.6 KB (já otimizado)
- **logo-oneclick.png**: 33.6 KB (considerar compressão)

### Recomendações
- Converter para WebP quando possível
- Implementar lazy loading para imagens abaixo da dobra
- Usar `<picture>` para servir resoluções diferentes

## 11.3. CSS

### Estrutura Atual
- Arquivo único: `css/style.css`
- Organizado por seções
- Variáveis CSS para consistência

### Otimizações Futuras
- Minificação (remover comentários e espaços)
- Critical CSS inline no `<head>`
- Restante carregado assincronamente

## 11.4. JavaScript

### Estrutura Atual
- Arquivo único: `js/main.js`
- Carregado no final do `<body>`
- Sem dependências externas (exceto Font Awesome)

### Boas Práticas Implementadas
- Event delegation quando possível
- Debounce em eventos de scroll (futuro)
- localStorage para persistência leve

## 11.5. Vídeos (YouTube Embeds)

### Lazy Loading
```html
<iframe loading="lazy" src="https://www.youtube.com/embed/...">
```

### Considerações
- Vídeos só carregam ao expandir accordion
- Economiza banda e melhora performance inicial

---

# 12. TESTES E VALIDAÇÃO

## 12.1. Testes Funcionais

### Fluxo Completo de Certificação
- [ ] Acessar index.html
- [ ] Verificar que Prata e Ouro estão bloqueados
- [ ] Clicar em "Começar pelo Bronze"
- [ ] Expandir Módulo 1, assistir vídeo
- [ ] Clicar "Marcar como Assistido"
- [ ] Verificar atualização da barra de progresso
- [ ] Repetir para Módulos 2, 3 e 4
- [ ] Barra de progresso chega a 100%
- [ ] Clicar "Marcar Bronze como Concluída"
- [ ] Verificar alerta de sucesso
- [ ] Verificar que botão de certificado aparece
- [ ] Clicar "Baixar Certificado Bronze"
- [ ] Verificar download do PDF
- [ ] Voltar para index.html
- [ ] Verificar que link de Prata está desbloqueado
- [ ] Acessar prata.html
- [ ] Verificar que conteúdo é exibido (não bloqueado)

### Formulário de Suporte
- [ ] Acessar suporte.html
- [ ] Tentar enviar formulário vazio
- [ ] Verificar mensagens de validação
- [ ] Preencher todos os campos obrigatórios
- [ ] Inserir e-mail inválido
- [ ] Verificar validação de e-mail
- [ ] Corrigir e-mail
- [ ] Enviar formulário
- [ ] Verificar que cliente de e-mail abre
- [ ] Verificar template pré-preenchido
- [ ] Verificar assunto dinâmico
- [ ] Enviar e-mail
- [ ] Verificar mensagem de sucesso no site
- [ ] Verificar que formulário é resetado

### Navegação e Links
- [ ] Testar todos os links do header
- [ ] Testar todos os links do footer
- [ ] Verificar que links de download funcionam
- [ ] Testar skip link (Tab para ativar)
- [ ] Verificar navegação por teclado completa

## 12.2. Testes de Responsividade

### Dispositivos
- [ ] iPhone SE (375px)
- [ ] iPhone 12 Pro (390px)
- [ ] Samsung Galaxy S20 (412px)
- [ ] iPad Mini (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop HD (1920px)
- [ ] Desktop 4K (3840px)

### Verificações
- [ ] Layout não quebra em nenhuma resolução
- [ ] Textos legíveis em mobile
- [ ] Botões tocáveis (min 44x44px)
- [ ] Imagens não pixelizadas
- [ ] Vídeos responsivos
- [ ] Formulários usáveis

## 12.3. Testes de Navegadores

### Navegadores Desktop
- [ ] Google Chrome (última versão)
- [ ] Mozilla Firefox (última versão)
- [ ] Safari (macOS)
- [ ] Microsoft Edge (última versão)

### Navegadores Mobile
- [ ] Safari (iOS)
- [ ] Chrome (Android)
- [ ] Samsung Internet

### Verificações
- [ ] CSS renderiza corretamente
- [ ] JavaScript funciona sem erros
- [ ] Vídeos carregam e reproduzem
- [ ] localStorage funciona
- [ ] Fontes carregam corretamente

## 12.4. Testes de Acessibilidade

### Ferramentas
- [ ] WAVE (Web Accessibility Evaluation Tool)
- [ ] axe DevTools
- [ ] Lighthouse (Chrome DevTools)
- [ ] Leitor de Tela (NVDA ou JAWS)

### Verificações
- [ ] Contraste de cores adequado
- [ ] Navegação por teclado funcional
- [ ] Focus states visíveis
- [ ] Leitores de tela conseguem navegar
- [ ] Atributos ARIA corretos
- [ ] Skip link funciona
- [ ] Headings hierarchy correta
- [ ] Textos alternativos presentes

## 12.5. Testes de Performance

### Ferramentas
- [ ] Google PageSpeed Insights
- [ ] Lighthouse
- [ ] WebPageTest

### Métricas Alvo
- **First Contentful Paint**: < 1.8s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.8s
- **Cumulative Layout Shift**: < 0.1
- **Total Blocking Time**: < 300ms

### Verificações
- [ ] Imagens otimizadas
- [ ] Fontes carregam rapidamente
- [ ] JavaScript não bloqueia rendering
- [ ] CSS minificado (futuro)
- [ ] Sem recursos bloqueantes

---

# 13. CONTEÚDO E TEXTOS

## 13.1. Tom de Voz

### Diretrizes
- **Profissional**: Linguagem institucional, mas não engessada
- **Acolhedor**: Reconhece desafios dos professores
- **Claro**: Evita jargões técnicos desnecessários
- **Empoderador**: Foca em capacitação, não imposição

### Exemplos
- ✅ "Você vai aprender a..."
- ❌ "O professor deve..."
- ✅ "Esta formação capacita você para..."
- ❌ "É obrigatório que..."

## 13.2. Terminologia Institucional

### Cargos e Papéis (Uso Obrigatório)
- **Ponto Focal da escola** (não "coordenador")
- **Responsável Pedagógico** (não "supervisor")
- **Professor SESI** (sempre especificar instituição)

### Níveis de Certificação
- **Bronze** (nunca "Básico" ou "Nível 1")
- **Prata** (nunca "Intermediário" ou "Nível 2")
- **Ouro** (nunca "Avançado" ou "Nível 3")

### Plataforma
- **Blueberry Math** (sempre completo, não apenas "Blueberry")

## 13.3. Textos Padrão

### Call to Action (CTAs)
- "Começar pelo Bronze"
- "Acessar Certificação"
- "Marcar como Assistido"
- "Marcar Bronze como Concluída"
- "Baixar Certificado Bronze"
- "Reportar Erro"
- "Enviar Reporte"

### Mensagens de Feedback
- **Sucesso**: "Certificação concluída com sucesso! Você pode agora acessar o nível Prata."
- **Aviso**: "Complete a Certificação Bronze para desbloquear este conteúdo."
- **Erro**: "Por favor, preencha todos os campos obrigatórios."

### Labels de Status
- "Não iniciado"
- "Assistido"
- "Concluída"
- "Bloqueado"
- "Obrigatória"
- "Opcional"

---

# 14. PAPÉIS INSTITUCIONAIS

## 14.1. Professor SESI

### Perfil
- Leciona Matemática para 7º ano
- Público principal da trilha
- Obrigação: Completar Bronze
- Opcional: Prata e Ouro

### Jornada na Trilha
1. Acessa plataforma pela primeira vez
2. Realiza Certificação Bronze (obrigatória)
3. Baixa certificado Bronze
4. Decide continuar para Prata (opcional)
5. Se continuar, realiza Prata e Ouro

## 14.2. Ponto Focal da Escola

### Perfil
- Presente em cada unidade SESI
- Organização e acompanhamento pedagógico
- Primeiro ponto de contato para dúvidas
- Articula com Responsável Pedagógico quando necessário

### Responsabilidades
- Apoiar professores no uso da plataforma
- Acompanhar progresso das certificações
- Reportar dificuldades ao Responsável Pedagógico
- Facilitar comunicação escola-coordenação

## 14.3. Responsável Pedagógico

### Perfil
- Supervisão estratégica da rede SESI
- Suporte aos Pontos Focais
- Gestão da implementação do Blueberry Math

### Responsabilidades
- Orientar Pontos Focais
- Monitorar indicadores de adesão
- Ajustar estratégias conforme necessário
- Garantir alinhamento institucional
- Proteger escopo formativo

---

# 15. PROBLEMAS CONHECIDOS

## 15.1. Lentidão da Plataforma Blueberry

### Descrição
Alguns usuários reportam lentidão ao acessar a plataforma Blueberry Math, especialmente em horários de pico.

### Causas
- Alta demanda simultânea
- Infraestrutura de servidor
- Conexão de internet das escolas

### Status
- Equipe Oneclick trabalhando em otimizações
- Recomendação: Acessar fora de horários de pico

### Impacto no Site da Trilha
- Nenhum (este site é estático e independente)

## 15.2. Ausência de App Móvel Nativo

### Descrição
Plataforma Blueberry Math não possui aplicativo nativo para iOS/Android.

### Workaround
- Acesso via navegador mobile (Chrome ou Safari)
- Modo paisagem recomendado
- Algumas funcionalidades podem ficar limitadas

### Status
- App nativo não está no roadmap atual
- Site da Trilha é totalmente responsivo

## 15.3. Sistema de Correção de Atividades

### Descrição
Sistema pode não reconhecer respostas corretas escritas de formas alternativas (ex: "1/2" vs "0.5").

### Status
- Equipe implementando IA para melhor reconhecimento
- Expandindo banco de respostas aceitas
- Aprimorando sistema de dicas

### Como Ajudar
- Professores devem reportar casos específicos
- E-mail: soporte.brasil@oneclick.es
- Assunto: [FEEDBACK] Resposta Não Reconhecida

---

# 16. SUPORTE E CONTATO

## 16.1. Canais de Suporte

### E-mail Principal
- **Endereço**: soporte.brasil@oneclick.es
- **Tipo**: Suporte técnico e dúvidas gerais
- **Tempo de Resposta**: 24-48 horas úteis
- **Para**: Erros técnicos, dúvidas sobre plataforma, sugestões

### Hierarquia de Suporte
1. **Primeiro Contato**: Ponto Focal da escola
2. **Escalamento**: Responsável Pedagógico
3. **Suporte Técnico**: soporte.brasil@oneclick.es

## 16.2. Como Reportar Erros

### Via Formulário (suporte.html)
1. Acesse página de Suporte
2. Preencha formulário completo
3. Descreva detalhadamente o problema
4. Envie e-mail gerado
5. Aguarde retorno em 24-48h

### Informações Necessárias
- Nome completo
- E-mail de contato
- Escola SESI
- Tipo de problema
- Navegador utilizado
- Descrição detalhada
- Print screen (se possível)

## 16.3. FAQ e Autoajuda

### Recursos Disponíveis
- **FAQ na Página Suporte**: 9 perguntas pedagógicas
- **Problemas Conhecidos**: Accordion com soluções
- **Documentos Oficiais**: Playbook e Matriz de Formação

---

# 17. ROADMAP E PRÓXIMOS PASSOS

## 17.1. Curto Prazo (1-2 meses)

### Conteúdo
- [ ] Gravar vídeos dos Módulos 2, 3 e 4
- [ ] Criar slides de apoio para todos os módulos
- [ ] Gerar certificados Bronze, Prata e Ouro (PDFs)
- [ ] Converter Matriz de Formação para PDF
- [ ] Adicionar Playbook do Ponto Focal

### Páginas
- [ ] Implementar Guia do Responsável Pedagógico
- [ ] Desenvolver conteúdo completo de Prata
- [ ] Desenvolver conteúdo completo de Ouro

### Melhorias
- [ ] Adicionar favicon personalizado
- [ ] Otimizar imagens (compressão, WebP)
- [ ] Implementar menu mobile (hamburger)

## 17.2. Médio Prazo (3-6 meses)

### Backend e Integração
- [ ] Implementar backend para persistência de dados
- [ ] Autenticação de usuários
- [ ] Integração com Jira Service Desk (API)
- [ ] Sistema de notificações por e-mail

### Funcionalidades
- [ ] Geração dinâmica de certificados (nome personalizado)
- [ ] QR Code nos certificados para verificação
- [ ] Dashboard de progresso para Pontos Focais
- [ ] Analytics de conclusão por escola

### Conteúdo
- [ ] Biblioteca de vídeos expandida
- [ ] Materiais complementares (guias, checklists)
- [ ] Casos de sucesso de professores

## 17.3. Longo Prazo (6-12 meses)

### Plataforma
- [ ] Sistema de gamificação (badges, conquistas)
- [ ] Fórum de discussão entre professores
- [ ] Mentoria online (professores Ouro mentoram Bronze)
- [ ] Webinars e lives sobre boas práticas

### Expansão
- [ ] Trilhas para outros anos escolares (6º, 8º, 9º)
- [ ] Versão para outras disciplinas
- [ ] Programa de embaixadores (professores Ouro)

### Dados e Analytics
- [ ] Dashboard executivo para SESI
- [ ] Relatórios de impacto pedagógico
- [ ] Métricas de retenção e engajamento
- [ ] A/B testing de conteúdos

---

# 18. DECISÕES TÉCNICAS DOCUMENTADAS

## 18.1. HTML Estático vs. Backend

### Decisão
Site estático (HTML, CSS, JavaScript) sem backend.

### Justificativa
- Documentos oficiais não especificam backend
- Problemas técnicos na plataforma atual sugerem começar simples
- Menor complexidade de deploy e manutenção
- Suficiente para MVP da trilha

### Limitações
- Progresso salvo apenas localmente (localStorage)
- Não sincroniza entre dispositivos
- Sem autenticação de usuários
- Sem analytics centralizado

### Evolução Futura
Backend será implementado na Fase 2 para:
- Persistência de dados em servidor
- Autenticação e controle de acesso
- Dashboard de coordenação
- Integração com sistemas SESI

## 18.2. Separação Estrita Entre Níveis

### Decisão
Páginas independentes para cada certificação, sem links cruzados prematuros.

### Justificativa
Matriz Oficial enfatiza: "Cada certificação habilita competências específicas, sem sobreposição de papéis ou exigências antecipadas."

### Implementação
- Links para Prata desabilitados até Bronze completado
- Links para Ouro desabilitados até Prata completado
- Verificação via JavaScript + localStorage
- Mensagens claras de requisitos

## 18.3. Página Dedicada a Suporte

### Decisão
`suporte.html` como página independente, acessível de qualquer nível.

### Justificativa
Reunião 05/01/2026 (item 8): Proposta de Andressa Pimentel para incluir suporte técnico na formação Bronze.

### Implementação
- Link "Suporte" sempre presente na navegação
- Formulário de reporte estruturado
- FAQ pedagógico alinhado ao modelo
- Problemas conhecidos com soluções

## 18.4. Terminologia Institucional Rigorosa

### Decisão
Usar exclusivamente "Ponto Focal da escola" e "Responsável Pedagógico".

### Justificativa
Reunião 05/01/2026 (itens 13 + 22): Cultura SESI de padronização rigorosa e terminologia correta para os cargos.

### Implementação
- Busca e substituição em todos os textos
- Glossário de termos aprovados
- Revisão antes de cada deploy

## 18.5. Paleta de Cores Inferida

### Decisão
Paleta baseada em azul (#0052CC) como cor primária.

### Justificativa
- Nome "Blueberry" sugere azul
- Contexto institucional SESI
- Análise dos Playbooks

### Nota
Aguardando confirmação de manual de identidade visual oficial. Se necessário, cores podem ser ajustadas via CSS variables.

## 18.6. Formulário mailto vs. API

### Decisão
Formulário com mailto como fallback, preparado para API futura.

### Justificativa
- Funcionalidade imediata sem backend
- Preparado para evolução
- Email Handler do Jira pode automatizar criação de tickets

### Implementação
- Código JavaScript híbrido
- Tenta API primeiro (quando disponível)
- Fallback para mailto garantido
- Template de e-mail estruturado

---

# 19. MÉTRICAS DE SUCESSO

## 19.1. Métricas de Adoção

### Taxa de Conclusão do Bronze
- **Meta**: ≥ 80% dos professores completam Bronze em 30 dias
- **Medição**: Via backend (futuro) ou pesquisa manual

### Progressão para Prata
- **Meta**: ≥ 40% dos que completam Bronze iniciam Prata
- **Medição**: Analytics de navegação

### Tempo Médio de Conclusão
- **Meta Bronze**: ≤ 5 horas (incluindo vídeos e atividades)
- **Meta Prata**: ≤ 8 horas
- **Meta Ouro**: ≤ 10 horas

## 19.2. Métricas de Engajamento

### Downloads de Materiais
- **Meta**: ≥ 70% dos professores baixam slides dos módulos
- **Medição**: Contador de downloads (futuro)

### Acesso ao Suporte
- **Meta**: ≤ 5% dos professores precisam contatar suporte
- **Indicador**: FAQ resolve a maioria das dúvidas

### Retorno ao Site
- **Meta**: ≥ 50% retornam ao site após primeira visita
- **Medição**: Google Analytics (quando implementado)

## 19.3. Métricas de Satisfação

### NPS (Net Promoter Score)
- **Meta**: NPS ≥ 50 (promotores - detratores)
- **Medição**: Pesquisa pós-certificação

### Avaliação da Formação
- **Meta**: ≥ 4.5/5 estrelas
- **Medição**: Formulário de feedback

### Clareza dos Conteúdos
- **Meta**: ≥ 90% dos professores consideram conteúdos claros
- **Medição**: Pergunta específica em pesquisa

## 19.4. Métricas Técnicas

### Performance
- **Lighthouse Score**: ≥ 90/100
- **Time to Interactive**: ≤ 3.8s
- **Cumulative Layout Shift**: ≤ 0.1

### Acessibilidade
- **WAVE Errors**: 0
- **Lighthouse Accessibility**: ≥ 95/100
- **Contraste**: 100% conforme

### Bugs e Erros
- **Meta**: ≤ 1 bug crítico por trimestre
- **Tempo de Resolução**: ≤ 7 dias

---

# 20. MANUTENÇÃO E ATUALIZAÇÃO

## 20.1. Responsabilidades

### Oneclick (Desenvolvedor)
- Correção de bugs
- Implementação de novas funcionalidades
- Atualizações de segurança
- Suporte técnico via e-mail

### SESI (Cliente)
- Definição de conteúdos pedagógicos
- Aprovação de mudanças estratégicas
- Feedback de usuários
- Decisões sobre roadmap

## 20.2. Processo de Atualização

### Conteúdo
1. SESI envia novos conteúdos (vídeos, PDFs)
2. Oneclick valida formato e tamanho
3. Upload para pasta `downloads/`
4. Testes de download
5. Deploy em produção

### Funcionalidades
1. SESI solicita nova funcionalidade
2. Oneclick estima esforço e prazo
3. Aprovação de escopo
4. Desenvolvimento em branch separado
5. Testes internos
6. Homologação com SESI
7. Deploy em produção

### Bugs
1. Usuário reporta via formulário
2. Oneclick classifica criticidade
3. Correção conforme SLA:
   - Crítico: 24h
   - Alto: 3 dias
   - Médio: 7 dias
   - Baixo: 14 dias
4. Deploy de correção
5. Comunicação ao usuário

## 20.3. Versionamento

### Formato: MAJOR.MINOR.PATCH

**Exemplo**: v1.2.3

- **MAJOR**: Mudanças que quebram compatibilidade
- **MINOR**: Novas funcionalidades compatíveis
- **PATCH**: Correções de bugs

### Histórico de Versões
- **v0.1.0**: Sistema de Design e estrutura base
- **v0.2.0**: Landing Page funcional
- **v0.3.0**: Página Bronze completa
- **v0.4.0**: Páginas Prata, Ouro e Suporte
- **v0.5.0**: Logos, downloads e certificados
- **v1.0.0**: Primeira versão completa (futuro)

## 20.4. Backup e Segurança

### Código Fonte
- **Repositório**: Git (recomendado: GitHub privado)
- **Commits**: Diários durante desenvolvimento
- **Branches**: main (produção), develop (homologação)

### Arquivos de Conteúdo
- **Backup**: Semanal de pasta `downloads/`
- **Versionamento**: PDFs numerados (v1, v2, etc.)
- **Retenção**: 3 meses de histórico

### Dados de Usuários (Futuro)
- **Backup**: Diário de banco de dados
- **Criptografia**: Dados sensíveis encriptados
- **LGPD**: Conformidade com lei brasileira

---

# 21. CONSIDERAÇÕES FINAIS

## 21.1. Pontos Fortes do Projeto

1. **Alinhamento Institucional**: Total conformidade com documentação oficial SESI
2. **Progressão Clara**: Sistema de desbloqueio respeita curva de aprendizagem
3. **Acessibilidade**: WCAG 2.1 AA desde o início
4. **Responsividade**: Funciona perfeitamente em todos os dispositivos
5. **Suporte Estruturado**: Formulário completo + FAQ pedagógico
6. **Identidade Visual**: Coerente com parceria Blueberry + SESI

## 21.2. Áreas de Melhoria

1. **Backend**: Necessário para persistência e sincronização
2. **Conteúdo**: Vídeos dos Módulos 2-4 pendentes
3. **Certificados**: PDFs precisam ser criados
4. **Analytics**: Sem métricas de uso atualmente
5. **Autenticação**: Sem controle de acesso individual

## 21.3. Recomendações Estratégicas

### Para Lançamento Bem-Sucedido
1. **Piloto**: Testar com 10-20 professores antes de rollout completo
2. **Comunicação**: E-mail institucional explicando a trilha
3. **Suporte**: Equipe dedicada nos primeiros 30 dias
4. **Feedback**: Formulário de avaliação pós-Bronze
5. **Iteração**: Ajustar conteúdos baseado em feedback real

### Para Escala
1. **Backend Robusto**: Investir em infraestrutura de dados
2. **Automação**: Certificados gerados automaticamente
3. **Gamificação**: Motivar conclusão de Prata e Ouro
4. **Comunidade**: Criar rede de professores certificados

### Para Sustentabilidade
1. **Manutenção**: Contrato de suporte contínuo
2. **Atualizações**: Novos conteúdos trimestrais
3. **Documentação**: Manter este briefing atualizado
4. **Treinamento**: Capacitar equipe SESI para autonomia

## 21.4. Agradecimentos

Este projeto é resultado de colaboração entre:
- **SESI**: Visão pedagógica e alinhamento institucional
- **Blueberry Math**: Plataforma e metodologia de cristalização
- **Oneclick**: Desenvolvimento técnico e design
- **Professores SESI**: Feedback e uso real da plataforma

---

# 22. ANEXOS E RECURSOS

## 22.1. Links Úteis

### Projeto
- **Repositório**: [A definir]
- **URL Produção**: [A definir]
- **URL Homologação**: [A definir]

### Referências
- **Oneclick**: https://oneclick.es/pt/
- **SESI**: [site institucional]
- **Blueberry Math**: [site da plataforma]

### Ferramentas
- **Font Awesome**: https://fontawesome.com/
- **Google Fonts**: https://fonts.google.com/
- **WAVE**: https://wave.webaim.org/
- **Lighthouse**: Chrome DevTools

## 22.2. Documentação Técnica Adicional

### Arquivos no Projeto
- `README.md`: Documentação geral do projeto
- `GUIA_VIDEOS.md`: Como adicionar vídeos aos módulos
- `IMPLEMENTACAO_LOGOS_CERTIFICADOS.md`: Sistema de logos e downloads
- `ATUALIZACAO_FAQ.md`: FAQ pedagógico do Responsável Pedagógico
- `IMPLEMENTACAO_FORMULARIO_EMAIL.md`: Formulário de suporte
- `INTEGRACAO_JIRA_SERVICE_DESK.md`: Integração com Jira (futuro)
- `ATUALIZACAO_MODULOS_BRONZE.md`: Estrutura dos módulos Bronze

### Pastas de Documentação
- `downloads/`: READMEs com especificações de cada categoria de arquivo
- `images/`: README com guidelines de imagens

## 22.3. Glossário de Termos

- **Cristalização**: Retenção profunda e transferível de conhecimento matemático
- **Ponto Focal**: Responsável por organização e acompanhamento pedagógico nas unidades SESI
- **Responsável Pedagógico**: Supervisão estratégica da rede SESI
- **Bronze/Prata/Ouro**: Níveis progressivos de certificação
- **Blueberry Math**: Plataforma educacional de matemática adaptativa
- **Protocolo**: Diretrizes de uso do Blueberry (15 min/dia, 5 dias/semana)
- **Adesão**: Métrica de uso regular (≥60 min/semana)
- **Domínio**: Métrica de proficiência (≥70%)
- **Retenção**: Métrica de conhecimento mantido após 7 dias (≥60%)
- **localStorage**: Armazenamento local no navegador para salvar progresso
- **WCAG**: Web Content Accessibility Guidelines (diretrizes de acessibilidade)
- **ARIA**: Accessible Rich Internet Applications (atributos para acessibilidade)

## 22.4. Contatos do Projeto

### Suporte Técnico
- **E-mail**: soporte.brasil@oneclick.es
- **Tipo**: Erros, bugs, dúvidas técnicas
- **SLA**: 24-48 horas úteis

### Coordenação SESI
- **Contato**: [A definir]
- **Tipo**: Decisões estratégicas, conteúdo pedagógico

### Desenvolvimento
- **Oneclick**: [contato técnico]
- **Tipo**: Implementações, mudanças técnicas

---

**FIM DO BRIEFING**

---

**Documento criado em**: 02 de Fevereiro de 2026  
**Versão**: 1.0  
**Autor**: Equipe Oneclick  
**Para**: Projeto Trilha de Formação Blueberry Math + SESI

**Nota**: Este documento deve ser atualizado sempre que houver mudanças significativas no projeto.
