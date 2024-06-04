/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.jsx",
    "./src/*.js,",
    "./src/*.html",
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/**/*.html",
    "./src/**/**/*.html",
    "./src/**/**/*.jsx",
    "./src/**/**/*.js",
    "index.html",
  ],
  theme: {
    extend: {
      colors: {
        scissorsLight: "hsl(39, 89%, 49%)",
        scissorsDark: "hsl(40, 84%, 53%)",
        paperLight: "hsl(230, 89%, 62%)",
        paperDark: "hsl(230, 89%, 65%)",
        rockLight: "hsl(349, 71%, 52%)",
        rockDark: "hsl(349, 70%, 56%)",
        lizardLight: "hsl(261, 73%, 60%)",
        lizardDark: "hsl(261, 72%, 63%)",
        spockLight: "hsl(189, 59%, 53%)",
        spockDark: "hsl(189, 58%, 57%)",
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
        backRadMid: "hsl(214, 47%, 23%)",
        backRadOut: "hsl(214, 47%, 23%)",
        housePickBg: "rgba(23, 37, 84, 0.5)",
      },
    },
  },
  plugins: [],
};
