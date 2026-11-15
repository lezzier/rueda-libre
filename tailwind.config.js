/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./nocturna/**/*.html"],
  theme: {
    extend: {
      colors: {
        "verde-ruta": "#1E7A4F",
        "naranja-pedal": "#F39A2B",
        "azul-noche": "#14213D",
        crema: "#FAF6EF",
        "gris-asfalto": "#5B6470",
        "amarillo-farol": "#FFD166",
      },
      fontFamily: {
        montserrat: ["Montserrat", "Arial Black", "sans-serif"],
        "open-sans": ["Open Sans", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}
