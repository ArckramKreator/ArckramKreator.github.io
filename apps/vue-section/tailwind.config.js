/** @type {import('tailwindcss').Config} */
const sharedConfig = require("../../packages/ui/tailwind.config.js");
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts}"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
