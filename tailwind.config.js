export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
    extend: {
      colors: {
        // Neutral base
        base: {
          light: "#f9fafb", // gray-50
          dark: "#111827",  // gray-900
        },

        // Text colors
        text: {
          light: "#111827", // gray-900
          dark: "#f9fafb",  // gray-50
        },

        // Accent (pick ONE main accent, can swap anytime)
        accent: {
          blue: "#3b82f6",   // blue-500
          teal: "#14b8a6",   // teal-500
          amber: "#f59e0b",  // amber-500
          violet: "#8b5cf6", // violet-500
        },
      },

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // clean + modern
        serif: ["Merriweather", "serif"], // for headings if you want class
      },
    },
  },

  plugins: [],
}