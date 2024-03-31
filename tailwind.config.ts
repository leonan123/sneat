import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        background: 'hsla(var(--background))',
        foreground: 'hsla(var(--foreground))',
        'foreground-hover': 'hsl(var(--foreground-hover))',

        primary: {
          DEFAULT: 'hsla(var(--primary))',
          foreground: 'hsla(var(--primary-foreground))',
        },

        muted: {
          DEFAULT: 'hsla(var(--muted))',
          foreground: 'hsla(var(--muted-foreground))',
        },

        card: {
          DEFAULT: 'hsla(var(--card))',
          foreground: 'hsla(var(--card-foreground))',
        },
      },
    },
  },
  plugins: [],
}
export default config
