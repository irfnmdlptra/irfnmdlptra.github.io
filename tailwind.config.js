/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center:true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary:'#64748b',
        red:'#ff0000',
        ins: '#E4405F',
        twt: '#1DA1F2',
        lin: '#0A66C2',
        dis: '#5865F2',
        wa: '#25D366',
        dark: '#0f172a'
      },
      screens: {
        '2xl' : '1320px' ,
      }
    },
  },
  plugins: [],
}
