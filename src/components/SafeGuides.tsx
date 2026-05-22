import React from "react";
import { SLIDER_CARDS } from "../data/mockData";
import SliderCard from "./SliderCard";
import TripSpeedGauge from "./TripSpeedGauge";

interface SafeGuidesProps {
  isDark: boolean;
}

const SafeGuides: React.FC<SafeGuidesProps> = ({ isDark }) => {
  return (
    <div
      style={{
        background: "var(--bg-panel)",
        borderRight: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "background 0.25s, border-color 0.25s",
      }}
    >
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
          transition: "border-color 0.25s",
        }}
      >
        Safe Guides
      </div>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          padding: "12px 14px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <TripSpeedGauge isDark={isDark} />
        {SLIDER_CARDS.map((card) => (
          <SliderCard key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
};

export default SafeGuides;
