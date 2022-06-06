module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    colors: {
      //p- significa personalizado
      'p-blue': '#161622',
      'p-white': '#eff0f2',
      'p-gray': '#b8bdcc',
      'p-blue-2': '#c5f1fe',
      'p-purple': '#aba2f1',
      'p-orange': '#fbc390'
    },
    extend: {},
  },
  plugins: [],
};
