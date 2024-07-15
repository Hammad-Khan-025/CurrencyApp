/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custombg': "url('../public/images/bgimage.jfif')",
      },
    },
  },
  plugins: [],
}

