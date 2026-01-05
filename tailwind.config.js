/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 
        'black': '#000000',
        'white': '#ffffff',
        'dark-gray': '#1a1a1a', // 
        'light-gray': '#e5e5e5',
      },
      letterSpacing: {
        'ultra-tight': '-0.05em', // 
      }
    },
  },
  plugins: [],
};
