const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs');
if (fs.existsSync(docsDir)) fs.rmSync(docsDir, { recursive: true });
fs.mkdirSync(docsDir);

function copyDir(src, dest) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const item of fs.readdirSync(src)) {
        const srcPath = path.join(src, item);
        const destPath = path.join(dest, item);
        const stat = fs.statSync(srcPath);
        if (stat.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

function buildApp(name, buildCmd, distDir, outputDir) {
    console.log(`Building ${name}...`);
    execSync(`cd apps/${name} && ${buildCmd}`, { stdio: 'inherit' });
    copyDir(path.join(__dirname, `apps/${name}/${distDir}`), path.join(docsDir, outputDir));
}

console.log('Copying landing page...');
copyDir(path.join(__dirname, 'public'), docsDir);

buildApp('react-section', 'npm run build', 'dist', 'react');
buildApp('vue-section', 'npm run build', 'dist', 'vue');
buildApp('astro-section', 'npm run build', 'dist', 'astro');
buildApp('next-section', 'npm run build', 'out', 'next');
buildApp('solid-section', 'npm run build', 'dist', 'solid');


console.log('All builds complete. Ready for GitHub Pages.');
