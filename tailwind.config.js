/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      colors: {
        ethiopia: {
          gold: "#D9A441",
          dark: "#07120E",
          green: "#0E3B2B",
          red: "#9E2A2B",
          cream: "#F5EFE2",
        },
      },
      animation: {
        "fade-up": "fadeUp .8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slow-zoom": "slowZoom 15s ease-in-out infinite alternate",
        float: "float 5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" }
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        }
      }
    }
  },
  plugins: []
};