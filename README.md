# Velocity V5 – Drilling Dashboard (React + TypeScript)

Velocity panel for  oil & gas drilling monitoring tools, built with React 18, TypeScript, and Vite. 

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
│   ├── Navbar.tsx          
│   ├── SafeGuides.tsx    
│   ├── TripSpeedGauge.tsx  
│   ├── SliderCard.tsx      
│   ├── CuttingsChart.tsx   
│   ├── ECDChart.tsx        
│   ├── ChartGrid.tsx      
├── hooks/
│   ├── useTheme.ts         # Light/dark theme toggle hook
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



---

## Build for Production

```bash
npm run build
# Output in /dist
```
