import React, { useRef } from "react";
import {
  CUTTINGS_CURVE_PATH,
  CUTTINGS_FILL_PATH,
  CUTTINGS_X_TICKS,
} from "../data/mockData";
import { useZoom } from "../hooks/useZoom";
import ChartGrid from "./ChartGrid";
import ZoomToolbar from "./ZoomToolbar";

interface CuttingsChartProps {
  isDark: boolean;
  onExpand: () => void;
}

const CuttingsChart: React.FC<CuttingsChartProps> = ({ isDark, onExpand }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const { currentZoom, wrapRef, zoomIn, zoomOut, reset } = useZoom(
    scrollRef,
    svgRef,
  );

  const dashColor = isDark ? "#374151" : "#d1d5db";
  const refColor = isDark ? "#374151" : "#d1d5db";

  return (
    <div
      style={{
        background: "var(--bg-panel)",
        borderRight: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden", // ← panel itself never overflows
        height: "100%", // ← fills the grid cell
        transition: "background 0.25s, border-color 0.25s",
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
          flexShrink: 0, // ← never shrink the header
        }}
      >
        CUTTINGS
        <ZoomToolbar
          zoom={currentZoom}
          onZoomIn={zoomIn}
          onZoomOut={zoomOut}
          onReset={reset}
          onExpand={onExpand}
          extraRight={
            <button
              style={{
                width: 28,
                height: 28,
                border: "none",
                background: "none",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                cursor: "pointer",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          }
        />
      </div>

      {/* ── Scroll container (only scrolls when zoomed > 100%) ── */}
      <div
        ref={scrollRef}
        style={{
          flex: 1, // ← takes all remaining vertical space
          overflow: "auto", // ← scrollbars appear only when SVG is larger
          display: "flex",
          flexDirection: "row",
          minHeight: 0, // ← critical: lets flex child shrink below content size
        }}
      >
        {/* Y-axis label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            padding: "10px 4px",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.5px",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            flexShrink: 0,
            width: 20,
            transition: "color 0.25s",
          }}
        >
          Measured Depth (m)
        </div>

        {/* Right column: headers + SVG */}
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
          {/* Dual X headers (fixed height, never scrolls away) */}
          <div style={{ paddingLeft: 38, flexShrink: 0 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
                fontFamily: "'DM Mono', monospace",
                fontSize: 9,
                color: "var(--axis-text)",
                paddingBottom: 2,
              }}
            >
              <span>0</span>
              <span
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                Bed Height (mm)
              </span>
              <span>400</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
                fontFamily: "'DM Mono', monospace",
                fontSize: 9,
                color: "var(--axis-text)",
                paddingBottom: 4,
              }}
            >
              <span>20</span>
              <span
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                Suspension (%)
              </span>
              <span>0</span>
            </div>
          </div>

          {/* SVG wrapper — flex:1 so SVG fills remaining height exactly */}
          <div
            ref={wrapRef}
            style={{
              flex: 1,
              minHeight: 0,
              overflow: "hidden", // clip at wrapper boundary at 100% zoom
            }}
          >
            <svg
              ref={svgRef}
              viewBox="0 0 320 680"
              preserveAspectRatio="xMidYMid meet"
              style={{
                width: "100%",
                height: "100%", // ← fills wrapper, wrapper fills panel
                display: "block",
              }}
            >
              <defs>
                <clipPath id="cClip">
                  <rect x="38" y="0" width="282" height="660" />
                </clipPath>
              </defs>

              {/* Y-grid */}
              <ChartGrid svgWidth={320} isDark={isDark} />

              {/* Clipped data layer */}
              <g clipPath="url(#cClip)">
                {/* Vertical dashed reference lines */}
                <line
                  x1="110"
                  y1="0"
                  x2="110"
                  y2="660"
                  stroke={refColor}
                  strokeDasharray="4,3"
                  strokeWidth={0.8}
                />
                <line
                  x1="215"
                  y1="0"
                  x2="215"
                  y2="660"
                  stroke={refColor}
                  strokeDasharray="4,3"
                  strokeWidth={0.8}
                />
                {/* Fill area */}
                <path d={CUTTINGS_FILL_PATH} fill="rgba(96,165,250,0.07)" />
                {/* Inclination S-curve */}
                <path
                  d={CUTTINGS_CURVE_PATH}
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth={2}
                  style={
                    {
                      animation: "drawPath 2s ease forwards 0.3s",
                    } as React.CSSProperties
                  }
                />
                {/* Orange limit line */}
                <line
                  x1="38"
                  y1="652"
                  x2="320"
                  y2="652"
                  stroke="#fb923c"
                  strokeDasharray="5,4"
                  strokeWidth={1.2}
                />
              </g>

              {/* X-axis */}
              <g fontFamily="DM Mono" fontSize={9} fill="var(--axis-text)">
                <line
                  x1="38"
                  y1="660"
                  x2="320"
                  y2="660"
                  stroke={dashColor}
                  strokeWidth={1}
                />
                {CUTTINGS_X_TICKS.map(({ x, label }) => (
                  <text
                    key={x}
                    x={x}
                    y={674}
                    textAnchor="middle"
                    fontFamily="DM Mono"
                    fontSize={9}
                  >
                    {label}
                  </text>
                ))}
                <text
                  x={178}
                  y={683}
                  textAnchor="middle"
                  fontFamily="DM Mono"
                  fontSize={8}
                >
                  Inclination (deg)
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuttingsChart;
