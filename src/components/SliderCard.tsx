import React from "react";
import type { SliderCard as SliderCardType } from "../types";

interface SliderCardProps {
  data: SliderCardType;
}

const SliderCard: React.FC<SliderCardProps> = ({ data }) => {
  const pct = data.value * 100;

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
        {data.label}
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
          {data.badge}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 6,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: data.statusColor,
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: 11,
            color: data.active ? "var(--text-primary)" : "var(--text-muted)",
          }}
        >
          {data.statusText}
        </span>
      </div>

      {data.active && (
        <div
          style={{
            textAlign: "center",
            fontFamily: "'DM Mono', monospace",
            fontSize: 12,
            fontWeight: 500,
            color: "var(--text-primary)",
            marginBottom: 2,
          }}
        >
          {data.displayValue}
        </div>
      )}

      <div style={{ marginTop: 6 }}>
        <div
          style={{
            position: "relative",
            height: 6,
            background: "var(--bg-track)",
            borderRadius: 3,
            margin: "4px 0",
            transition: "background 0.25s",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: `${pct}%`,
              borderRadius: 3,
              background: data.fillColor,
            }}
          />
          {data.active && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: `${pct}%`,
                transform: "translate(-50%, -50%)",
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "var(--bg-panel)",
                border: `2px solid ${data.fillColor}`,
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                transition: "background 0.25s",
              }}
            />
          )}
        </div>
        {data.active && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              color: "var(--text-muted)",
              marginTop: 2,
            }}
          >
            <span>-0.95</span>
            <span>0.95</span>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default SliderCard;
