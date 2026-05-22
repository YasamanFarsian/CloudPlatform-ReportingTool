import React from "react";
import { GAUGE_DATA } from "../data/mockData";

interface TripSpeedGaugeProps {
  isDark: boolean;
}

const TripSpeedGauge: React.FC<TripSpeedGaugeProps> = ({ isDark }) => {
  const needleColor = isDark ? "#e2e8f0" : "#1a2332";
  const axisColor = "var(--axis-text)";
  const bgPanel = "var(--bg-panel)";

  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-card)",
        borderRadius: 8,
        padding: "12px 14px",
        flexShrink: 0,
        transition: "background 0.25s, border-color 0.25s",
      }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.7px",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          marginBottom: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        TRIP SPEED (M/S)
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            padding: "2px 8px",
            borderRadius: 4,
            background: "var(--bg-badge)",
            color: "var(--text-secondary)",
            transition: "background 0.25s",
          }}
        >
          On Bottom
        </span>
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>

        <svg width="130" height="85" viewBox="0 0 130 85" style={{ flexShrink: 0 }}>


          <path
            d="M65,70 L10,70 A60,60 0 0,1 95,12 Z"
            fill="#fde8e8"
          />



          <path
            d="M10,70 A60,60 0 0,1 95,12"
            fill="none"
            stroke="#991b1b"
            strokeWidth="8"
            strokeLinecap="round"
          />


          <line
            x1="65"
            y1="70"
            x2="95"
            y2="12"
            stroke={needleColor}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="65" cy="70" r="5" fill={needleColor} />

          <text
            x="100"
            y="9"
            fontSize="11"
            fontWeight="700"
            fill={needleColor}
            fontFamily="DM Sans, sans-serif"
            textAnchor="middle"
          >
            0.75
          </text>


          <text x="5" y="82" fontSize="9" fill={axisColor} fontFamily="DM Mono">-0.95</text>
          <text x="100" y="82" fontSize="9" fill={axisColor} fontFamily="DM Mono">0.95</text>

        </svg>



        <div style={{ flex: 1, paddingTop: 4 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 6,
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              style={{
                border: `1.5px solid ${needleColor}`,
                borderRadius: 5,
                padding: 3,
                background: needleColor,
              }}
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                fill="none"
                stroke={bgPanel}
                strokeWidth="2"
              />
              <circle cx="11" cy="11" r="3" fill={bgPanel} />
            </svg>

            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2.5"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
          </div>

          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 22,
              fontWeight: 500,
              color: "var(--text-primary)",
              lineHeight: 1,
            }}
          >
            {GAUGE_DATA.value}{" "}
            <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
              m/s
            </span>
          </div>
          <div
            style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 6 }}
          >
            Speed limit Report
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontSize: 11,
                color: "var(--text-secondary)",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#3b82f6",
                }}
              />
              Down
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontSize: 11,
                color: "var(--text-secondary)",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#ef4444",
                }}
              />
              UP
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 8,
        }}
      >
        <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>
          Flow Rate Limit&nbsp;&nbsp;Exceeded
        </span>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            color: "var(--text-primary)",
            background: "var(--bg-badge)",
            padding: "2px 6px",
            borderRadius: 4,
            transition: "background 0.25s",
          }}
        >
          {GAUGE_DATA.flowRateValue}
        </span>
      </div>
    </div>
  );
};

export default TripSpeedGauge;
