module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Fira Code", "monospace"],
    },
    colors: {
      //p- significa personalizado
      "p-background": "#131313",
      "p-gray": "#212121",
      "p-white": "#eff0f2",
      "p-purple": "#BC8CF2",
    },
    extend: {
      gridTemplateColumns: {
        '4': 'repeat(auto-fill, minmax(203px, 1fr))'
      }
    },
  },
  plugins: [],
};
