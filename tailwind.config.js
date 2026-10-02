export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { sage: '#D4EDDA', aqua: '#B8E0D2', powder: '#809BCE', blush: '#EAC4D5', snow: '#F8F9FA', ink: '#2E3A52', soft: '#55617A' },
    fontFamily: { display: ['Fraunces', 'serif'], sans: ['Nunito', 'system-ui', 'sans-serif'] },
    boxShadow: { soft: '0 10px 30px -12px rgba(128,155,206,.45)', lift: '0 22px 45px -18px rgba(128,155,206,.6)' }
  } }
}
