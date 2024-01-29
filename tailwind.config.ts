import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#0088b9",
          secondary: "#00CBBF",
          accent: "#f1f1f1",
          blackTwo: "555555",
          success: "#22bb33",
          warning: "#f0ad4e",
          error: "#bb2124",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#0088b9",
          secondary: "#00CBBF",
          accent: "#f1f1f1",
          blackTwo: "555555",
          success: "#22bb33",
          warning: "#f0ad4e",
          error: "#bb2124",
        },
      },
    ],
  },
};
export default config;
