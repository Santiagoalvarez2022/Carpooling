/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{html,js,jsx}",  // Asegúrate de que se incluyan los archivos .jsx
  ],
  theme: {
    extend: {
      colors: {
        bgBlue: "#004ad0", // Define tu color personalizado
        bgBlueDark :'#004aad',
        textSucces : '#0ae159'
      },
      borderRadius: {
        'custom-1-5em': '1.5em',
      },
    },
  },
  plugins: [],
}

