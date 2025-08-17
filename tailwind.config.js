/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'meow': ['Meow Script', 'cursive'],
      },
      animation: {
        'float-1': 'float1 6s ease-in-out infinite',
        'float-2': 'float2 8s ease-in-out infinite',
        'float-3': 'float3 7s ease-in-out infinite',
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(-8deg)' },
          '50%': { transform: 'translate(5px, -10px) rotate(-6deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(3deg)' },
          '50%': { transform: 'translate(-8px, -12px) rotate(5deg)' },
        },
        float3: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(-5deg)' },
          '50%': { transform: 'translate(3px, -8px) rotate(-3deg)' },
        },
      },
    },
  },
  plugins: [],
};