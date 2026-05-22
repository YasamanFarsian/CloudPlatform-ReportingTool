import React, { useRef } from "react";
import {
  ECD_DASHED_PATH,
  ECD_PORE_PATH,
  ECD_SOLID_PATH,
  ECD_WELLBORE_PATH,
  ECD_X_TICKS,
} from "../data/mockData";
import { useZoom } from "../hooks/useZoom";
import ChartGrid from "./ChartGrid";
import ZoomToolbar from "./ZoomToolbar";

interface ECDChartProps {
  isDark: boolean;
  onExpand: () => void;
}

const ECDChart: React.FC<ECDChartProps> = ({ isDark, onExpand }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const svgRef    = useRef<SVGSVGElement>(null);
  const { currentZoom, wrapRef, zoomIn, zoomOut, reset } = useZoom(scrollRef, svgRef);

  const dashColor   = isDark ? "#374151" : "#d1d5db";
  const hDashColor  = isDark ? "#4a5568" : "#94a3b8";
  const wbFill      = isDark ? "#2d3748" : "url(#wbGrad)";
  const poreFill    = isDark ? "#1f2937" : "#f0f2f5";
  const poreOpacity = isDark ? 0.4 : 0.6;

  return (
    <div
      style={{
        background: "var(--bg-panel)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",       // ← panel itself never overflows
        height: "100%",           // ← fills grid cell
        transition: "background 0.25s",
      }}
    >
      {/* ── Panel header ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px",
          borderBottom: "1px solid var(--border-inner)",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.8px",
          textTransform: "uppercase",
          color: "var(--text-secondary)",
          flexShrink: 0,
        }}
      >
        ECD
        <ZoomToolbar
          zoom={currentZoom}
          onZoomIn={zoomIn}
          onZoomOut={zoomOut}
          onReset={reset}
          onExpand={onExpand}
          extraRight={
            <>
              <button style={{ width: 28, height: 28, border: "none", background: "none", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-secondary)", cursor: "pointer" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
              <button style={{ width: 28, height: 28, border: "none", background: "none", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-secondary)", cursor: "pointer" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </>
          }
        />
      </div>

      {/* ── Scroll container ── */}
      <div
        ref={scrollRef}
        style={{
          flex: 1,
          overflow: "auto",
          display: "flex",
          flexDirection: "row",
          minHeight: 0,          // ← critical
        }}
      >
        {/* Y-axis label */}
        <div
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            writingMode: "vertical-rl", transform: "rotate(180deg)",
            padding: "10px 4px", fontSize: 10, fontWeight: 600,
            letterSpacing: "0.5px", color: "var(--text-muted)",
            textTransform: "uppercase", flexShrink: 0, width: 20,
            transition: "color 0.25s",
          }}
        >
          Measured Depth (m)
        </div>

        {/* Right column */}
        <div
          style={{
            flex: 1,
            padding: "10px 10px 30px 0",
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            minHeight: 0,
          }}
        >
          {/* Spacer to align with cuttings dual X headers */}
          <div style={{ height: 30, flexShrink: 0 }} />

          {/* SVG wrapper — fills all remaining height */}
          <div
            ref={wrapRef}
            style={{
              flex: 1,
              minHeight: 0,
              overflow: "hidden",
            }}
          >
            <svg
              ref={svgRef}
              viewBox="0 0 340 680"
              preserveAspectRatio="xMidYMid meet"
              style={{ width: "100%", height: "100%", display: "block" }}
            >
              <defs>
                <clipPath id="eClip">
                  <rect x="38" y="0" width="302" height="660" />
                </clipPath>
                <linearGradient id="wbGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%"   stopColor={isDark ? "#2d3748" : "#e2e8f0"} />
                  <stop offset="100%" stopColor={isDark ? "#1f2937" : "#f8fafc"} />
                </linearGradient>
              </defs>

              {/* Y-grid */}
              <ChartGrid svgWidth={340} isDark={isDark} />

              {/* Clipped data */}
              <g clipPath="url(#eClip)">
                <path d={ECD_WELLBORE_PATH} fill={wbFill}   opacity={0.7} />
                <path d={ECD_PORE_PATH}     fill={poreFill} opacity={poreOpacity} />
                <line x1="38" y1="654" x2="340" y2="654" stroke={hDashColor} strokeDasharray="5,4" strokeWidth={1} />
                <path
                  d={ECD_SOLID_PATH}
                  fill="none" stroke="#22c55e" strokeWidth={2.2}
                  style={{ animation: "drawPath 2s ease forwards 0.5s" } as React.CSSProperties}
                />
                <path
                  d={ECD_DASHED_PATH}
                  fill="none" stroke="#22c55e" strokeWidth={1.8} strokeDasharray="6,4"
                  style={{ animation: "drawPath 2s ease forwards 0.7s" } as React.CSSProperties}
                />
              </g>

              {/* X-axis */}
              <g fontFamily="DM Mono" fontSize={9} fill="var(--axis-text)">
                <line x1="38" y1="660" x2="340" y2="660" stroke={dashColor} strokeWidth={1} />
                {ECD_X_TICKS.map(({ x, label }) => (
                  <text key={x} x={x} y={674} textAnchor="middle" fontFamily="DM Mono" fontSize={9}>
                    {label}
                  </text>
                ))}
                <text x={188} y={683} textAnchor="middle" fontFamily="DM Mono" fontSize={8}>
                  ECD (sg)
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECDChart;
