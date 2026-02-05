# Pasta de Downloads - Trilha Blueberry Math + SESI

Esta pasta contém documentos e materiais de apoio para download.

## Estrutura de Arquivos

```
downloads/
├── certificados/
│   ├── certificado-bronze-modelo.pdf
│   ├── certificado-prata-modelo.pdf
│   └── certificado-ouro-modelo.pdf
├── documentos-oficiais/
│   ├── matriz-formacao-blueberry.pdf
│   └── playbook-ponto-focal.pdf
└── materiais-apoio/
    ├── modulo-1-slides.pdf
    ├── modulo-2-slides.pdf
    ├── modulo-3-slides.pdf
    └── modulo-4-slides.pdf
```

## Certificados

### Bronze
- **Arquivo**: `certificados/certificado-bronze-modelo.pdf`
- **Descrição**: Certificado de conclusão da Certificação Bronze (Formação Inicial de Professores SESI)
- **Usado em**: bronze.html (botão de download após completar todos os módulos)

### Prata (Futuro)
- **Arquivo**: `certificados/certificado-prata-modelo.pdf`
- **Descrição**: Certificado de conclusão da Certificação Prata
- **Status**: Aguardando conteúdo definitivo

### Ouro (Futuro)
- **Arquivo**: `certificados/certificado-ouro-modelo.pdf`
- **Descrição**: Certificado de conclusão da Certificação Ouro
- **Status**: Aguardando conteúdo definitivo

## Documentos Oficiais

### Matriz de Formação
- **Arquivo**: `documentos-oficiais/matriz-formacao-blueberry.pdf`
- **Descrição**: Documento oficial com a estrutura completa da trilha de formação
- **Usado em**: footer de todas as páginas (link "Matriz de Formação")

### Playbook do Ponto Focal
- **Arquivo**: `documentos-oficiais/playbook-ponto-focal.pdf`
- **Descrição**: Guia completo para o Responsável Pedagógico (Ponto Focal)
- **Usado em**: footer de todas as páginas (link "Guia Pedagógico")

## Materiais de Apoio (Bronze)

### Módulo 1 - Introdução ao Blueberry Math no Contexto SESI
- **Arquivo**: `materiais-apoio/modulo-1-slides.pdf`
- **Duração**: 25 minutos
- **Conteúdo**: Apresentação sobre o papel do Blueberry no SESI

### Módulo 2 - Navegando pela Plataforma
- **Arquivo**: `materiais-apoio/modulo-2-slides.pdf`
- **Duração**: 30 minutos
- **Conteúdo**: Tutorial de navegação e funcionalidades principais

### Módulo 3 - Recursos Básicos para Sala de Aula
- **Arquivo**: `materiais-apoio/modulo-3-slides.pdf`
- **Duração**: 35 minutos
- **Conteúdo**: Como aplicar recursos do Blueberry em sala

### Módulo 4 - Suporte Técnico e Reporte de Erros
- **Arquivo**: `materiais-apoio/modulo-4-slides.pdf`
- **Duração**: 20 minutos
- **Conteúdo**: Como reportar problemas e obter suporte

## Instruções para Adicionar Arquivos

1. **Para adicionar certificados**:
   - Coloque o PDF em `downloads/certificados/`
   - Nome do arquivo: `certificado-[nivel]-modelo.pdf`

2. **Para adicionar documentos oficiais**:
   - Coloque o PDF em `downloads/documentos-oficiais/`
   - Use nomes descritivos e em minúsculas com hífen

3. **Para adicionar materiais de apoio**:
   - Coloque o PDF em `downloads/materiais-apoio/`
   - Nome do arquivo: `modulo-[numero]-slides.pdf`

## Links HTML Correspondentes

### No bronze.html (Módulos de Treinamento):
```html
<a href="downloads/materiais-apoio/modulo-1-slides.pdf" 
   class="btn btn-secondary btn-small" 
   download>
  <i class="fas fa-download"></i> Baixar Slides
</a>
```

### No bronze.html (Certificado):
```html
<a href="downloads/certificados/certificado-bronze-modelo.pdf" 
   class="btn btn-cta" 
   download>
  <i class="fas fa-certificate"></i> Baixar Certificado Bronze
</a>
```

### No footer (todas as páginas):
```html
<a href="downloads/documentos-oficiais/matriz-formacao-blueberry.pdf" download>
  Matriz de Formação
</a>
<a href="downloads/documentos-oficiais/playbook-ponto-focal.pdf" download>
  Guia Pedagógico
</a>
```

## Status Atual

- [ ] Certificado Bronze (aguardando arquivo)
- [ ] Certificado Prata (aguardando conteúdo)
- [ ] Certificado Ouro (aguardando conteúdo)
- [ ] Matriz de Formação PDF (converter de .docx)
- [ ] Playbook Ponto Focal PDF (já existe, adicionar)
- [ ] Slides Módulo 1 (criar após gravação do vídeo)
- [ ] Slides Módulo 2 (criar após gravação do vídeo)
- [ ] Slides Módulo 3 (criar após gravação do vídeo)
- [ ] Slides Módulo 4 (criar após gravação do vídeo)

---

**Nota**: Todos os links de download já estão configurados no HTML. Basta adicionar os arquivos PDF nas pastas correspondentes para que os downloads funcionem automaticamente.
