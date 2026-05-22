import React, { useState } from "react";
import { NAV_TABS } from "../data/mockData";

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}


const SunIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.22867 3.286L3.286 2.34333C3.026 2.083 2.60333 2.083 2.34333 2.34333C2.083 2.60367 2.083 3.02567 2.34333 3.286L3.286 4.22867C3.34779 4.29072 3.42124 4.33993 3.50214 4.37345C3.58303 4.40698 3.66977 4.42416 3.75733 4.424C3.928 4.424 4.09867 4.359 4.22867 4.22867C4.489 3.96833 4.489 3.54633 4.22867 3.286ZM2 7.33333H0.666667C0.298667 7.33333 0 7.632 0 8C0 8.368 0.298667 8.66667 0.666667 8.66667H2C2.368 8.66667 2.66667 8.368 2.66667 8C2.66667 7.632 2.368 7.33333 2 7.33333ZM4.22867 11.7713C3.96867 11.511 3.546 11.511 3.286 11.7713L2.34333 12.714C2.083 12.9743 2.083 13.3963 2.34333 13.6567C2.47333 13.787 2.644 13.852 2.81467 13.852C2.98533 13.852 3.156 13.787 3.286 13.6567L4.22867 12.714C4.489 12.4537 4.489 12.0317 4.22867 11.7713ZM8 13.3333C7.632 13.3333 7.33333 13.632 7.33333 14V15.3333C7.33333 15.7013 7.632 16 8 16C8.368 16 8.66667 15.7013 8.66667 15.3333V14C8.66667 13.632 8.368 13.3333 8 13.3333ZM13.6567 12.714L12.714 11.7713C12.454 11.511 12.0313 11.511 11.7713 11.7713C11.511 12.0317 11.511 12.4537 11.7713 12.714L12.714 13.6567C12.844 13.787 13.0147 13.852 13.1853 13.852C13.356 13.852 13.5267 13.787 13.6567 13.6567C13.917 13.3963 13.917 12.9743 13.6567 12.714ZM15.3333 7.33333H14C13.632 7.33333 13.3333 7.632 13.3333 8C13.3333 8.368 13.632 8.66667 14 8.66667H15.3333C15.7013 8.66667 16 8.368 16 8C16 7.632 15.7013 7.33333 15.3333 7.33333ZM13.6567 2.34333C13.3967 2.083 12.974 2.083 12.714 2.34333L11.7713 3.286C11.511 3.54633 11.511 3.96833 11.7713 4.22867C11.9013 4.359 12.072 4.424 12.2427 4.424C12.4133 4.424 12.584 4.359 12.714 4.22867L13.6567 3.286C13.917 3.02567 13.917 2.60367 13.6567 2.34333ZM8 0C7.632 0 7.33333 0.298667 7.33333 0.666667V2C7.33333 2.368 7.632 2.66667 8 2.66667C8.368 2.66667 8.66667 2.368 8.66667 2V0.666667C8.66667 0.298667 8.368 0 8 0ZM8 3.66667C5.61067 3.66667 3.66667 5.61067 3.66667 8C3.66667 10.3893 5.61067 12.3333 8 12.3333C10.3893 12.3333 12.3333 10.3893 12.3333 8C12.3333 5.61067 10.3893 3.66667 8 3.66667ZM8 11C6.346 11 5 9.654 5 8C5 6.346 6.346 5 8 5C9.654 5 11 6.346 11 8C11 9.654 9.654 11 8 11Z"
      fill="currentColor"
    />
  </svg>
);

const MoonIcon: React.FC = () => (  
  <svg width="16" height="16" viewBox="-2 -2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.5133 11.3882C19.3087 11.337 19.1041 11.3882 18.9251 11.516C18.2602 12.0787 17.4929 12.539 16.649 12.8459C15.8562 13.1528 14.9866 13.3062 14.066 13.3062C11.9944 13.3062 10.1019 12.4623 8.74647 11.1068C7.39102 9.75139 6.54706 7.85888 6.54706 5.78734C6.54706 4.91781 6.70051 4.07385 6.95626 3.30662C7.23757 2.48824 7.64677 1.74658 8.18383 1.10722C8.414 0.825897 8.36285 0.416705 8.08153 0.186535C7.90251 0.058663 7.69791 0.00751401 7.49332 0.0586629C5.31949 0.646876 3.42698 1.95117 2.07153 3.69024C0.767234 5.40373 0 7.52641 0 9.82811C0 12.6157 1.12528 15.1476 2.96664 16.989C4.808 18.8303 7.3143 19.9556 10.1275 19.9556C12.4803 19.9556 14.6542 19.1372 16.3932 17.7818C18.1579 16.4007 19.4366 14.4315 19.9737 12.181C20.076 11.8229 19.8714 11.4649 19.5133 11.3882Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);


const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  const [activeTab, setActiveTab] = useState("rig");

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        height: 52,
        background: "var(--bg-panel)",
        borderBottom: "1px solid var(--border)",
        padding: "0 16px",
        position: "relative",
        zIndex: 10,
        flexShrink: 0,
        transition: "background 0.25s, border-color 0.25s",
      }}
    >
      {NAV_TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "0 18px",
            height: "100%",
            border: "none",
            background: "none",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            color: tab.isMpd
              ? "#16a34a"
              : activeTab === tab.id
                ? "var(--tab-active)"
                : "var(--text-secondary)",
            borderBottom: tab.isMpd
              ? "2px solid #16a34a"
              : activeTab === tab.id
                ? "2px solid var(--tab-active)"
                : "2px solid transparent",
            transition: "color 0.15s, border-color 0.15s",
            cursor: "pointer",
          }}
        >
          {tab.isMpd && (
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22c55e",
                flexShrink: 0,
                animation: "blink 2s infinite",
              }}
            />
          )}
          {tab.label}
        </button>
      ))}

      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        <button
          onClick={onToggleTheme}
          title="Toggle dark/light mode"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "0 10px",
            border: "none",
            background: "none",
            color: "var(--text-secondary)",
            fontSize: 13,
            fontWeight: 500,
            borderRadius: 8,
            height: 34,
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
        >
        
          <span style={{ display: "flex", alignItems: "center" }}>
            {isDark ? <MoonIcon /> : <SunIcon />}
          </span>

          <div
            style={{
              width: 36,
              height: 20,
              borderRadius: 10,
              background: isDark ? "#3b82f6" : "var(--bg-track)",
              border: "1px solid var(--border)",
              position: "relative",
              transition: "background 0.2s",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 2,
                left: 2,
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "#fff",
                transition: "transform 0.2s",
                transform: isDark ? "translateX(16px)" : "translateX(0)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
              }}
            />
          </div>
          <span style={{ fontSize: 13 }}>{isDark ? "Dark" : "Light"}</span>
        </button>

        <button
          style={{
            width: 36, height: 36, border: "none", background: "none",
            borderRadius: 8, display: "flex", alignItems: "center",
            justifyContent: "center", color: "var(--text-secondary)",
          }}
          
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>

        <button
          style={{
            width: 36, height: 36, border: "none", background: "none",
            borderRadius: 8, display: "flex", alignItems: "center",
            justifyContent: "center", color: "var(--text-secondary)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--bg-hover)"; e.currentTarget.style.color = "var(--text-primary)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "var(--text-secondary)"; }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;