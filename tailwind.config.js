/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        md:{
          min:"625px"
        },
        sm:{
          max:"625px"
        },
        tabby:{
          max:"720px"
        },
        exsm:{
          max:"450px"
        }

      }
    },
  },
  plugins: [],
}