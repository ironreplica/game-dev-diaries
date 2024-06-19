/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        autocomplete: "15rem",
      },
      fontFamily: {
        sans: ["var(--font-roboto)"],
      },
    }, // colors from https://www.canva.com/learn/website-color-schemes/
    colors: {
      void: {
        50: "#f6f4fb",
        100: "#ece9f5",
        200: "#d4cee9",
        300: "#aca2d7",
        400: "#7f70c0",
        500: "#5e4ea9",
        600: "#4d3c8d",
        700: "#403173",
        800: "#372c60",
        900: "#332951",
        950: "#0e0b16",
      },
      fuschia: {
        50: "#fbf5fe",
        100: "#f6eafd",
        200: "#edd4fa",
        300: "#e0b2f5",
        400: "#ce84ee",
        500: "#b754e1",
        600: "#a239ca",
        700: "#8428a3",
        800: "#6e2385",
        900: "#5d226d",
        950: "#3a0a48",
      },
      jewel: {
        50: "#f2f1ff",
        100: "#e7e6ff",
        200: "#d1d0ff",
        300: "#aea9ff",
        400: "#8779ff",
        500: "#6043ff",
        600: "#4d1dff",
        700: "#4717f6",
        800: "#3409ce",
        900: "#2c0aa8",
        950: "#160273",
      },
      stark: {
        50: "#f9f7f7",
        100: "#f3eeed",
        200: "#e7dfdd",
        300: "#d8ccc9",
        400: "#c1ada8",
        500: "#a9908a",
        600: "#917771",
        700: "#79625c",
        800: "#65534f",
        900: "#574945",
        950: "#2d2422",
      },

      lightest: "#b3b4bd",
      light: "#0a21c0",
      med: "#050a44",
      dark: "#2c2e3a",
      darkest: "#141619",
      grad1: "#2c3e50",
      grad2: "#000000",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
