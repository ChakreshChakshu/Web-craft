/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        // Direct palette tokens as specified in design
        white: '#FFFCF2', // Replaces cold harsh pure white with warm cream
        craft: {
          cream: '#FFFCF2',      // #FFFCF2 - Warm light background / text in dark
          sand: '#CCC5B9',       // #CCC5B9 - Sand borders / neutral structure
          charcoal: '#403D39',   // #403D39 - Charcoal elevated / secondary text
          dark: '#252422',       // #252422 - Deep dark background / primary text in light
          flame: '#EB5E28',      // #EB5E28 - High-energy flame orange accent
          'flame-hover': '#D84F1B',
          'flame-muted': 'rgba(235, 94, 40, 0.12)',
        },
        brand: {
          50: '#FFF7F2',
          100: '#FFEBE0',
          200: '#FFD4C2',
          300: '#FFB599',
          400: '#FA875C',
          500: '#EB5E28', // Flame primary
          600: '#D84F1B',
          700: '#B43B0E',
          800: '#90300E',
          900: '#752A10',
          950: '#3F1204',
        },
        // Smartly map 'blue' and 'indigo' across all components to the flame palette
        blue: {
          50: '#FFF7F2',
          100: '#FFEBE0',
          200: '#FFD4C2',
          300: '#FFB599',
          400: '#FA875C',
          500: '#EB5E28', // Flame primary
          600: '#EB5E28', // Primary CTAs, active states, progress indicators
          700: '#D84F1B',
          800: '#B43B0E',
          900: '#752A10',
          950: '#3F1204',
        },
        indigo: {
          50: '#FFF7F2',
          100: '#FFEBE0',
          200: '#FFD4C2',
          300: '#FFB599',
          400: '#FA875C',
          500: '#EB5E28',
          600: '#D84F1B',
          700: '#B43B0E',
          800: '#90300E',
          900: '#752A10',
          950: '#3F1204',
        },
        // Smartly tune slate to warm cream (#FFFCF2), pale sand (#CCC5B9), and dark charcoal (#252422 / #403D39)
        slate: {
          50: '#FFFCF2',  // Cream background
          100: '#F5F0E6', // Warm surface light
          200: '#CCC5B9', // Pale sand borders
          300: '#B5AE9F',
          400: '#8E8779', // Muted text
          500: '#6E6759',
          600: '#524D43',
          700: '#403D39', // Charcoal secondary
          800: '#2E2D2A', // Dark charcoal borders
          900: '#252422', // Deep dark background
          950: '#1C1B19', // Deep dark elevated
        },
        // Enforce 5-color palette on emerald/green/amber/purple/cyan/red
        emerald: {
          50: '#FFF7F2',
          100: '#FFEBE0',
          200: '#CCC5B9',
          300: '#B5AE9F',
          400: '#FA875C',
          500: '#EB5E28',
          600: '#D84F1B',
          700: '#403D39',
          800: '#2E2D2A',
          900: '#252422',
          950: '#1C1B19',
        },
        green: {
          50: '#FFF7F2',
          100: '#FFEBE0',
          200: '#CCC5B9',
          300: '#B5AE9F',
          400: '#FA875C',
          500: '#EB5E28',
          600: '#D84F1B',
          700: '#403D39',
          800: '#2E2D2A',
          900: '#252422',
          950: '#1C1B19',
        },
        amber: {
          50: '#FFF7F2',
          100: '#FFEBE0',
          200: '#CCC5B9',
          300: '#B5AE9F',
          400: '#FA875C',
          500: '#EB5E28',
          600: '#D84F1B',
          700: '#403D39',
          800: '#2E2D2A',
          900: '#252422',
          950: '#1C1B19',
        },
        yellow: {
          50: '#FFF7F2',
          100: '#FFEBE0',
          200: '#CCC5B9',
          300: '#B5AE9F',
          400: '#FA875C',
          500: '#EB5E28',
          600: '#D84F1B',
          700: '#403D39',
          800: '#2E2D2A',
          900: '#252422',
          950: '#1C1B19',
        },
        purple: {
          50: '#FFF7F2',
          100: '#FFEBE0',
          200: '#CCC5B9',
          300: '#B5AE9F',
          400: '#FA875C',
          500: '#EB5E28',
          600: '#D84F1B',
          700: '#403D39',
          800: '#2E2D2A',
          900: '#252422',
          950: '#1C1B19',
        },
        cyan: {
          50: '#FFF7F2',
          100: '#FFEBE0',
          200: '#CCC5B9',
          300: '#B5AE9F',
          400: '#FA875C',
          500: '#EB5E28',
          600: '#D84F1B',
          700: '#403D39',
          800: '#2E2D2A',
          900: '#252422',
          950: '#1C1B19',
        },
        red: {
          50: '#FFF7F2',
          100: '#FFEBE0',
          200: '#CCC5B9',
          300: '#B5AE9F',
          400: '#FA875C',
          500: '#EB5E28',
          600: '#D84F1B',
          700: '#403D39',
          800: '#2E2D2A',
          900: '#252422',
          950: '#1C1B19',
        },
      }
    },
  },
  plugins: [],
}
