// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Yolu düzenleyin
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 2s infinite', // Süreyi 2 saniye yaptık
      },
      keyframes: {
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' }, // Yüksekliği düşürdük
          '60%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
};
