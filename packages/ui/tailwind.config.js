/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        '../../apps/**/*.{js,ts,jsx,tsx,vue,astro}', // Allow shared scanning
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

