import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: 'styled-system',

  // Useful for theme customization
  theme: {
    extend: {
      colors: {
        point: '#267db6',
        text: '#1f1e1e',
        textSub: '#666666',
        textLight: '#999999',
      },
      tokens: {
        colors: {
          point: { value: '#267db6' },
          text: { value: '#1f1e1e' },
          textSub: { value: '#666666' },
          textLight: { value: '#999999' },
        },
      },
    },
  },

  // The JSX framework to use
  jsxFramework: 'react',

  globalCss: {
    'html, body': {
      margin: 0,
      padding: 0,
      fontFamily: 'var(--font-noto-sans-kr), sans-serif',
    },
  },
})
