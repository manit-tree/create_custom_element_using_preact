const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  darkMode: 'selector',
  theme: {
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,  
        slate: colors.slate,
        blue: colors.blue,    
        red: colors.red,
        neutral: colors.neutral,
        primary: '#94FF16'
    }
  },
  plugins: [
    require('preline/plugin')
  ],
}

