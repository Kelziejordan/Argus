# ARGUS V10 — AI Software Architecture Workspace

> **Principal-level AI software architect.** Designs production-grade, enterprise-scale systems through structured architectural reasoning before writing a single line of code.

## What This Is

ARGUS V10 is a purpose-built workspace for running the ARGUS pipeline — a 17-process AI engineering system that:

- **Phase 1** architects your system completely before any code is written (hostile audit, chaos engineering, threat surface analysis, simplicity review)
- **Phase 2** generates production-grade TypeScript/React code layer by layer (schemas → utils → hooks → boundaries → components → shell)
- **Detects opportunities** in the domain being architected and surfaces them in real time
- **Protects your API key** — the system prompt and Anthropic key never leave the server

## Quick Start

### 1. Prerequisites
- Node.js 20+
- An Anthropic API key with access to Claude Opus 4 ([console.anthropic.com](https://console.anthropic.com))

### 2. Install
```bash
npm install
```

### 3. Configure environment
```bash
cp .env.local.example .env.local
# Open .env.local and add your ANTHROPIC_API_KEY
```

### 4. Run
```bash
npm run dev
# Open http://localhost:3000
```

## Project Structure

```
argus-v10/
├── app/
│   ├── layout.tsx              # Root layout + providers
│   ├── page.tsx                # Workspace grid (9 panels)
│   ├── globals.css             # Tailwind base + design tokens
│   └── api/argus/stream/
│       └── route.ts            # Secure streaming API handler
└── src/
    ├── types/
    │   ├── index.ts            # RemoteData<T>, all domain types
    │   └── pipeline.ts         # 17 ARGUS processes, tier system
    ├── schemas/                # Zod runtime validation schemas
    ├── utils/                  # Pure functions (zero React)
    ├── hooks/                  # State + async lifecycle
    ├── providers/
    │   └── ArgusSessionProvider.tsx   # Orchestration layer
    └── components/
        ├── boundaries/         # Per-panel + root error boundaries
        ├── StreamRenderer.tsx  # Native markdown renderer
        ├── PipelineProgressPanel.tsx
        ├── StreamOutputPanel.tsx
        ├── ArgusInputPanel.tsx
        ├── NextMovePanel.tsx
        ├── AlternativeRoutePanel.tsx
        ├── OpportunityPanel.tsx
        └── OpportunityHistoryPanel.tsx
```

## Architecture Mandates

All 9 ARGUS engineering mandates are active in this codebase:

| # | Mandate | Implementation |
|---|---------|---------------|
| 1 | State Determinism | `RemoteData<T>` throughout — no boolean flags |
| 2 | Signal-Driven Asynchrony | `AbortController` on all streams |
| 3 | Strict Type Boundaries | No `any`, no `@ts-ignore` |
| 4 | Absolute Accessibility | WCAG 2.1 AA — aria-live, semantic HTML |
| 5 | Domain Separation | `/components` `/hooks` `/utils` `/schemas` |
| 6 | Minimal Dependencies | Only `next`, `react`, `zod` |
| 7 | Protocol Compliance | Protocol F + C behavioral contracts |
| 8 | Zero-Trust Data | All external data validated via Zod |
| 9 | Observability | Correlation IDs, structured errors, per-panel boundaries |

## Deployment

### Vercel (Recommended)
```bash
# Push to GitHub first, then:
vercel --prod
# Add ANTHROPIC_API_KEY in Vercel dashboard → Settings → Environment Variables
```

### Environment Variables (Vercel Dashboard)
| Key | Value | Scope |
|-----|-------|-------|
| `ANTHROPIC_API_KEY` | `sk-ant-...` | Production, Preview |

**Critical:** Never prefix with `NEXT_PUBLIC_`. The API key must remain server-side.

## Using ARGUS

1. **Describe your build** in the input panel
2. **ARGUS executes Phase 1** — 14 processes of architectural reasoning
3. **Review the output** across all panels (stream, pipeline progress, alternatives)
4. **Select a clearance action:**
   - `APPROVE` → triggers Phase 2 code generation
   - `AMEND [PROCESS]` → ARGUS re-runs a specific process
   - `CHALLENGE` → ARGUS defends its decisions
   - `SIMPLIFY` → ARGUS strips unnecessary complexity
5. **Phase 2** generates code layer by layer (reply `CONTINUE` after each)
6. **Opportunities** detected during the pipeline appear live and persist to history

## Security

- `ANTHROPIC_API_KEY` accessed only in `app/api/argus/stream/route.ts`
- System prompt constructed server-side, never returned to client
- Rate limiting: 10 requests/minute per IP (upgrade to Redis for production)
- All request bodies validated via Zod before processing
- Correlation IDs on every request for incident tracing
