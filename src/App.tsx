import React, { useState } from "react";
import CuttingsChart from "./components/CuttingsChart";
import ECDChart from "./components/ECDChart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SafeGuides from "./components/SafeGuides";
import WellboreChart from "./components/WellboreChart";
import { useTheme } from "./hooks/useTheme";
import type { ModalChart } from "./types";

const App: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          height: "100vh",
        }}
      >
        <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "22rem 1fr 1fr 1fr 1fr",
            overflow: "hidden",
          }}
        >
          <SafeGuides isDark={isDark} />
          <CuttingsChart
            isDark={isDark}

          />
          <ECDChart isDark={isDark} />
          <WellboreChart
            isDark={isDark}

          />
          <CuttingsChart
            isDark={isDark}

          />
        </div>


      </div>

      <Footer />
    </div>
  );
};

export default App;
