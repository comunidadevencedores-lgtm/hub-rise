/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial Auriz.on (branding_ecossistema_aurizon.pdf)
        ink: "#1A1A1A",
        navy: "#242424",
        navyLight: "#333333",
        brand: "#EE7224",      // laranja principal — CTAs, destaques
        brandDark: "#E84527",  // vermelho-laranja — hover, ênfase
        amber: "#F49F20",
        gold: "#F6E93D",
        offwhite: "#EFEFEF",
        sand: "#E0E0E0",
        grey: "#676767",
        greyLight: "#CDCCCC",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
