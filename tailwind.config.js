/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'even-white': '0 0 10px 0 rgba(255, 255, 255, 0.5)',
      },
      keyframes: {
        slideUpFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        slideUpFadeIn: 'slideUpFadeIn 1.5s ease-out both', // 0.8s for a nice slow fade-up
      },
    },
  },
  plugins: [],
}
