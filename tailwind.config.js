/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center:true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary:'#64748b',
        red:'#ff0000',
        ins: '#E4405F',
        twt: '#1DA1F2',
        lin: '#0A66C2',
        dis: '#5865F2',
        dark: '#0f172a'
      },
      screens: {
        '2xl' : '1320px' ,
      }
    },
  },
  plugins: [],
}
