/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0D0D0D',
          secondary: '#1A1A1A',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#A3A3A3',
        },
        accent: {
          primary: '#F59E0B',
          secondary: '#EA580C',
          mint: '#10B981',
        },
      },
      fontFamily: {
        display: ['var(--font-clash)', 'system-ui', 'sans-serif'],
        body: ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}