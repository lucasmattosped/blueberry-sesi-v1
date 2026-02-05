# ============================================================
# Script: Enviar projeto Blueberry SESI para o GitHub
# Repositório: https://github.com/lucasmattosped/blueberry-sesi-v1
# ============================================================

$ErrorActionPreference = "Stop"
$repoPath = "c:\Users\lucas\Downloads\code_sandbox_light_d5e38e7e_1770134618"
$remoteUrl = "https://github.com/lucasmattosped/blueberry-sesi-v1.git"

# Encontrar Git (PATH ou locais comuns no Windows)
$gitCmd = $null
try {
    $gitCmd = (Get-Command git -ErrorAction Stop).Source
} catch {}
if (-not $gitCmd) {
    $paths = @(
        "C:\Program Files\Git\bin\git.exe",
        "C:\Program Files (x86)\Git\bin\git.exe",
        "$env:LOCALAPPDATA\Programs\Git\bin\git.exe",
        "$env:ProgramFiles\Git\bin\git.exe"
    )
    foreach ($p in $paths) {
        if ($p -and (Test-Path $p)) { $gitCmd = $p; break }
    }
}
if (-not $gitCmd) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "  Git nao encontrado." -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Instale o Git para Windows e tente novamente:" -ForegroundColor Yellow
    Write-Host "  1. Baixe em: https://git-scm.com/download/win" -ForegroundColor White
    Write-Host "  2. Instale (marque opcao 'Add Git to PATH')" -ForegroundColor White
    Write-Host "  3. Feche e abra o PowerShell de novo" -ForegroundColor White
    Write-Host "  4. Rode este script novamente: .\ENVIAR_PARA_GITHUB.ps1" -ForegroundColor White
    Write-Host ""
    exit 1
}
Write-Host "Git encontrado: $gitCmd" -ForegroundColor Gray
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Enviando para GitHub: blueberry-sesi-v1" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Set-Location $repoPath

# Inicializar Git se não existir
if (-not (Test-Path ".git")) {
    Write-Host "[1/5] Inicializando Git..." -ForegroundColor Yellow
    & $gitCmd init
    & $gitCmd branch -M main
} else {
    Write-Host "[1/5] Git ja inicializado." -ForegroundColor Green
}

# Configurar remote (sobrescreve se já existir)
Write-Host "[2/5] Configurando repositorio remoto..." -ForegroundColor Yellow
& $gitCmd remote remove origin 2>$null
& $gitCmd remote add origin $remoteUrl
Write-Host "      Origin: $remoteUrl" -ForegroundColor Gray

# Adicionar todos os arquivos
Write-Host "[3/5] Adicionando arquivos..." -ForegroundColor Yellow
& $gitCmd add .
& $gitCmd status --short

# Commit
Write-Host "[4/5] Criando commit..." -ForegroundColor Yellow
& $gitCmd commit -m "Backup restaurado 04/02/2026 - Versao pronta para Vercel" 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "      (Nenhuma alteracao nova para commitar, ou primeiro commit)" -ForegroundColor Gray
    & $gitCmd commit -m "Backup restaurado 04/02/2026 - Versao pronta para Vercel" --allow-empty
}

# Push
Write-Host "[5/5] Enviando para o GitHub (main)..." -ForegroundColor Yellow
Write-Host ""
Write-Host ">>> Quando pedir 'Password', use seu TOKEN do GitHub (nao a senha da conta)." -ForegroundColor Magenta
Write-Host "    Token: GitHub.com -> Settings -> Developer settings -> Personal access tokens" -ForegroundColor Magenta
Write-Host ""
& $gitCmd push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  Envio concluido com sucesso!" -ForegroundColor Green
    Write-Host "  Repositorio: https://github.com/lucasmattosped/blueberry-sesi-v1" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "Falha no push. Verifique:" -ForegroundColor Red
    Write-Host "  1. Git instalado (e no PATH ou em Program Files\Git)" -ForegroundColor Red
    Write-Host "  2. Usar Token (nao senha) quando pedir Password" -ForegroundColor Red
    Write-Host "  3. Repositorio existe em github.com/lucasmattosped/blueberry-sesi-v1" -ForegroundColor Red
}
