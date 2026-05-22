# Velocity V5 – Drilling Dashboard (React + TypeScript)

A pixel-faithful replica of the Velocity V5 oil & gas drilling monitoring dashboard, built with React 18, TypeScript, and Vite. No external UI libraries — pure React + CSS variables.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Top navigation bar with theme toggle
│   ├── SafeGuides.tsx      # Left panel container
│   ├── TripSpeedGauge.tsx  # Semicircle gauge card
│   ├── SliderCard.tsx      # Flow / SPB / Hookload / Torque slider cards
│   ├── CuttingsChart.tsx   # Center chart panel with zoom
│   ├── ECDChart.tsx        # Right chart panel with zoom
│   ├── ChartGrid.tsx       # Shared SVG Y-axis grid lines
│   ├── ZoomToolbar.tsx     # Reusable +/− zoom controls
│   └── ChartModal.tsx      # Full-screen chart expand modal
├── hooks/
│   ├── useTheme.ts         # Light/dark theme toggle hook
│   └── useZoom.ts          # Chart zoom logic (buttons + Ctrl+scroll)
├── data/
│   └── mockData.ts         # All mock data and SVG path constants
├── types/
│   └── index.ts            # TypeScript interfaces and types
├── styles/
│   └── globals.css         # CSS variables (light & dark), reset, animations
├── App.tsx                 # Root layout component
└── main.tsx                # Entry point
```

---

## Features

| Feature | Details |
|---|---|
| **Dark / Light mode** | CSS variable-based theming, toggle in navbar |
| **Safe Guides panel** | Trip Speed gauge, 4 slider cards (Flow, SPB, Hookload, Torque) |
| **Cuttings chart** | Inclination S-curve, bed height/suspension axes, dashed refs |
| **ECD chart** | Wellbore silhouette, pore pressure band, solid + dashed ECD curves |
| **Zoom controls** | +/− buttons (50%–300%), Reset, per-chart independent state |
| **Ctrl + scroll** | Mouse-wheel zoom on each chart panel |
| **Expand modal** | ⤢ opens chart full-screen, Escape or click outside to close |

---

## Build for Production

```bash
npm run build
# Output in /dist
```
