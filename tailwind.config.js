/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'portfolio': {
          // Dark mode colors - Modern deep navy/black
          bg: '#0F1419',
          surface: '#1a1f2e',
          border: '#2a3142',
          silver: '#e5e7eb',
          text: '#f3f4f6',
          muted: '#9ca3af',
          accent: '#3b82f6',
          accentLight: '#60a5fa',

          // Light mode colors - Clean white/light gray
          light: {
            bg: '#ffffff',
            surface: '#f9fafb',
            border: '#e5e7eb',
            accent: '#111827',
            text: '#111827',
            muted: '#6b7280',
          }
        }
      },
      maxWidth: {
        'portfolio': '1000px'
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      transitionProperty: {
        'theme': 'background-color, border-color, color, fill, stroke',
      },
      transitionDuration: {
        'theme': '300ms',
      },
      spacing: {
        'section': '5rem',
        'section-sm': '3rem',
      }
    },
  },
  plugins: [],
}
