import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ── Security ──────────────────────────────────────────
  // Ensure ANTHROPIC_API_KEY is NEVER accessible client-side.
  // Only variables prefixed with NEXT_PUBLIC_ are exposed.
  // ARGUS enforces this pattern — no exceptions.
  env: {},

  // ── Headers ───────────────────────────────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options',             value: 'DENY' },
          { key: 'X-Content-Type-Options',       value: 'nosniff' },
          { key: 'Referrer-Policy',              value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',           value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        // Streaming API route — no caching
        source: '/api/argus/stream',
        headers: [
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate' },
        ],
      },
    ]
  },

  // ── Webpack / TypeScript ──────────────────────────────
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },

  // ── Logging ───────────────────────────────────────────
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
}

export default nextConfig
