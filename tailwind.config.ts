import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    extend: {
      backgroundColor: {
        primary: 'hsla(var(--bg-primary))',
        secondary: 'hsla(var(--bg-secondary))',
        tertiary: 'hsla(var(--bg-tertiary))',
        active: 'hsla(var(--bg-active))',
        info: 'hsla(var(--info))',

        hover: {
          secondary: 'hsla(var(--bg-secondary-hover))',
          tertiary: 'hsla(var(--bg-tertiary-hover))',
        },
      },

      textColor: {
        primary: 'hsla(var(--text-primary))',
        secondary: 'hsla(var(--text-secondary))',
        muted: 'hsla(var(--text-muted))',
        active: 'hsla(var(--text-active))',
        info: 'hsla(var(--info))',
        error: 'hsla(var(--error))',
        success: 'hsla(var(--success))',
      },

      outlineColor: {
        secondary: 'hsla(var(--text-secondary))',
      },

      borderColor: {
        muted: 'hsla(var(--text-muted))',
      },

      keyframes: {
        fadeIn: {
          '0%': {
            transform: 'translateY(-8px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },

        fadeOut: {
          '0%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-8px)',
            opacity: '0',
          },
        },
      },

      animation: {
        fadeIn: 'fadeIn 75ms ease-in-out',
        fadeOut: 'fadeOut 100s ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
