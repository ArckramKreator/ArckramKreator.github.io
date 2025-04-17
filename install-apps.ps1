$apps = @(
  "react-section",
  "vue-section",
  "next-section",
  "solid-section",
  "astro-section"
)

foreach ($app in $apps) {
  Write-Host "`nInstalling in apps/$app..." -ForegroundColor Cyan
  Set-Location "apps/$app"
  npm install
  Set-Location ../..
}
