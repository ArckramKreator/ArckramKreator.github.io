const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs', 'next');

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

console.log('Building Next.js section...');
execSync('cd apps/next-section && npm run build', { stdio: 'inherit' });

copyDir(path.join(__dirname, 'apps/next-section/out'), docsDir);
console.log(' Next.js build complete.');
