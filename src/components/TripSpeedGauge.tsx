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
          fontSize: 10,
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
            fontSize: 10,
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
        <svg
          width="130"
          height="78"
          viewBox="0 0 130 78"
          style={{ flexShrink: 0 }}
        >
          <path
            d="M10,70 A60,60 0 0,1 120,70"
            fill="none"
            stroke="var(--bg-track)"
            strokeWidth="10"
            strokeLinecap="round"
          />

          <path
            d="M85,18 A60,60 0 0,1 120,70"
            fill="none"
            stroke="#fecaca"
            strokeWidth="10"
            strokeLinecap="round"
          />

          <path
            d="M10,70 A60,60 0 0,1 65,10"
            fill="none"
            stroke="#dcfce7"
            strokeWidth="10"
            strokeLinecap="round"
          />

          <path
            d="M65,10 A60,60 0 0,1 107,33"
            fill="none"
            stroke="#ef4444"
            strokeWidth="10"
            strokeLinecap="round"
            opacity=".5"
          />

          <line
            x1="65"
            y1="70"
            x2="107"
            y2="32"
            stroke={needleColor}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="65" cy="70" r="4" fill={needleColor} />

          <text x="7" y="78" fontSize="9" fill={axisColor} fontFamily="DM Mono">
            -0.95
          </text>
          <text
            x="103"
            y="78"
            fontSize="9"
            fill={axisColor}
            fontFamily="DM Mono"
          >
            0.95
          </text>
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
            Lorem Ipsum Text
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
