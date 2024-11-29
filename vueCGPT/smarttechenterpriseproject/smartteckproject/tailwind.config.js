/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/assets/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#13293D',
        second: '#006494',
        third: '#247ba0',
        fourth: '#1b98e0',
        fifth: '#e8f1f2'
      },
      
      
    },
    container:{
      padding:{
        // default: '1rem',
        // sm: '2rem',
        // lg: '4rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },
      screens:{
        sm: '100%',    // Para telas pequenas, largura 100%
        md: '720px',   // Para telas médias, largura 720px
        lg: '1960px',   // Para telas grandes, largura 960px
        xl: '1140px',  //
      }
    }
  },
  plugins: [],
}

