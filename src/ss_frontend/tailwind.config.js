/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        "teal-custom": "#5C7474 !important",
        "orange-custom": "#dd860b !important",
        "darkorange-custom": "#cd7d0e !important",
        "green-custom": "#2a6356 !important",
        "lightgreen-custom": "#d7ffdc !important",
        "darkgreen-custom": "#1b2f2e !important",
        "cyan-custom": "#CBF3F0",
        "orange-custom": "#FF9F1C !important",
        "lightcream-custom": "#FFF0D7 !important",
        "cream-custom": "#FFBF69 !important",
        "cream-custom-hover": "#E3A600 !important",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
    },
  },
};
