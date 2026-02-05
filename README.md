# Trilha de Formação Blueberry Math + SESI

Sistema de certificação progressiva (Bronze, Prata e Ouro) para professores SESI no contexto do programa educacional Blueberry Math.

## 📋 Sobre o Projeto

Este projeto implementa a interface web da **Trilha de Formação Blueberry**, organizada em três níveis progressivos de certificação:

- **Bronze** - Formação Inicial de Professores SESI (Obrigatória)
- **Prata** - Nível intermediário
- **Ouro** - Nível avançado

O sistema respeita a curva de aprendizagem dos professores e da rede SESI, garantindo que cada certificação habilite competências específicas sem sobreposição de papéis ou exigências antecipadas.

## 🎯 Objetivos

- Fornecer onboarding técnico e pedagógico para uso do Blueberry Math
- Estruturar progressão formativa clara e controlada
- Garantir acessibilidade e responsividade
- Manter identidade visual alinhada com SESI e Blueberry Math

## 📚 Documentação Base

O projeto foi desenvolvido com base nos seguintes documentos oficiais:

1. **Matriz Oficial de Formação – Certificações Blueberry (Bronze, Prata e Ouro)**
2. **Reunião iniciada às 2026_01_05 17_02 GMT-03:00 – Anotações do Gemini**
3. **Playbook do Ponto Focal SESI**

## 🏗️ Estrutura do Projeto

```
/
├── index.html                    # Landing Page ✅
├── bronze.html                   # Certificação Bronze ✅
├── prata.html                    # Certificação Prata (estrutura reservada) ✅
├── ouro.html                     # Certificação Ouro (estrutura reservada) ✅
├── suporte.html                  # Suporte Técnico + FAQ ✅
├── responsavel-pedagogico.html   # Guia do Resp. Pedagógico (pendente)
├── css/
│   └── style.css                 # Sistema de Design completo ✅
├── js/
│   └── main.js                   # Lógica de progressão e interatividade ✅
├── images/
│   ├── logos/                    # Logos oficiais ✅
│   │   ├── logo-blueberry.png
│   │   ├── logo-sesi.png
│   │   └── logo-oneclick.png
│   └── README.md
├── downloads/
│   ├── certificados/             # Certificados em PDF
│   │   ├── certificado-bronze-modelo.pdf (aguardando)
│   │   ├── certificado-prata-modelo.pdf (aguardando)
│   │   └── certificado-ouro-modelo.pdf (aguardando)
│   ├── documentos-oficiais/      # Documentos base
│   │   ├── matriz-formacao-blueberry.pdf (aguardando)
│   │   └── playbook-ponto-focal.pdf (aguardando)
│   └── materiais-apoio/          # Slides dos módulos
│       ├── modulo-1-slides.pdf (aguardando)
│       ├── modulo-2-slides.pdf (aguardando)
│       ├── modulo-3-slides.pdf (aguardando)
│       └── modulo-4-slides.pdf (aguardando)
├── GUIA_VIDEOS.md                # Guia para adicionar vídeos ✅
└── README.md                     # Este arquivo
```

## 🎨 Sistema de Design

### Paleta de Cores

#### Cores Primárias
```css
--primary-blue: #0052CC        /* Azul Blueberry institucional */
--primary-blue-dark: #003D99   /* Azul escuro para hover/títulos */
--primary-blue-light: #3380FF  /* Azul claro para backgrounds */
```

#### Cores Secundárias
```css
--secondary-orange: #FF6B00    /* CTAs e destaques */
--secondary-green: #00875A     /* Sucesso e progresso */
```

#### Cores Neutras
```css
--neutral-900: #172B4D  /* Texto principal */
--neutral-700: #42526E  /* Texto secundário */
--neutral-300: #DFE1E6  /* Bordas */
--neutral-100: #F4F5F7  /* Backgrounds sutis */
--white: #FFFFFF
```

#### Cores de Estado
```css
--success: #00875A   /* Sucesso */
--warning: #FF991F   /* Avisos */
--error: #DE350B     /* Erros, obrigatório */
--info: #0065FF      /* Informações */
```

### Tipografia

**Fonte Principal (Headings e UI):**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
```

**Fonte Corpo de Texto:**
```css
font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
```

**Escala Tipográfica:**
- **H1 Hero:** 48px (3rem)
- **H1 Páginas:** 36px (2.25rem)
- **H2:** 30px (1.875rem)
- **H3:** 24px (1.5rem)
- **Body:** 16px (1rem)
- **Small:** 14px (0.875rem)

### Espaçamento

Sistema baseado em múltiplos de 8px:

```css
--spacing-xs: 8px     /* Espaçamento mínimo */
--spacing-sm: 16px    /* Padrão pequeno */
--spacing-md: 24px    /* Padrão médio */
--spacing-lg: 32px    /* Padrão grande */
--spacing-xl: 48px    /* Extra large */
--spacing-xxl: 64px   /* Seções */
--spacing-xxxl: 96px  /* Hero sections */
```

## 🧩 Componentes Principais

### Cards de Certificação

Cards elevados com hover effect para exibir cada nível de certificação:

```html
<article class="card">
  <div class="card-header">
    <span class="badge badge-required">Obrigatória</span>
  </div>
  <h3 class="card-title">Certificação Bronze</h3>
  <p class="card-subtitle">Formação Inicial de Professores SESI</p>
  <div class="card-body">
    <!-- Conteúdo -->
  </div>
  <div class="card-footer">
    <a href="bronze.html" class="btn btn-primary">Acessar Certificação</a>
  </div>
</article>
```

### Badges

Indicadores visuais para status e categorias:

```html
<span class="badge badge-required">Obrigatória</span>
<span class="badge badge-optional">Opcional</span>
<span class="badge badge-completed">Concluída</span>
<span class="badge badge-bronze">Bronze</span>
```

### Botões

Hierarquia de botões para diferentes ações:

```html
<!-- Primário -->
<button class="btn btn-primary">Ação Principal</button>

<!-- Secundário -->
<button class="btn btn-secondary">Ação Alternativa</button>

<!-- CTA Laranja -->
<button class="btn btn-cta">Começar Agora</button>

<!-- Desabilitado -->
<button class="btn btn-disabled" disabled>Não Disponível</button>
```

### Tip Box (Dica do Especialista)

Callout destacado para dicas importantes:

```html
<aside class="tip-box">
  <div class="tip-box-header">
    <svg class="tip-box-icon"><!-- Ícone --></svg>
    <h4 class="tip-box-title">Dica do Especialista</h4>
  </div>
  <div class="tip-box-content">
    <p>Conteúdo da dica...</p>
  </div>
</aside>
```

### Callouts e Alerts

Mensagens contextuais:

```html
<div class="callout callout-info">
  <h4>O que NÃO é exigido no Bronze</h4>
  <p>Conteúdo informativo...</p>
</div>

<div class="callout callout-warning">
  <p>Atenção: conteúdo importante</p>
</div>
```

## ⚙️ Funcionalidades JavaScript

### Controle de Progressão

O sistema gerencia o acesso aos níveis através de `localStorage`:

```javascript
// Marcar Bronze como completado
BlueberryApp.markLevelAsCompleted('bronze');

// Verificar se pode acessar Prata
BlueberryApp.canAccessLevel('prata'); // retorna true/false

// Atualizar estado dos links
BlueberryApp.updateNavigationState();
```

### Alertas e Feedback

```javascript
// Exibir alerta
BlueberryApp.showAlert('Mensagem de sucesso', 'success', 5000);
BlueberryApp.showAlert('Aviso importante', 'warning');
BlueberryApp.showAlert('Erro encontrado', 'error');
```

### API Pública

Funções disponíveis globalmente via `window.BlueberryApp`:

- `hasCompletedLevel(level)` - Verifica se nível foi completado
- `markLevelAsCompleted(level)` - Marca nível como completado
- `canAccessLevel(level)` - Verifica se pode acessar nível
- `showAlert(message, type, duration)` - Exibe alerta temporário
- `updateNavigationState()` - Atualiza estado dos links de navegação

## 📱 Responsividade

### Breakpoints

```css
/* Mobile: < 768px */
/* Tablet: 768px - 1023px */
/* Desktop: 1024px - 1279px */
/* Desktop Large: ≥ 1280px */
```

### Adaptações Mobile

- Header compacto com navegação vertical
- Grid de certificações em coluna única
- Botões full-width
- Espaçamentos reduzidos
- Tipografia otimizada

## ♿ Acessibilidade

Conformidade com **WCAG 2.1 Level AA**:

### Implementações

- ✅ Contraste de cores ≥ 4.5:1
- ✅ Navegação por teclado (Tab, Enter, Espaço)
- ✅ Focus states visíveis (outline + box-shadow)
- ✅ Skip link para conteúdo principal
- ✅ Atributos ARIA (`aria-label`, `aria-current`, `aria-disabled`)
- ✅ Estrutura semântica HTML5
- ✅ Line-height 1.5 para legibilidade
- ✅ Textos alternativos para imagens

### Skip Link

Permite usuários de leitores de tela pular direto para o conteúdo:

```html
<a href="#main-content" class="skip-link">Pular para o conteúdo principal</a>
```

## 🚀 Como Usar

### Desenvolvimento Local

1. Clone ou baixe o projeto
2. Abra `index.html` em um navegador moderno
3. Não há dependências de build ou servidor

### Integração de Fontes

Adicione no `<head>` das páginas HTML:

```html
<!-- Google Fonts - Inter e Open Sans -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
```

### Estrutura HTML Base

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Trilha de Formação Blueberry</title>
  <link rel="stylesheet" href="css/style.css">
  <!-- Fontes -->
</head>
<body>
  <a href="#main-content" class="skip-link">Pular para o conteúdo principal</a>
  
  <header class="site-header">
    <!-- Navegação -->
  </header>

  <main id="main-content">
    <!-- Conteúdo -->
  </main>

  <footer class="site-footer">
    <!-- Rodapé -->
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

## 🔄 Estado Atual do Projeto

### ✅ Completado (Fase 1 - Sistema de Design)

- [x] Sistema de Design completo (CSS)
- [x] Design tokens e variáveis CSS
- [x] Componentes reutilizáveis (cards, botões, badges, tip-box)
- [x] Layout responsivo (grid, containers)
- [x] Header e navegação
- [x] Footer
- [x] Acessibilidade (focus states, skip links)
- [x] JavaScript base com controle de progressão
- [x] Sistema de alertas
- [x] Animações suaves
- [x] Documentação (README.md)

### ✅ Completado (Fase 2 - Landing Page)

- [x] Landing Page (index.html)
  - [x] Hero Section com gradiente azul
  - [x] Visão Geral da Trilha
  - [x] Cards das 3 certificações (Bronze, Prata, Ouro)
  - [x] Tip Box com dica do especialista
  - [x] Seção de Recursos e Suporte
  - [x] Footer completo com links
  - [x] Navegação funcional com estados disabled

### ✅ Completado (Fase 3 - Página Bronze)

- [x] Página Bronze (bronze.html)
  - [x] Cabeçalho com badges (Bronze, Obrigatória, Tempo)
  - [x] Finalidade e Público-alvo
  - [x] Competências Desenvolvidas (4 cards numerados)
  - [x] **Módulos de Treinamento em Vídeo (4 módulos com accordion)**
    - [x] Accordion expansível com animação suave
    - [x] Suporte para YouTube, Vimeo e vídeo local
    - [x] Player responsivo (16:9)
    - [x] Botão "Marcar como Assistido" por módulo
    - [x] Tracking de progresso com localStorage
    - [x] Barra de progresso visual (0-100%)
    - [x] Indicadores de status (não iniciado, assistido)
    - [x] Duração estimada por módulo
    - [x] Botões de download de material de apoio
  - [x] Seção "O que NÃO é exigido no Bronze"
  - [x] Suporte Técnico e Reporte de Erros
  - [x] Próximos Passos (progressão para Prata)
  - [x] Botão "Marcar como Concluída" funcional
  - [x] Integração com sistema de progressão JavaScript

### ✅ Completado (Fase 4 - Páginas Essenciais)

- [x] **Página Suporte Técnico (suporte.html)**
  - [x] Passo a passo para reportar erros
  - [x] Formulário mailto com template pré-preenchido
  - [x] Seção "Problemas Conhecidos" (accordion)
  - [x] FAQ completo (6 perguntas)
  - [x] E-mail de contato: soporte.brasil@oneclick.es
- [x] **Página Prata (prata.html)**
  - [x] Verificação de requisito (Bronze completado)
  - [x] Estrutura reservada "Conteúdo em desenvolvimento"
  - [x] Preview de temas e competências
  - [x] Sistema de desbloqueio funcional
- [x] **Página Ouro (ouro.html)**
  - [x] Verificação de requisito (Prata completado)
  - [x] Estrutura reservada "Conteúdo em desenvolvimento"
  - [x] Perfil do Professor Certificado Ouro
  - [x] Reconhecimento e benefícios
  - [x] Sistema de desbloqueio funcional

### ✅ Completado (Fase 5 - Logos e Downloads)

- [x] **Sistema de Logos Oficiais**
  - [x] Logo Blueberry Math integrado em todos os headers
  - [x] Logo SESI integrado em todos os headers
  - [x] Logo Oneclick integrado em todos os footers
  - [x] Imagens otimizadas e responsivas
- [x] **Estrutura de Downloads**
  - [x] Pasta `downloads/certificados/` para certificados PDF
  - [x] Pasta `downloads/documentos-oficiais/` para Matriz e Playbook
  - [x] Pasta `downloads/materiais-apoio/` para slides dos módulos
  - [x] READMEs com especificações completas
- [x] **Sistema de Certificados (Bronze)**
  - [x] Botão de download do certificado Bronze
  - [x] Aparece automaticamente após conclusão
  - [x] JavaScript integrado com progressão
  - [x] Link funcional para `downloads/certificados/certificado-bronze-modelo.pdf`
- [x] **Links de Download Atualizados**
  - [x] Footer com links para Playbook e Matriz
  - [x] Módulos Bronze com links para slides (modulo-1 a modulo-4)
  - [x] Todos os links prontos (aguardando apenas arquivos PDF)

### 🚧 Em Desenvolvimento (Fase 6 - Pendências)

- [ ] Guia do Responsável Pedagógico (responsavel-pedagogico.html)
- [ ] Adicionar PDFs reais na pasta downloads/
- [ ] Favicon personalizado
- [ ] Gravar vídeos dos módulos 2, 3 e 4

### 📅 Planejado (Futuro)

- [ ] Biblioteca de ícones SVG personalizados
- [ ] Geração dinâmica de certificados com nome do professor
- [ ] Integração com backend (autenticação, progresso persistente)
- [ ] Sistema de QR Code nos certificados
- [ ] Testes automatizados (acessibilidade, responsividade)
- [ ] Analytics de progresso dos professores
- [ ] Sistema de notificações por email

## 📝 Decisões Técnicas Documentadas

### 1. Separação Estrita Entre Níveis

**Decisão:** Páginas independentes para cada certificação sem links cruzados prematuros.

**Justificativa:** Matriz Oficial enfatiza "cada certificação habilita competências específicas, sem sobreposição de papéis ou exigências antecipadas".

**Implementação:** Links para Prata/Ouro desabilitados até conclusão do nível anterior via JavaScript.

### 2. Página Dedicada a Suporte Técnico

**Decisão:** `suporte.html` como página independente, acessível de qualquer nível.

**Justificativa:** Reunião 05/01/2026 (item 8) - proposta de Andressa Pimentel para incluir suporte técnico na formação Bronze.

### 3. Terminologia Institucional Rigorosa

**Decisão:** Usar exclusivamente "Ponto Focal da escola" e "Responsável Pedagógico".

**Justificativa:** Reunião 05/01/2026 (item 13 + item 22) - cultura SESI de padronização rigorosa e terminologia correta para os cargos.

### 4. HTML Estático (Sem Backend)

**Decisão:** Site estático sem integração com LMS/CMS.

**Justificativa:** Documentos não especificam backend; problemas técnicos na plataforma atual (Reunião item 4) sugerem começar simples.

**Limitação:** Não gerencia progresso do usuário entre sessões/dispositivos (apenas localStorage local).

### 5. Paleta de Cores Inferida

**Decisão:** Paleta baseada em azul (#0052CC) como cor primária.

**Justificativa:** Nome "Blueberry" + contexto institucional SESI + análise dos Playbooks.

**Nota:** Aguardando confirmação de manual de identidade visual oficial.

## 🔗 Recursos Externos

### CDN Recomendados

**Font Awesome (ícones):**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
```

**Google Fonts (tipografia):**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
```

## 👥 Papéis Institucionais

Conforme documentado na Matriz Oficial e Playbooks:

1. **Professor SESI** - Usuário principal das certificações
2. **Ponto Focal da escola** - Organização e acompanhamento pedagógico nas unidades
3. **Responsável Pedagógico** - Supervisão e suporte estratégico

## 🐛 Problemas Conhecidos

Baseado na Reunião 05/01/2026:

1. **Lentidão da plataforma** (não relacionado a este front-end)
2. **Ausência de versão mobile nativa** (workaround via browser implementado com responsividade)
3. **Sistema de correção de erros inadequado** (backend, não afeta este projeto)

## 📞 Suporte e Contato

**Desenvolvimento:** Oneclick (oneclick.es/pt/)

**Reportar Erros:** Acesse a página de [Suporte Técnico](suporte.html) para instruções de reporte à equipe One Click.

## 📄 Licença

Projeto desenvolvido para **SESI (Serviço Social da Indústria)** em parceria com **Blueberry Math**.

Todos os direitos reservados às instituições proprietárias.

---

## 🔄 Histórico de Versões

### v0.4.0 (2026-01-09) - Fase 4 Completa: Páginas Essenciais

- **Página Suporte Técnico (suporte.html)**
  - Sistema completo de reporte de erros via mailto
  - Accordion com problemas conhecidos
  - FAQ com 6 perguntas frequentes
  - E-mail atualizado: soporte.brasil@oneclick.es
- **Página Prata (prata.html)**
  - Verificação automática de Bronze completado
  - Preview de conteúdo intermediário
  - Sistema de desbloqueio funcional
- **Página Ouro (ouro.html)**
  - Verificação automática de Prata completado
  - Competências de liderança e multiplicação
  - Reconhecimento e benefícios
- E-mail de suporte atualizado em todas as páginas

### v0.3.1 (2026-01-08) - Sistema de Vídeos Implementado

- **Módulos de Treinamento em Vídeo (4 módulos)**
  - Accordion expansível com JavaScript
  - Suporte para YouTube, Vimeo e vídeo local
  - Player responsivo (aspect ratio 16:9)
  - Sistema de tracking de módulos assistidos (localStorage)
  - Barra de progresso visual (0% a 100%)
  - Indicadores de status por módulo
  - Botões de download de material complementar
- CSS completo para vídeo player e accordion
- GUIA_VIDEOS.md criado com instruções passo a passo

### v0.3.0 (2026-01-08) - Fase 3 Completa: Página Bronze

- Página Bronze totalmente funcional (bronze.html)
- 4 competências desenvolvidas com cards numerados
- Seção "O que NÃO é exigido" respeitando princípio de não antecipação
- Integração com suporte técnico
- Botão "Marcar como Concluída" com feedback visual
- Sistema de desbloqueio de Prata ao completar Bronze
- Removido label "Educação Básica 2024" do hero da landing page

### v0.2.0 (2026-01-08) - Fase 2 Completa: Landing Page

- Landing Page totalmente funcional (index.html)
- Hero section com CTA principal
- Cards interativos das 3 certificações
- Sistema de progressão visual (badges, locks)
- Seção de recursos e suporte
- Footer com múltiplas colunas de links
- Integração completa com JavaScript de progressão

### v0.1.0 (2026-01-08) - Fase 1 Completa: Sistema de Design

- Sistema de Design implementado (CSS completo)
- JavaScript base com controle de progressão
- Componentes reutilizáveis documentados
- README.md com especificação técnica completa

---

**Última atualização:** 2026-01-08  
**Status:** Fase 3 Completa | Fase 4 Pronta para Iniciar  
**Progresso Geral:** 60% completo
