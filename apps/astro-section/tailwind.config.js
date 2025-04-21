/** @type {import('tailwindcss').Config} */
const sharedConfig = require("../../packages/ui/tailwind.config.js");

export default {
    content: [
        "./src/**/*.{astro,html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
