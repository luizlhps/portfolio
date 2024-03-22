import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        icons: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,40px,10px)' },
        },
      },
      animation: {},

      padding: {
        'max-w-xl': '20px',
      },

      colors: {
        background: 'var(--background)',
        'background-gray': 'var(--background-gray)',
        'text-color': 'var(--text)',
        'text-gray': 'var(--text-gray)',
        secondary: 'var(--secondary)',
        'secondary-light-color': 'var(--secondary-light-color)',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
