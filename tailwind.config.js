module.exports = {
  darkMode: 'class', // Enable dark mode using a class
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkCustom: '#AFB9CA', // Ví dụ: màu nền tùy chỉnh cho dark mode
        customLight: '#1f2937',
        
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Khai báo Roboto
      },
    },
  },
  plugins: [],
};
