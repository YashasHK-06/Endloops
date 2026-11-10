/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: { colors: { ink: '#14252B', muted: '#65777A', green: '#16A875', teal: '#0F8F91', mist: '#F4F8F6' }, fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Manrope', 'sans-serif'] }, boxShadow: { soft: '0 18px 60px rgba(20,37,43,.08)' } } },
  plugins: [],
}
