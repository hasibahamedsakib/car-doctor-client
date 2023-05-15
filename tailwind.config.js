/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Noto: ["Noto Sans", "sans-serif"],
        Pacifico: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
