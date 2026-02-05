# 📹 Guia Completo: Como Adicionar Vídeos de Treinamento

## 🎯 Visão Geral

A página Bronze agora possui **4 módulos de vídeo** com accordion expansível. Você pode adicionar vídeos de 3 formas diferentes.

---

## 🚀 Opção 1: YouTube (Recomendado)

### Por que usar YouTube?
- ✅ Gratuito
- ✅ Player otimizado e responsivo
- ✅ Funciona em todos os dispositivos
- ✅ Controles de velocidade, qualidade, legendas
- ✅ Não usa espaço do seu servidor

### Passo a Passo:

#### 1. Grave e faça upload do vídeo no YouTube

1. Acesse [YouTube Studio](https://studio.youtube.com)
2. Clique em **Criar** → **Enviar vídeos**
3. Selecione seu vídeo de treinamento
4. Preencha os detalhes:
   - **Título:** "Módulo 1 - Introdução ao Blueberry Math"
   - **Descrição:** Adicione informações sobre o conteúdo
   - **Visibilidade:** 
     - **Não listado** (recomendado) - Apenas quem tiver o link pode ver
     - **Público** - Se quiser que qualquer pessoa encontre
     - **Privado** - Apenas você vê (não funciona para embed)

#### 2. Copie o código de incorporação

1. Vá para o vídeo no YouTube
2. Clique em **Compartilhar**
3. Clique em **Incorporar**
4. Copie o código `<iframe>` gerado

**Exemplo:**
```html
<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        title="Módulo 1" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
</iframe>
```

#### 3. Adicione no HTML

Abra `bronze.html` e localize o Módulo 1 (linha ~290):

**ANTES (com placeholder):**
```html
<div class="video-container">
  <!-- PLACEHOLDER (Remover quando adicionar vídeo real) -->
  <div class="video-placeholder">
    <i class="fas fa-video video-placeholder-icon"></i>
    <p class="video-placeholder-text">
      <strong>Vídeo em Breve</strong><br>
      Grave seu treinamento e adicione o link aqui
    </p>
  </div>
</div>
```

**DEPOIS (com YouTube):**
```html
<div class="video-container">
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="Módulo 1: Introdução ao Blueberry Math" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
  </iframe>
</div>
```

**⚠️ IMPORTANTE:** 
- Use apenas o URL do formato `/embed/VIDEO_ID`
- Remova os atributos `width` e `height` (o CSS cuida disso)
- Substitua `VIDEO_ID` pelo ID real do seu vídeo

#### 4. Repita para os outros módulos

Faça o mesmo para os Módulos 2, 3 e 4, substituindo os placeholders pelos seus vídeos.

---

## 🎬 Opção 2: Vimeo

### Por que usar Vimeo?
- ✅ Melhor qualidade de vídeo
- ✅ Sem anúncios
- ✅ Controle de privacidade avançado
- ✅ Player mais elegante
- ❌ Plano gratuito limitado (500MB/semana)

### Passo a Passo:

#### 1. Faça upload no Vimeo

1. Acesse [Vimeo](https://vimeo.com)
2. Clique em **Novo vídeo** → **Upload**
3. Configure a privacidade:
   - **Privado** (pago)
   - **Oculto** (gratuito) - Não aparece em buscas, mas quem tem o link acessa
   - **Qualquer pessoa** (gratuito)

#### 2. Copie o código de incorporação

1. Vá para o vídeo no Vimeo
2. Clique no ícone **</>** (Incorporar)
3. Copie o código `<iframe>`

#### 3. Adicione no HTML

```html
<div class="video-container">
  <iframe src="https://player.vimeo.com/video/123456789?title=0&byline=0&portrait=0" 
          title="Módulo 1: Introdução ao Blueberry Math"
          allow="autoplay; fullscreen; picture-in-picture" 
          allowfullscreen>
  </iframe>
</div>
```

---

## 💾 Opção 3: Upload Direto (Vídeo Local)

### Quando usar?
- Quer controle total
- Não quer depender de terceiros
- Tem servidor com boa banda

### ⚠️ Requisitos:
- Servidor web com espaço suficiente
- Banda larga para streaming
- Vídeos otimizados (formato MP4, codec H.264)

### Passo a Passo:

#### 1. Otimize seus vídeos

Use **HandBrake** (gratuito) para comprimir:
- **Formato:** MP4
- **Codec:** H.264
- **Resolução:** 1080p (Full HD) ou 720p (HD)
- **Taxa de bits:** 2-5 Mbps

#### 2. Crie pasta de vídeos

```
/
├── videos/
│   ├── modulo-1-introducao.mp4
│   ├── modulo-2-navegacao.mp4
│   ├── modulo-3-pratica.mp4
│   └── modulo-4-suporte.mp4
```

#### 3. Adicione no HTML

```html
<div class="video-container">
  <video controls playsinline webkit-playsinline>
    <source src="videos/modulo-1-introducao.mp4" type="video/mp4">
    Seu navegador não suporta o elemento de vídeo.
  </video>
</div>
```

---

## 📊 Estrutura dos 4 Módulos

### Módulo 1: Introdução ao Blueberry Math no Contexto SESI
- **Duração sugerida:** 25 minutos
- **Conteúdo:** Visão geral, missão, integração com SESI
- **Linha no código:** ~290

### Módulo 2: Navegação e Interface da Plataforma
- **Duração sugerida:** 30 minutos
- **Conteúdo:** Tour guiado, menus, recursos principais
- **Linha no código:** ~352

### Módulo 3: Aplicação Prática - Primeiras Atividades em Sala
- **Duração sugerida:** 35 minutos
- **Conteúdo:** Demonstrações práticas, exemplos reais
- **Linha no código:** ~414

### Módulo 4: Suporte Técnico e Resolução de Problemas
- **Duração sugerida:** 20 minutos
- **Conteúdo:** Troubleshooting, como reportar erros
- **Linha no código:** ~476

---

## 🎥 Dicas de Gravação

### Ferramentas Gratuitas Recomendadas:

**Para Windows:**
- **OBS Studio** (gratuito, profissional)
- **Loom** (até 5min grátis, fácil de usar)
- **Xbox Game Bar** (nativo do Windows 10/11)

**Para Mac:**
- **QuickTime Player** (nativo, simples)
- **OBS Studio** (gratuito, profissional)
- **Loom** (até 5min grátis)

**Online:**
- **Loom** (https://loom.com) - Grava + faz upload automaticamente
- **Screen-O-Matic** (https://screencast-o-matic.com)

### Checklist de Gravação:

- [ ] Ambiente silencioso
- [ ] Microfone de qualidade
- [ ] Resolução 1080p
- [ ] Cursor do mouse visível
- [ ] Câmera frontal (opcional, mas engaja mais)
- [ ] Roteiro preparado
- [ ] Demonstrações práticas na plataforma
- [ ] Exemplos reais de uso em sala

### Estrutura Sugerida para Cada Vídeo:

1. **Introdução** (10% do tempo)
   - Apresentação pessoal
   - O que será abordado
   - Por que é importante

2. **Conteúdo Principal** (70% do tempo)
   - Demonstrações práticas
   - Passo a passo
   - Dicas e truques

3. **Encerramento** (20% do tempo)
   - Resumo dos pontos principais
   - Próximos passos
   - Chamada para ação

---

## ✅ Como Testar

Depois de adicionar os vídeos:

1. Abra `bronze.html` no navegador
2. Role até "Módulos de Treinamento em Vídeo"
3. Clique em cada módulo para expandir
4. Teste se o vídeo carrega e reproduz
5. Clique em "Marcar como Assistido"
6. Observe a barra de progresso atualizar

---

## 🔧 Troubleshooting

### Vídeo não carrega (YouTube/Vimeo)

**Problema:** Iframe em branco
**Solução:**
- Verifique se o vídeo está como "Não listado" ou "Público"
- Vídeos "Privados" não funcionam em embed
- Confirme que copiou o URL correto (`/embed/VIDEO_ID`)

### Vídeo local não reproduz

**Problema:** Player aparece mas não inicia
**Solução:**
- Verifique o caminho do arquivo (`videos/nome.mp4`)
- Confirme que o formato é MP4 com codec H.264
- Teste o vídeo diretamente abrindo o arquivo no navegador

### Vídeo não é responsivo

**Problema:** Vídeo fica desproporcional
**Solução:**
- Remova atributos `width` e `height` do iframe
- O CSS `.video-container` cuida do aspecto ratio 16:9
- Se precisar outro ratio, altere `padding-bottom` em `css/style.css`

---

## 📱 Material de Apoio (Download)

Os botões "Baixar Material de Apoio" estão prontos. Para ativá-los:

1. Crie uma pasta `downloads/` no projeto
2. Adicione PDFs, slides, etc.
3. Atualize os links:

```html
<a href="downloads/modulo-1-slides.pdf" class="btn btn-secondary" download>
  <i class="fas fa-download"></i> Baixar Material de Apoio
</a>
```

---

## 🎯 Resultado Esperado

Após adicionar os vídeos, os professores poderão:

✅ Assistir aos treinamentos diretamente na página
✅ Expandir/colapsar módulos conforme necessidade
✅ Marcar módulos como assistidos
✅ Acompanhar progresso visualmente (barra de progresso)
✅ Baixar materiais complementares
✅ Navegar entre módulos facilmente

---

## 💡 Dica Final

**Comece simples:**
1. Grave o Módulo 1
2. Faça upload no YouTube como "Não listado"
3. Adicione na página Bronze
4. Teste com alguns professores
5. Colete feedback
6. Grave os próximos módulos

Não precisa gravar tudo de uma vez! Vá adicionando conforme produz o conteúdo.

---

**Precisa de ajuda?** Entre em contato com o suporte técnico.
