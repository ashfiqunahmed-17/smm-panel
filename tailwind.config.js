/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFF6EC",
          100: "#FFE9D2",
          200: "#FFD3A6",
          300: "#FFB369",
          400: "#F98C34",
          500: "#EA6C1C",
          600: "#D9601E",
          700: "#B8490F",
          800: "#8F3B12",
        },
        ink: {
          DEFAULT: "#151A2D",
          light: "#4B5163",
          muted: "#6B7280",
        },
        cream: "#FFF8EF",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(120deg, #FFF6EC 0%, #FFEFDD 45%, #FFE0BE 100%)",
        "process-gradient":
          "linear-gradient(90deg, #FFFFFF 0%, #FFF1E1 55%, #FFD9AE 100%)",
        "cta-gradient": "linear-gradient(90deg,#EA6C1C 0%,#D9601E 100%)",
        "footer-gradient": "linear-gradient(135deg,#D9601E 0%,#B8490F 100%)",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(234,108,28,0.18)",
        card: "0 8px 24px -8px rgba(20,20,40,0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
}

