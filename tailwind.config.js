/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/**/*.{html,js}",
        "./apps/react-section/src/**/*.{js,jsx,ts,tsx}",
        "./apps/vue-section/src/**/*.{vue,js,ts}",
        "./apps/next-section/pages/**/*.{js,ts,jsx,tsx}",
        "./apps/next-section/components/**/*.{js,ts,jsx,tsx}",
        "./apps/astro-section/src/**/*.{astro,js,ts}",
        "./packages/ui/src/**/*.{js,ts,jsx,tsx,vue}",
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}

