/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Ваши основные цвета
        'black': '#000000',
        'white': '#ffffff',
        'dark-gray': '#1a1a1a', // Для мягкого фона или карточек
        'light-gray': '#e5e5e5',
      },
      letterSpacing: {
        'ultra-tight': '-0.05em', // Для стильных ч/б заголовков
      }
    },
  },
  plugins: [],
};
