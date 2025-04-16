/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1890FF",
        text: "#787878",
        textBlack: "#333333",
      },
    },
  },
  plugins: [],
  prefix: "tw-",
};
