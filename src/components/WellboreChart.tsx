import React, { useRef } from "react";
import {
  WELLBORE_CASING_PATH,
  WELLBORE_DASHED_PATH,
  WELLBORE_FORMATION_PATH,
  WELLBORE_SOLID_PATH,
  WELLBORE_X_TICKS,
} from "../data/mockData";
import { useZoom } from "../hooks/useZoom";
import ChartGrid from "./ChartGrid";


interface WellboreChartProps {
  isDark: boolean;
 
}

const WellboreChart: React.FC<WellboreChartProps> = ({ isDark }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
 

  const dashColor = isDark ? "#374151" : "#d1d5db";
  const hDashColor = isDark ? "#4a5568" : "#94a3b8";
  const wbFill = isDark ? "#2d3748" : "url(#wellboreGrad)";
  const poreFill = isDark ? "#1f2937" : "#f0f2f5";
  const poreOpacity = isDark ? 0.4 : 0.6;

  return (
    <div
      style={{
        background: "var(--bg-panel)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        height: "100%",
        transition: "background 0.25s",
        borderRight: "1px solid var(--border)",
      }}
    >
  
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.8rem 14px",
          borderBottom: "1px solid var(--border-inner)",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0px",
          textTransform: "uppercase",
          color: "var(--text-Primary)",
          flexShrink: 0,
        }}
      >
        WELLBORE
     
      </div>

  
      <div
        ref={scrollRef}
        style={{
          flex: 1,
          overflow: "auto",
          display: "flex",
          flexDirection: "row",
          minHeight: 0,
        }}
      >
     
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
        
          <div style={{ height: 30, flexShrink: 0 }} />

          
          <div
          
            style={{
              flex: 1,
              minHeight: 0,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <svg
              ref={svgRef}
              viewBox="0 0 340 680"
              preserveAspectRatio="xMidYMid meet"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "block",
              }}
            >
              <defs>
                <clipPath id="wellboreClip">
                  <rect x="38" y="0" width="302" height="660" />
                </clipPath>
               
                <linearGradient id="wellboreGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop
                    offset="0%"
                    stopColor={isDark ? "#2d3748" : "#e2e8f0"}
                  />
                  <stop
                    offset="100%"
                    stopColor={isDark ? "#1f2937" : "#f8fafc"}
                  />
                </linearGradient>
              </defs>

              <ChartGrid svgWidth={340} isDark={isDark} />

            
              <g clipPath="url(#wellboreClip)">
              
                <path d={WELLBORE_CASING_PATH} fill={wbFill} opacity={0.7} />
              
                <path
                  d={WELLBORE_FORMATION_PATH}
                  fill={poreFill}
                  opacity={poreOpacity}
                />
                
                <line
                  x1="38"
                  y1="654"
                  x2="340"
                  y2="654"
                  stroke={hDashColor}
                  strokeDasharray="5,4"
                  strokeWidth={1}
                />
              
                <path
                  d={WELLBORE_SOLID_PATH}
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth={2.2}
                  style={
                    {
                      animation: "drawPath 2s ease forwards 0.5s",
                    } as React.CSSProperties
                  }
                />
              
                <path
                  d={WELLBORE_DASHED_PATH}
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth={1.8}
                  strokeDasharray="6,4"
                  style={
                    {
                      animation: "drawPath 2s ease forwards 0.7s",
                    } as React.CSSProperties
                  }
                />
              </g>

            
              <g fontFamily="DM Mono" fontSize={9} fill="var(--axis-text)">
                <line
                  x1="38"
                  y1="660"
                  x2="340"
                  y2="660"
                  stroke={dashColor}
                  strokeWidth={1}
                />
                {WELLBORE_X_TICKS.map(({ x, label }) => (
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
                  x={188}
                  y={683}
                  textAnchor="middle"
                  fontFamily="DM Mono"
                  fontSize={8}
                >
                  Borehole Diameter (in)
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellboreChart;
