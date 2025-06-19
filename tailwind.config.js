/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      fontFamily: {
        sans: ['"Instrument Sans"', "sans-serif", "Manrope"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        marqueeReverse: "marqueeReverse 40s linear infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("md-lg", "@media (min-width: 768px) and (max-width: 1023px)");
      addVariant("lg-2xl", "@media (min-width: 1024px) and (max-width: 1335px)");
      addVariant("2xl-3xl", "@media (min-width: 1336px) and (max-width: 1919px)");
    }),
  ],
};
