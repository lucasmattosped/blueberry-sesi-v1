# Assets de Imagens - Blueberry Math + SESI

## Logos Necessários

### 1. Logo Blueberry Math
- **Arquivo:** `logo-blueberry.svg` (ou .png)
- **Dimensões recomendadas:** 200x50px (proporção 4:1)
- **Formato:** SVG preferencial, PNG transparente como alternativa
- **Uso:** Header de todas as páginas

### 2. Logo SESI
- **Arquivo:** `logo-sesi.svg` (ou .png)
- **Dimensões recomendadas:** 180x50px
- **Formato:** SVG preferencial, PNG transparente como alternativa
- **Uso:** Header de todas as páginas (ao lado do logo Blueberry)

### 3. Logo Oneclick
- **Arquivo:** `logo-oneclick.svg` (ou .png)
- **Dimensões recomendadas:** 120x40px
- **Formato:** SVG preferencial, PNG transparente como alternativa
- **Uso:** Footer (créditos)

### 4. Favicon
- **Arquivo:** `favicon.png` ou `favicon.ico`
- **Dimensões:** 32x32px ou 16x16px
- **Uso:** Aba do navegador

## Ícones

O projeto utiliza **Font Awesome 6.4.0** via CDN para todos os ícones de interface.

**Ícones principais usados:**
- `fa-play-circle` - CTA iniciar certificação
- `fa-clock` - Tempo de duração
- `fa-user-graduate` - Nível de certificação
- `fa-lock` - Conteúdo bloqueado
- `fa-lightbulb` - Dica do especialista
- `fa-headset` - Suporte técnico
- `fa-book-open` - Guia pedagógico
- `fa-arrow-right` - Navegação/próximo passo

## Ilustrações (Opcional)

Se desejar adicionar ilustrações customizadas:

### Hero Section
- **Arquivo:** `hero-illustration.svg`
- **Tema:** Educação, tecnologia, professores, matemática
- **Estilo:** Flat design, cores Blueberry (azul #0052CC)

### Cards de Certificação
- `icon-bronze.svg` - Medalha bronze
- `icon-prata.svg` - Medalha prata
- `icon-ouro.svg` - Medalha ouro

## Como Substituir Placeholders

### No HTML (index.html e outras páginas):

**Atual (placeholder):**
```html
<div class="logo-blueberry" style="background: var(--primary-blue); color: white; padding: 8px 16px; border-radius: 4px; font-weight: bold; font-size: 14px;">
  Blueberry Math
</div>
```

**Substituir por:**
```html
<img src="images/logo-blueberry.svg" alt="Blueberry Math" class="logo-blueberry">
```

**Remover o estilo inline** do CSS após adicionar as imagens reais.

## Banco de Imagens Sugerido

Se não houver assets customizados, considerar:

- **Unsplash** (unsplash.com) - Fotos gratuitas de alta qualidade
- **Freepik** (freepik.com) - Ilustrações e ícones
- **unDraw** (undraw.co) - Ilustrações SVG editáveis com cores customizáveis

**Termos de busca sugeridos:**
- "education technology"
- "teacher classroom"
- "mathematics learning"
- "online education"
- "certification badge"

## Status Atual

- [ ] Logo Blueberry Math
- [ ] Logo SESI
- [ ] Logo Oneclick
- [ ] Favicon
- [x] Ícones (Font Awesome via CDN)
- [ ] Ilustrações customizadas (opcional)

---

**Nota:** Os placeholders atuais são divs estilizadas que funcionam perfeitamente até que as imagens reais estejam disponíveis. A substituição é simples e não afeta a funcionalidade.
