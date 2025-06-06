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
      fontFamily: {
        anton: ["Anton"],
        jost: ["Jost"],
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("autofill", "&:-webkit-autofill");
    },
  ],
  prefix: "tw-",
};
