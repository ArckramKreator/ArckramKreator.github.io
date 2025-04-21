const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "../public/icons");
const outputFile = path.join(__dirname, "../public/data/icons.json");

const icons = fs
    .readdirSync(iconsDir)
    .filter(file => file.endsWith(".svg"));

fs.writeFileSync(outputFile, JSON.stringify(icons, null, 2));

console.log("icons.json generated");
