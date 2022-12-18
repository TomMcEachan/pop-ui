/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  theme: {
    extend: {
      screens:{
        XSMobile: '320px',
        MDMobile: '375px',
        LMobile: '425px',
        STablet: '520px',
        MDTablet: '768px',
        MDLaptop: '1024px',
        LGLaptop: '1440px',
      },
      colors: {
        spblue: {
          dark: '#00223E',
          light: '#003057',
        },
        spmagenta: {
          dark: '#7C0165',
          light: '#B0008E'
        },
        sppurple: {
          light:'#500778',
          dark:'#3A0059',
        },
        spsilver: '#848789',
        splightblue: '#007dba',
        sporange: '#e87722',
        spwhite: '#FFFFFF', 
        spblack: '#000000',
      },
      backgroundImage: {
        homepage: "url('/assets/imagesG/Frame 1.png)",
      }
    },
  },
  plugins: [],
}