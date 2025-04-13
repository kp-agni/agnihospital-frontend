/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        6: "1.5rem", // Adjust the spacing as per your requirements
      },
      fontSize: {
        "xl": "1.25rem", // Optional, adjust font size for the symbol
      },
      backgroundImage: {
        'arrow': "url('./assets/footer_vector.svg')", // Set the path to your SVG for footer
        'navbar-arrow': "url('./assets/navbar_vector.svg')", // Set the path to your SVG for navbar
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        // Class for footer arrow
        '.li-with-arrow::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '16px', // Adjust the size of the SVG arrow
          height: '16px',
          backgroundImage: 'url(./assets/footer_vector.svg)', // Path to footer vector SVG
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        },

        // Class for navbar arrow (or similar use case)
        '.navbar-li-with-arrow::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '16px', // Adjust the size of the SVG arrow
          height: '16px',
          backgroundImage: 'url(./assets/navbar_vector.svg)', // Path to navbar vector SVG
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }
      });
    }
  ],
}
