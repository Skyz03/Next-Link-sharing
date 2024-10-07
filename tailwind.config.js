/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Instrument Sans"', "sans-serif"], // Set Instrument Sans as the default sans-serif font
      },
      colors: {
        primary: "#633cff", // Deep Purple
        primaryLight: "#beadff", // Lighter Purple
        primaryLighter: "#efebff", // Lightest Purple
        slateBlack: "#333333", // Dark Gray/Black
        midGray: "#737373", // Medium Gray
        lightGray: "#d9d9d9", // Light Gray
        offWhite: "#fafafa", // Almost White
        pureWhite: "#ffffff", // White
        dangerRed: "#ff3939", // Alert Red
      },
      extend: {
        typography: {
          headingM: {
            fontSize: "32px", // 32px font size
            lineHeight: "150%", // 150% line height
            fontWeight: "700", // Bold
          },
          headingS: {
            fontSize: "16px", // 16px font size
            lineHeight: "150%", // 150% line height
            fontWeight: "700", // Bold
          },
          bodyM: {
            fontSize: "16px", // 16px font size
            lineHeight: "150%", // 150% line height
            fontWeight: "400", // Regular (default)
          },
          bodyS: {
            fontSize: "12px", // 12px font size
            lineHeight: "150%", // 150% line height
            fontWeight: "400", // Regular (default)
          },
        },
      },
    },
  },
  plugins: [],
};
