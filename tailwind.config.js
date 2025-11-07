/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        naranja: 'var(--naranja)',
        gris: 'var(--gris)',
        grisclaro: 'var(--gris-claro)',
      },
    },
  },
  plugins: [],
}

