const fs = require("fs");
const path = require("path");

const scriptsDir = path.join(__dirname, "../packages/ui/src/scripts");
const outputFile = path.join(__dirname, "../packages/ui/src/index.js");



if (!fs.existsSync(scriptsDir)) {
    console.error(`Directory not found: ${scriptsDir}`);
    process.exit(1);
}

let combined = "";

fs.readdirSync(scriptsDir).forEach((file) => {
    if (file.endsWith(".js")) {
        const content = fs.readFileSync(path.join(scriptsDir, file), "utf-8");
        combined += `// --- ${file} ---\n${content}\n\n`;
    }
});

fs.writeFileSync(outputFile, combined.trim());
console.log("JS scripts combined into index.js");
