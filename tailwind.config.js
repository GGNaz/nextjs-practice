/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandyellow: "#FFDE57",
        brandgray: "#A6C6DB",
        brandviolet: "#A69DE0",
        darkviolet: "#675FA7",
        customblack: "#18181A",
      },
    },
  },
  plugins: [],
};
