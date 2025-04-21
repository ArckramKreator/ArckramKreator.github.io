const fs = require('fs');
const path = require('path');

const indexCssPath = path.join(__dirname, '..', 'packages', 'ui', 'src', 'index.css');
const stylesDir = path.join(__dirname, '..', 'packages', 'ui', 'src', 'styles');

//let output = `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n`;
let output = `\n`;

// List and import all .css files from /styles
if (fs.existsSync(stylesDir)) {
    const styleFiles = fs.readdirSync(stylesDir)
        .filter(file => file.endsWith('.css'));

    styleFiles.forEach(file => {
        const relativePath = `./styles/${file}`;
        output += `@import "${relativePath}";\n`;
    });
} else {
    console.warn(`Directory not found: ${stylesDir}`);
}

// Write to index.css
fs.writeFileSync(indexCssPath, output);
console.log(`index.css regenerated styles/*.css imports.`);
