# Certificados - Trilha Blueberry Math + SESI

Esta pasta contém os modelos de certificados em PDF para cada nível da trilha.

## Certificados Disponíveis

### 1. Certificado Bronze
- **Arquivo**: `certificado-bronze-modelo.pdf`
- **Status**: Aguardando arquivo
- **Descrição**: Certificado de conclusão da Certificação Bronze (Formação Inicial de Professores SESI)
- **Carga Horária**: 3-4 horas
- **Competências**:
  - Compreensão do papel do Blueberry Math no contexto SESI
  - Navegação básica pela plataforma
  - Aplicação de recursos básicos em sala de aula
  - Reporte de problemas técnicos

### 2. Certificado Prata
- **Arquivo**: `certificado-prata-modelo.pdf`
- **Status**: Aguardando conteúdo definitivo
- **Descrição**: Certificado de conclusão da Certificação Prata (Nível Intermediário)

### 3. Certificado Ouro
- **Arquivo**: `certificado-ouro-modelo.pdf`
- **Status**: Aguardando conteúdo definitivo
- **Descrição**: Certificado de conclusão da Certificação Ouro (Nível Avançado)

## Especificações do Certificado Bronze

### Informações que devem constar:
1. **Logos**: Blueberry Math + SESI
2. **Título**: "Certificado de Conclusão"
3. **Nível**: "Certificação Bronze"
4. **Nome do Professor**: [Campo preenchível]
5. **Texto**: "Certifica que concluiu com êxito a Certificação Bronze da Trilha de Formação Blueberry Math + SESI"
6. **Competências desenvolvidas**: Lista das 4 competências
7. **Carga horária**: 3-4 horas
8. **Data de conclusão**: [Campo preenchível]
9. **Assinaturas**: Responsável SESI + Oneclick (se aplicável)
10. **Rodapé**: Logo Oneclick + "Desenvolvido por Oneclick"

### Design sugerido:
- **Orientação**: Paisagem (A4 horizontal)
- **Cores**: 
  - Primária: Azul (#0052CC)
  - Secundária: Laranja (#FF6B00) para destaque do nível Bronze
  - Neutras: Cinza (#172B4D) para texto
- **Tipografia**: Inter para títulos, Open Sans para corpo
- **Elementos visuais**: Badge Bronze (ícone de medalha)

### Exemplo de layout:
```
┌────────────────────────────────────────────────────────────┐
│  [Logo Blueberry]     CERTIFICADO DE CONCLUSÃO   [Logo SESI]│
│                                                              │
│                    [Badge Bronze - Medalha]                 │
│                                                              │
│                      Certificação Bronze                    │
│                                                              │
│                  Certificamos que                           │
│                                                              │
│                  [NOME DO PROFESSOR]                        │
│                                                              │
│  concluiu com êxito a Certificação Bronze da Trilha        │
│  de Formação Blueberry Math + SESI, demonstrando           │
│  competências em:                                           │
│                                                              │
│  • Compreensão do papel do Blueberry Math no contexto SESI │
│  • Navegação básica pela plataforma                         │
│  • Aplicação de recursos básicos em sala de aula           │
│  • Reporte de problemas técnicos                            │
│                                                              │
│  Carga horária: 3-4 horas                                   │
│  Data de conclusão: [DATA]                                  │
│                                                              │
│  _________________          _________________               │
│  Responsável SESI           Oneclick                        │
│                                                              │
│  [Logo Oneclick] Desenvolvido por Oneclick                  │
└────────────────────────────────────────────────────────────┘
```

## Como usar os certificados no site:

### 1. Download automático após conclusão (bronze.html):
```javascript
// Quando o usuário marca Bronze como concluído
if (BlueberryApp.isLevelCompleted('bronze')) {
  // Mostrar botão de download do certificado
  document.getElementById('download-certificate-btn').style.display = 'block';
}
```

### 2. Link HTML:
```html
<a href="downloads/certificados/certificado-bronze-modelo.pdf" 
   class="btn btn-cta" 
   download="Certificado-Bronze-Blueberry.pdf">
  <i class="fas fa-certificate"></i> 
  Baixar Certificado Bronze
</a>
```

## Próximos passos:

1. **Criar modelo do Certificado Bronze**:
   - Usar ferramenta de design (Canva, Figma, Adobe Illustrator)
   - Seguir especificações acima
   - Exportar como PDF de alta qualidade

2. **Adicionar ao site**:
   - Salvar PDF nesta pasta com nome `certificado-bronze-modelo.pdf`
   - Verificar se o link de download funciona
   - Testar em diferentes navegadores

3. **Versão dinâmica (futuro)**:
   - Integrar com backend para gerar PDFs personalizados
   - Preencher automaticamente nome e data
   - Adicionar código de verificação/QR Code
   - Registrar certificados em banco de dados

---

**Aguardando**: Arquivo do certificado Bronze em formato PDF para adicionar nesta pasta.
