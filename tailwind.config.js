/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        accent: '#2563EB',
        dark: '#000000',
        offwhite: '#ffffff',
        muted: '#888888',
        subtle: '#cccccc',
        border: '#111111',
      },
    },
  },
  plugins: [],
}
