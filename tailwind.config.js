/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F0F0F",
        secondary: "#1A1A1A",
        gold: "#C8A96B",
        "gold-soft": "#E5C07B",
        "gray-text": "#B0B0B0",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ['"Inter"', "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite alternate",
        "shimmer": "shimmer 2.5s linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%": { boxShadow: "0 0 5px rgba(200, 169, 107, 0.3)" },
          "100%": { boxShadow: "0 0 20px rgba(200, 169, 107, 0.6), 0 0 40px rgba(200, 169, 107, 0.2)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C8A96B 0%, #E5C07B 50%, #C8A96B 100%)",
        "dark-gradient": "linear-gradient(180deg, #0F0F0F 0%, #1A1A1A 100%)",
      },
    },
  },
  plugins: [],
};