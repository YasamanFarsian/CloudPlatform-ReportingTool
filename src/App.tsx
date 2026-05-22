import React, { useState } from "react";
import ChartModal from "./components/ChartModal";
import CuttingsChart from "./components/CuttingsChart";
import ECDChart from "./components/ECDChart";
import Navbar from "./components/Navbar";
import SafeGuides from "./components/SafeGuides";
import { useTheme } from "./hooks/useTheme";
import type { ModalChart } from "./types";

const App: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [modalChart, setModalChart] = useState<ModalChart>(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "500px 1fr 1fr 1fr 1fr",
          overflow: "hidden",
        }}
      >
        <SafeGuides isDark={isDark} />
        <CuttingsChart
          isDark={isDark}
          onExpand={() => setModalChart("cuttings")}
        />
        <ECDChart isDark={isDark} onExpand={() => setModalChart("ecd")} />
        <ECDChart isDark={isDark} onExpand={() => setModalChart("ecd")} />
        <CuttingsChart
          isDark={isDark}
          onExpand={() => setModalChart("cuttings")}
        />
      </div>

      <ChartModal
        chart={modalChart}
        isDark={isDark}
        onClose={() => setModalChart(null)}
      />
    </div>
  );
};

export default App;
