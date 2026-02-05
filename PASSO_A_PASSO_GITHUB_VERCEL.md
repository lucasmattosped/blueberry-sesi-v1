# Passo a passo: GitHub + Vercel

## Seus dados

| Item | Valor |
|------|--------|
| **GitHub** | usuário: `lucasmattosped` |
| **Repositório** | `blueberry-sesi-v1` |
| **URL do repo** | https://github.com/lucasmattosped/blueberry-sesi-v1 |
| **Login** | HTTPS (use **Token**, não senha) |

---

## Parte 1: Enviar o projeto para o GitHub

### Opção A – Usar o script (PowerShell)

1. Abra **PowerShell** (ou Terminal no VS Code).
2. Execute:
   ```powershell
   cd "c:\Users\lucas\Downloads\code_sandbox_light_d5e38e7e_1770134618"
   .\ENVIAR_PARA_GITHUB.ps1
   ```
3. Quando pedir **Password**, cole seu **Personal Access Token** do GitHub (não a senha da conta).
4. Se der erro de política de execução:
   ```powershell
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
   ```
   Depois rode o script de novo.

### Opção B – Comandos manualmente

Abra o terminal na pasta do projeto e rode:

```powershell
cd "c:\Users\lucas\Downloads\code_sandbox_light_d5e38e7e_1770134618"

git init
git branch -M main
git remote add origin https://github.com/lucasmattosped/blueberry-sesi-v1.git
git add .
git commit -m "Backup restaurado 04/02/2026 - Versão pronta para Vercel"
git push -u origin main
```

Quando pedir **Password**, use o **Token** do GitHub.

### Como criar o Token do GitHub (se ainda não tiver)

1. GitHub → **Settings** (do seu usuário).
2. **Developer settings** → **Personal access tokens** → **Tokens (classic)**.
3. **Generate new token (classic)**.
4. Dê um nome (ex.: `blueberry-sesi`) e marque o escopo **repo**.
5. Gere e **copie o token** (só aparece uma vez).
6. Use esse token como “senha” quando o Git pedir **Password**.

---

## Parte 2: Deploy no Vercel

Depois do código no GitHub:

1. Acesse **https://vercel.com** e faça login.
2. Clique em **Add New** → **Project**.
3. Em **Import Git Repository**, escolha **GitHub** e autorize se pedir.
4. Selecione o repositório **lucasmattosped/blueberry-sesi-v1**.
5. **Project Name:** pode deixar `blueberry-sesi-v1` ou alterar.
6. **Root Directory:** deixe em branco (raiz).
7. Clique em **Deploy**.
8. Aguarde o build; ao terminar, o Vercel mostra a URL do site (ex.: `blueberry-sesi-v1.vercel.app`).

O `vercel.json` já está no projeto, então o Vercel usa a configuração correta.

---

## Resumo rápido

| Etapa | O que fazer |
|-------|-------------|
| 1 | Rodar `ENVIAR_PARA_GITHUB.ps1` (ou os comandos manuais) na pasta do projeto |
| 2 | Usar **Token** do GitHub quando pedir Password |
| 3 | No Vercel: Add New → Project → importar **lucasmattosped/blueberry-sesi-v1** → Deploy |

Se algo falhar (Git ou Vercel), diga em qual etapa e qual mensagem de erro apareceu.
