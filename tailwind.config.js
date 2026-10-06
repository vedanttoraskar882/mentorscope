/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0B1522',
          900: '#14243A', // Deep navy primary brand
          800: '#1C314E',
          700: '#253E62',
          600: '#34527D',
          100: '#E7ECF3',
          50: '#F2F5F9',
        },
        teal: {
          900: '#044249',
          800: '#06616B',
          700: '#087F8C', // Teal accent
          600: '#0B9EAE',
          500: '#13B9CC',
          200: '#B6E7ED',
          100: '#D5F1F5',
          50: '#EBF7F9',
        },
        warm: {
          50: '#FAFBFC',
          100: '#F7F9FC', // Warm off-white page background
          200: '#EDF1F7',
          300: '#E2E7F0',
        },
        slate: {
          muted: '#64748B',
          body: '#334155',
          dark: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        'site': '1200px',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(20, 36, 58, 0.05), 0 1px 2px -1px rgba(20, 36, 58, 0.05)',
        'card': '0 4px 6px -1px rgba(20, 36, 58, 0.05), 0 2px 4px -2px rgba(20, 36, 58, 0.05)',
        'card-hover': '0 10px 15px -3px rgba(20, 36, 58, 0.08), 0 4px 6px -4px rgba(20, 36, 58, 0.05)',
        'modal': '0 25px 50px -12px rgba(20, 36, 58, 0.25)',
      }
    },
  },
  plugins: [],
}
