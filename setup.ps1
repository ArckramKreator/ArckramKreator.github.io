# setup.ps1 - Initialize cloned monorepo
Write-Host "installing root dependencies..." -ForegroundColor Cyan
npm install

# Optional: Tailwind setup check
if (!(Test-Path "public/tailwind.css")) {
  Write-Host "`public/tailwind.css not found. Creating default one..." -ForegroundColor Yellow
  "@tailwind base;`n@tailwind components;`n@tailwind utilities;" | Out-File -Encoding UTF8 public/tailwind.css
}

# Install in each app
$apps = "react-section", "vue-section", "next-section", "solid-section", "astro-section"
foreach ($app in $apps) {
  Write-Host "`Installing $app dependencies..." -ForegroundColor Green
  Set-Location "apps\$app"
  npm install
  Set-Location ../..
}

# Build Tailwind
#Write-Host "`Building Tailwind CSS..." -ForegroundColor Cyan
#if (Test-Path ".\node_modules\.bin\tailwindcss.cmd") {
#  .\node_modules\.bin\tailwindcss.cmd -i ./public/tailwind.css -o ./public/style.css --minify
#} else {
#  Write-Host "Tailwind CLI not found. Installing..." -ForegroundColor Red
#  npm install -D tailwindcss postcss autoprefixer
#  .\node_modules\.bin\tailwindcss.cmd -i ./public/tailwind.css -o ./public/style.css --minify
#}

# Build all apps
Write-Host "` Building all apps with build-all.js..." -ForegroundColor Cyan
npm run build:all

# Serve the /docs folder
Write-Host "`Starting local server on http://localhost:3000..." -ForegroundColor Cyan
npx serve docs
