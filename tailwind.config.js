/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //yeni renkler
      colors: {
        mavi: "#4A69E2",
        yellow: "#FFAF2F",

        
        white: {
          DEFAULT: "#FFFFFF",
          fa:"#FAFAFA",
        },

        gray: {
          DEFAULT:"#E7E7E3",
          main: "#70706E",
          dark: "#232321",
        }
        
        
        
      },

//yeni fontlar 
fontFamily: {
  // varsayılan fontu rubik yapma
  sans: ["Rubik", "sans-serif"],

  open: ["open", "sans-serif"],
},

    },
  },
  plugins: [],
}