module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#121212",
        bgSurface1: "#1d1d1d",
        bgSurface2: "#21262e",
        bgSurface3: "#313133",
        textPurple: "#bb86fc",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
