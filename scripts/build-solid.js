const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs', 'solid');

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

console.log('Building SolidJS section...');
execSync('cd apps/solid-section && npm run build', { stdio: 'inherit' });

copyDir(path.join(__dirname, 'apps/solid-section/dist'), docsDir);
console.log(' SolidJS build complete.');
