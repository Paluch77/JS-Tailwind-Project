/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      backgroundImage: {
        "main-background": "url('/data/background.jpg')",
        "gem-diamond": "url('/data/diamond.png')",
        earth: "url('/data/planet-earth.png')",
        laptop: "url('/data/laptop.png')",
        heart: "url('/data/heart.png')",
        phone: "url('/data/smartphone.png')",
      },
    },
  },
  plugins: [],
};
