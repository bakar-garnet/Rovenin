/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
  prefix: '',
  safelist: [
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    'border-border',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30',
    'text-5xl',
    'text-4xl',
    'text-3xl',
    'text-2xl',
    'text-xl',
    'text-lg',
    'mt-12',
    'mt-10',
    'mt-8',
    'mt-6',
    'mb-6',
    'mb-5',
    'mb-4',
    'mb-3',
    'leading-tight',
    'font-semibold',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        background: 'hsl(var(--background))',
        border: 'hsla(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        custom: '#A17B5E',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        foreground: 'hsl(var(--foreground))',
        input: 'hsl(var(--input))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        navItem: '#9DA0A5',
        textlight: '#9DA0A5',
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        ring: 'hsl(var(--ring))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        success: 'hsl(var(--success))',
        error: 'hsl(var(--error))',
        warning: 'hsl(var(--warning))',
      },
      fontFamily: {
        gilda: ['Gilda Display', 'serif'],
        mono: ['var(--font-geist-mono)'],
        sans: ['Gilda Display', 'serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      letterSpacing: {
        rovenin: '0.02em',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.white'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-links': theme('colors.custom'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-quotes': theme('colors.custom'),
            '--tw-prose-quote-borders': theme('colors.custom'),
          },
        },
        custom: {
          css: {
            '--tw-prose-body': theme('colors.white'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-links': theme('colors.custom'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-counters': theme('colors.textlight'),
            '--tw-prose-bullets': theme('colors.textlight'),
            '--tw-prose-hr': theme('colors.textlight'),
            '--tw-prose-quotes': theme('colors.custom'),
            '--tw-prose-quote-borders': theme('colors.custom'),
            '--tw-prose-captions': theme('colors.textlight'),
            '--tw-prose-code': theme('colors.white'),
            '--tw-prose-pre-code': theme('colors.white'),
            '--tw-prose-pre-bg': 'rgb(0 0 0 / 0.4)',
            '--tw-prose-th-borders': theme('colors.textlight'),
            '--tw-prose-td-borders': theme('colors.textlight'),

            maxWidth: '800px',
            fontSize: '1rem',
            lineHeight: '1.75',

            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },

            h1: {
              fontFamily: theme('fontFamily.gilda'),
              color: theme('colors.white'),
              fontSize: '3.5rem',
              lineHeight: '1.1',
              fontWeight: 'normal',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },

            h2: {
              fontFamily: theme('fontFamily.gilda'),
              color: theme('colors.white'),
              fontSize: '2.25rem',
              lineHeight: '1.2',
              fontWeight: 'normal',
              marginTop: '1.6em',
              marginBottom: '0.6em',
            },

            h3: {
              fontFamily: theme('fontFamily.gilda'),
              color: theme('colors.white'),
              fontSize: '1.75rem',
              lineHeight: '1.3',
              fontWeight: 'normal',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },

            h4: {
              fontFamily: theme('fontFamily.gilda'),
              color: theme('colors.white'),
              fontSize: '1.35rem',
              lineHeight: '1.35',
              fontWeight: 'normal',
              marginTop: '1.4em',
              marginBottom: '0.45em',
            },

            blockquote: {
              color: theme('colors.custom'),
              borderLeftColor: theme('colors.custom'),
              fontStyle: 'italic',
            },

            ul: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
              paddingLeft: '1.5em',
            },

            ol: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
              paddingLeft: '1.5em',
            },

            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },

            img: {
              borderRadius: '0.5rem',
            },

            figure: {
              marginTop: '2em',
              marginBottom: '2em',
            },

            'figure figcaption': {
              color: theme('colors.textlight'),
              fontSize: '0.875rem',
              lineHeight: '1.4285714',
              marginTop: '0.8571429em',
              textAlign: 'center',
            },
          },
        },
      }),
    },
  },
}