# Implementação de Logos e Sistema de Certificados

**Data**: 09 de Janeiro de 2026  
**Status**: Completo ✅

## Resumo

Implementação completa do sistema de logos oficiais e estrutura de downloads/certificados para a Trilha de Formação Blueberry Math + SESI.

---

## 1. Logos Oficiais Integrados

### Logos Adicionados

1. **Logo Blueberry Math**
   - Arquivo: `images/logos/logo-blueberry.png`
   - Tamanho: 3.3 KB
   - Localização: Header de todas as páginas
   - Altura: 40px (responsivo)

2. **Logo SESI**
   - Arquivo: `images/logos/logo-sesi.png`
   - Tamanho: 9.6 KB
   - Localização: Header de todas as páginas
   - Altura: 36px (responsivo)

3. **Logo Oneclick**
   - Arquivo: `images/logos/logo-oneclick.png`
   - Tamanho: 33.6 KB
   - Localização: Footer de todas as páginas (créditos)
   - Altura: 20px

### Páginas Atualizadas

- ✅ index.html
- ✅ bronze.html
- ✅ prata.html
- ✅ ouro.html
- ✅ suporte.html

### Código HTML Implementado

```html
<!-- Header -->
<div class="header-logos">
  <img src="images/logos/logo-blueberry.png" alt="Blueberry Math" class="logo-img logo-blueberry">
  <span class="logo-separator">+</span>
  <img src="images/logos/logo-sesi.png" alt="SESI - Serviço Social da Indústria" class="logo-img logo-sesi">
</div>

<!-- Footer -->
<a href="https://oneclick.es/pt/" target="_blank" rel="noopener noreferrer">
  <img src="images/logos/logo-oneclick.png" alt="Oneclick" style="height: 20px;">
</a>
```

### CSS Adicionado

```css
.logo-img {
  display: inline-block;
  height: auto;
  max-width: 100%;
  object-fit: contain;
}

.logo-blueberry {
  height: 40px;
  width: auto;
}

.logo-sesi {
  height: 36px;
  width: auto;
}
```

---

## 2. Sistema de Certificados

### Estrutura de Pastas Criada

```
downloads/
├── certificados/
│   ├── README.md ✅
│   ├── certificado-bronze-modelo.pdf (aguardando)
│   ├── certificado-prata-modelo.pdf (aguardando)
│   └── certificado-ouro-modelo.pdf (aguardando)
├── documentos-oficiais/
│   ├── README.md ✅
│   ├── matriz-formacao-blueberry.pdf (aguardando)
│   └── playbook-ponto-focal.pdf (aguardando)
├── materiais-apoio/
│   ├── README.md ✅
│   ├── modulo-1-slides.pdf (aguardando)
│   ├── modulo-2-slides.pdf (aguardando)
│   ├── modulo-3-slides.pdf (aguardando)
│   └── modulo-4-slides.pdf (aguardando)
└── README.md ✅
```

### Botão de Download do Certificado Bronze

**Localização**: bronze.html (seção "Próximos Passos")

**Comportamento**:
- Oculto inicialmente (`display: none`)
- Aparece automaticamente após marcar Bronze como concluída
- Animação de fade-in suave
- Link direto para download do PDF

**Código HTML**:
```html
<a href="downloads/certificados/certificado-bronze-modelo.pdf" 
   id="btn-download-certificate" 
   class="btn btn-primary btn-large" 
   download="Certificado-Bronze-Blueberry.pdf"
   style="display: none;">
  <i class="fas fa-certificate"></i>
  Baixar Certificado Bronze
</a>
```

### JavaScript - Função `setupBronzeCertificate()`

**Arquivo**: `js/main.js`

**Funcionalidades**:
1. Verifica se Bronze já foi completado ao carregar a página
2. Atualiza estado do botão "Marcar como Concluída"
3. Mostra/oculta botão de download do certificado
4. Evento de click para marcar como concluída:
   - Salva no localStorage
   - Desabilita botão de conclusão
   - Mostra botão de download com animação
   - Exibe alerta de sucesso
   - Rola página até o botão de download
   - Atualiza navegação (desbloqueia Prata)

**Código**:
```javascript
function setupBronzeCertificate() {
  const btnCompleteBronze = document.getElementById('btn-complete-bronze');
  const btnDownloadCertificate = document.getElementById('btn-download-certificate');

  if (!btnCompleteBronze) return;

  // Se Bronze já foi completado
  if (hasCompletedLevel(CERTIFICATION_LEVELS.BRONZE)) {
    btnCompleteBronze.innerHTML = '<i class="fas fa-check-circle"></i> Bronze Concluída';
    btnCompleteBronze.classList.add('btn-disabled');
    btnCompleteBronze.disabled = true;

    if (btnDownloadCertificate) {
      btnDownloadCertificate.style.display = 'block';
    }
  }

  // Evento de click
  btnCompleteBronze.addEventListener('click', function() {
    // [... lógica completa no arquivo]
  });
}
```

---

## 3. Links de Download Atualizados

### Módulos de Vídeo (bronze.html)

Cada módulo agora tem um botão de download para slides:

```html
<!-- Módulo 1 -->
<a href="downloads/materiais-apoio/modulo-1-slides.pdf" 
   class="btn btn-secondary" 
   download="Modulo-1-Blueberry-Slides.pdf">
  <i class="fas fa-download"></i> Baixar Slides do Módulo
</a>

<!-- Módulo 2 -->
<a href="downloads/materiais-apoio/modulo-2-slides.pdf" 
   class="btn btn-secondary" 
   download="Modulo-2-Blueberry-Slides.pdf">
  <i class="fas fa-download"></i> Baixar Slides do Módulo
</a>

<!-- Módulo 3 -->
<a href="downloads/materiais-apoio/modulo-3-slides.pdf" 
   class="btn btn-secondary" 
   download="Modulo-3-Blueberry-Slides.pdf">
  <i class="fas fa-download"></i> Baixar Slides do Módulo
</a>

<!-- Módulo 4 -->
<a href="downloads/materiais-apoio/modulo-4-slides.pdf" 
   class="btn btn-secondary" 
   download="Modulo-4-Blueberry-Slides.pdf">
  <i class="fas fa-download"></i> Baixar Slides do Módulo
</a>
```

### Footer (todas as páginas)

Links atualizados na seção "Recursos":

```html
<h3 class="footer-section-title">Recursos</h3>
<ul class="footer-links">
  <li>
    <a href="responsavel-pedagogico.html" class="footer-link">
      Guia do Responsável Pedagógico
    </a>
  </li>
  <li>
    <a href="downloads/documentos-oficiais/playbook-ponto-focal.pdf" 
       class="footer-link" 
       download>
      Playbook do Ponto Focal (PDF)
    </a>
  </li>
  <li>
    <a href="downloads/documentos-oficiais/matriz-formacao-blueberry.pdf" 
       class="footer-link" 
       download>
      Matriz de Formação (PDF)
    </a>
  </li>
  <li>
    <a href="suporte.html#faq" class="footer-link">
      FAQ
    </a>
  </li>
</ul>
```

---

## 4. Documentação Criada

### READMEs Detalhados

1. **downloads/README.md**
   - Estrutura geral da pasta
   - Descrição de cada subpasta
   - Instruções para adicionar arquivos
   - Links HTML correspondentes
   - Status atual de cada arquivo

2. **downloads/certificados/README.md**
   - Especificações do certificado Bronze
   - Layout sugerido
   - Informações que devem constar
   - Design guidelines (cores, tipografia)
   - Como usar no site
   - Próximos passos

3. **downloads/documentos-oficiais/README.md**
   - Lista de documentos oficiais
   - Status de cada arquivo
   - Instruções para conversão/upload

4. **downloads/materiais-apoio/README.md**
   - Descrição dos 4 módulos
   - Duração e conteúdo sugerido
   - Especificações de formato (PowerPoint → PDF)
   - Design guidelines
   - Como usar no site

---

## 5. Fluxo do Usuário (Certificado Bronze)

### Cenário: Professor conclui a Certificação Bronze

1. **Acessa bronze.html**
   - Assiste aos vídeos dos módulos
   - Baixa os slides de apoio (quando disponíveis)
   - Marca cada módulo como "Assistido"

2. **Conclui todos os requisitos**
   - Clica em "Marcar Bronze como Concluída"
   - Sistema salva progresso no localStorage

3. **Recebe feedback visual**
   - Alerta de sucesso aparece no topo direito
   - Botão "Marcar como Concluída" fica desabilitado
   - Botão "Baixar Certificado Bronze" aparece com animação

4. **Baixa o certificado**
   - Clica no botão verde "Baixar Certificado Bronze"
   - PDF é baixado como `Certificado-Bronze-Blueberry.pdf`

5. **Progride para Prata**
   - Links para Prata são automaticamente desbloqueados
   - Pode acessar prata.html
   - Ouro permanece bloqueado até completar Prata

---

## 6. Arquivos Pendentes (Aguardando Upload)

### Certificados
- [ ] `certificado-bronze-modelo.pdf` (especificações em downloads/certificados/README.md)
- [ ] `certificado-prata-modelo.pdf` (aguardando conteúdo definitivo)
- [ ] `certificado-ouro-modelo.pdf` (aguardando conteúdo definitivo)

### Documentos Oficiais
- [ ] `matriz-formacao-blueberry.pdf` (converter .docx → PDF)
- [ ] `playbook-ponto-focal.pdf` (arquivo já existe, fazer upload)

### Materiais de Apoio
- [ ] `modulo-1-slides.pdf` (criar após gravação do vídeo)
- [ ] `modulo-2-slides.pdf` (criar após gravação do vídeo)
- [ ] `modulo-3-slides.pdf` (criar após gravação do vídeo)
- [ ] `modulo-4-slides.pdf` (criar após gravação do vídeo)

**Nota**: Todos os links já estão configurados no HTML. Basta adicionar os arquivos PDF nas pastas correspondentes para que os downloads funcionem automaticamente.

---

## 7. Testes Necessários

### Teste 1: Visualização de Logos
- [ ] Abrir todas as páginas
- [ ] Verificar se logos aparecem corretamente
- [ ] Testar em diferentes tamanhos de tela
- [ ] Verificar responsividade mobile

### Teste 2: Fluxo de Certificação Bronze
- [ ] Abrir bronze.html
- [ ] Clicar em "Marcar Bronze como Concluída"
- [ ] Verificar se alerta de sucesso aparece
- [ ] Confirmar que botão de certificado aparece
- [ ] Verificar se Prata é desbloqueada
- [ ] Recarregar página e confirmar que estado persiste

### Teste 3: Downloads (quando PDFs estiverem disponíveis)
- [ ] Testar download de certificado Bronze
- [ ] Testar downloads de slides dos módulos
- [ ] Testar downloads de documentos oficiais no footer
- [ ] Verificar nomes dos arquivos baixados

### Teste 4: Navegação
- [ ] Verificar links do footer em todas as páginas
- [ ] Confirmar que links de Prata/Ouro desbloqueiam corretamente
- [ ] Testar navegação móvel (menu responsivo)

---

## 8. Próximos Passos

### Imediato
1. Adicionar arquivos PDF reais na pasta `downloads/`
2. Testar downloads funcionais
3. Validar fluxo completo de certificação

### Curto Prazo
4. Gravar vídeos dos módulos 2, 3 e 4
5. Criar slides de apoio para cada módulo
6. Implementar Guia do Responsável Pedagógico

### Médio Prazo
7. Desenvolver conteúdo completo de Prata e Ouro
8. Criar certificados Prata e Ouro
9. Integrar com backend para persistência de dados

### Longo Prazo
10. Sistema de geração dinâmica de certificados (nome personalizado)
11. QR Code nos certificados para verificação
12. Analytics de progresso dos professores
13. Notificações por email ao completar certificações

---

## 9. Contato e Suporte

- **Email**: soporte.brasil@oneclick.es
- **Website Oneclick**: https://oneclick.es/pt/

---

## 10. Créditos

- **Desenvolvido por**: Oneclick
- **Parceria**: SESI + Blueberry Math
- **Data de Implementação**: Janeiro 2026

---

**Status Final**: ✅ Sistema de logos e certificados implementado com sucesso. Aguardando apenas arquivos PDF para ativação completa dos downloads.
