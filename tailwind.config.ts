import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // ── ARGUS Design Tokens ──────────────────────────
      // Protocol F (FOUNDRY) + Protocol C (ENTERPRISE GRID)
      fontFamily: {
        sans:  ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono:  ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      // Extend zinc scale for deeper darks
      colors: {
        zinc: {
          975: '#050507',
        },
      },
      // Grid template for the ARGUS workspace layout
      gridTemplateColumns: {
        'argus-top':    '1.5fr 1fr',
        'argus-bottom': '1fr 1.5fr',
      },
      gridTemplateRows: {
        'argus-right': '1fr 1fr 1fr',
      },
    },
  },
  plugins: [],
  // Force dark mode — ARGUS workspace is dark-only
  darkMode: 'class',
}

export default config
