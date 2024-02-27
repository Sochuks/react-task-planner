/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Screen Sizes
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      // Portfolio Color Scheme
      colors:{
        bgColor: '#1f1f38',
        bg2Color: '#2c2c6c',
        primaryColor: '4db5ff',
        primary2Color: 'rgb(77, 181, 125, 0.4)',
        whiteColor: '#fff',
        lightColor: 'rgb(255, 255, 255, 0.6)',
      },
    },
  },
  plugins: [],
}

