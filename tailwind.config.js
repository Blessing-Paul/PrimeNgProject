// tailwind.config.js
import PrimeUI from "tailwindcss-primeui";

export default {
  content: [
    "./src/**/*.{html,ts}", // <– VERY important for Angular
  ],
  theme: {
    extend: {},
  },
  plugins: [PrimeUI],
};
