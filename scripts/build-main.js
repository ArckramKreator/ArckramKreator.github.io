const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'public');
const destDir = path.join(__dirname, 'docs');

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

console.log(' Copying landing page from /public to /docs...');
copyDir(srcDir, destDir);
console.log(' Landing page build complete.');
