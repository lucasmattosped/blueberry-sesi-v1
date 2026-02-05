# 🚀 Guia de Deploy no Vercel - Blueberry Math + SESI

## 📋 Pré-requisitos

1. Conta no [Vercel](https://vercel.com)
2. Projeto conectado ao GitHub (recomendado) ou pode fazer upload direto

## 🔧 Método 1: Deploy via GitHub (Recomendado)

### Passo 1: Criar repositório no GitHub
```bash
cd c:\Users\lucas\Downloads\code_sandbox_light_d5e38e7e_1770134618
git init
git add .
git commit -m "Versão restaurada do backup de 04/02/2026"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/blueberry-sesi.git
git push -u origin main
```

### Passo 2: Conectar no Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Add New Project"
3. Importe o repositório do GitHub
4. O Vercel detectará automaticamente o `vercel.json`
5. Clique em "Deploy"

## 🔧 Método 2: Deploy via CLI do Vercel

### Passo 1: Instalar Vercel CLI
```bash
npm install -g vercel
```

### Passo 2: Fazer login
```bash
vercel login
```

### Passo 3: Deploy
```bash
cd c:\Users\lucas\Downloads\code_sandbox_light_d5e38e7e_1770134618
vercel
```

Siga as instruções:
- **Set up and deploy?** → `Y`
- **Which scope?** → Seu usuário/organização
- **Link to existing project?** → `N` (primeira vez)
- **Project name?** → `blueberry-sesi` (ou o nome que preferir)
- **Directory?** → `.` (ponto, diretório atual)
- **Override settings?** → `N`

### Passo 4: Deploy em produção
```bash
vercel --prod
```

## 📁 Estrutura do Projeto

```
blueberry-sesi/
├── index.html          # Página inicial
├── login.html          # Página de login
├── dashboard.html      # Dashboard do professor
├── admin-dashboard.html # Dashboard do admin
├── bronze.html         # Certificação Bronze
├── prata.html          # Certificação Prata
├── ouro.html           # Certificação Ouro
├── suporte.html        # Página de suporte
├── css/
│   └── style.css       # Estilos principais
├── js/
│   ├── blueberry-backend.js  # Backend Firebase
│   └── main.js         # JavaScript principal
├── images/
│   └── logos/          # Logos Blueberry, SESI, Oneclick
├── downloads/          # Materiais para download
└── vercel.json         # Configuração do Vercel
```

## ⚙️ Configuração do Vercel

O arquivo `vercel.json` já está configurado para:
- ✅ Servir arquivos estáticos HTML
- ✅ Configurar headers de segurança
- ✅ Roteamento correto

## 🔐 Variáveis de Ambiente (se necessário)

Se precisar adicionar variáveis de ambiente no futuro:
1. Acesse o projeto no Vercel
2. Vá em **Settings** → **Environment Variables**
3. Adicione as variáveis necessárias

## 🌐 Domínio Personalizado (Opcional)

1. No dashboard do Vercel, vá em **Settings** → **Domains**
2. Adicione seu domínio personalizado
3. Configure os registros DNS conforme instruções

## ✅ Verificações Pós-Deploy

Após o deploy, verifique:
- [ ] Página inicial carrega corretamente
- [ ] Login funciona
- [ ] Firebase está conectado
- [ ] Imagens e CSS carregam
- [ ] Navegação entre páginas funciona
- [ ] Dashboard admin funciona (se tiver acesso)

## 🐛 Troubleshooting

### Problema: Páginas retornam 404
**Solução:** Verifique se o `vercel.json` está correto e se os arquivos HTML estão na raiz

### Problema: CSS/JS não carregam
**Solução:** Verifique se os caminhos são relativos (sem `/` no início)

### Problema: Firebase não funciona
**Solução:** Verifique se as configurações do Firebase estão corretas no `blueberry-backend.js`

## 📞 Suporte

Em caso de problemas, verifique:
1. Logs do Vercel (Dashboard → Deployments → Logs)
2. Console do navegador (F12)
3. Configurações do Firebase

---

**Última atualização:** 05/02/2026
**Versão:** 1.0 (Backup restaurado de 04/02/2026)
