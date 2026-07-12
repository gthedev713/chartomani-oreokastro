/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'hsl(var(--color-paper) / <alpha-value>)',
        'paper-deep': 'hsl(var(--color-paper-deep) / <alpha-value>)',
        card: 'hsl(var(--color-card) / <alpha-value>)',
        ink: 'hsl(var(--color-ink) / <alpha-value>)',
        'ink-soft': 'hsl(var(--color-ink-soft) / <alpha-value>)',
        burgundy: 'hsl(var(--color-burgundy) / <alpha-value>)',
        'burgundy-deep': 'hsl(var(--color-burgundy-deep) / <alpha-value>)',
        mustard: 'hsl(var(--color-mustard) / <alpha-value>)',
        'mustard-soft': 'hsl(var(--color-mustard-soft) / <alpha-value>)',
        sage: 'hsl(var(--color-sage) / <alpha-value>)',
        'text-main': 'hsl(var(--color-text-main) / <alpha-value>)',
        'text-soft': 'hsl(var(--color-text-soft) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['"Work Sans"', 'sans-serif'],
      },
      borderRadius: {
        lg: '28px',
        md: '18px',
        sm: '10px',
      },
      boxShadow: {
        soft: '0 12px 32px -12px hsl(var(--color-text-main) / 0.18)',
        deep: '0 24px 60px -20px hsl(var(--color-ink) / 0.35)',
      },
    },
  },
  plugins: [],
}
