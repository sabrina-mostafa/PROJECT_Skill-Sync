/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // orrect (enables manual toggle)
  content: ["./index.html", "./src/**/*.{js,jsx}"], // scans all necessary files
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // optional and well-defined
      },
      transformOrigin: {
        'center': 'center',
      },
    },
  },
  plugins: [], // fine (can add later)
};
