/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000a12",
        lprimary: "#11202B",
        lsecondary: "#00ff84",
        lgrey: "#2C4151",
        "lgrey-0": "rgb(44 65 81 / 0)",
        txt: "#D9D9D9",
        dgrey: "#97A1BF",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      lineHeight: {
        12: "3rem",
        14: "4rem",
      },
      boxShadow: {
        card: "0px 24px 24px rgba(0, 0, 0, 0.1)",
        card2: "0px 24px 24px rgba(0, 0, 0, 0.03)",
        card3:
          "0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);",
        card4: "0 32px 32px rgb(31 47 70 / 12%)",
        card5: "0 20px 34px rgba(152,163,207,.3)",
      },
      screens: {
        xs: "300px",
        bp: "500px",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-gradient": (angle) => ({
            "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme("bgGradientDeg", {}), // name of config key. Must be unique
            {
              10: "10deg", // bg-gradient-10
              15: "15deg",
              20: "20deg",
              25: "25deg",
              30: "30deg",
              45: "45deg",
              60: "60deg",
              90: "90deg",
              120: "120deg",
              135: "135deg",
              180: "180deg",
            }
          ),
        }
      );
    }),
  ],
};
