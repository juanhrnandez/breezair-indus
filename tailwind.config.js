/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004c97',
        'steel-gray': '#2f3a45',
        'light-gray': '#f5f5f5'
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};

export default config;
