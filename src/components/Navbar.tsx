import React, { useState } from 'react';
import { NAV_TABS } from '../data/mockData';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  const [activeTab, setActiveTab] = useState('rig');

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      height: 52,
      background: 'var(--bg-panel)',
      borderBottom: '1px solid var(--border)',
      padding: '0 16px',
      position: 'relative',
      zIndex: 10,
      flexShrink: 0,
      transition: 'background 0.25s, border-color 0.25s',
    }}>
      {/* Nav Tabs */}
      {NAV_TABS.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '0 18px',
            height: '100%',
            border: 'none',
            background: 'none',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            color: tab.isMpd
              ? '#16a34a'
              : activeTab === tab.id
                ? 'var(--tab-active)'
                : 'var(--text-secondary)',
            borderBottom: tab.isMpd
              ? '2px solid #16a34a'
              : activeTab === tab.id
                ? '2px solid var(--tab-active)'
                : '2px solid transparent',
            transition: 'color 0.15s, border-color 0.15s',
            cursor: 'pointer',
          }}
        >
          {tab.isMpd && (
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#22c55e', flexShrink: 0,
              animation: 'blink 2s infinite',
            }} />
          )}
          {tab.label}
        </button>
      ))}

      {/* Right icons */}
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4 }}>

        {/* Theme Toggle */}
        <button
          onClick={onToggleTheme}
          title="Toggle dark/light mode"
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '0 10px', border: 'none', background: 'none',
            color: 'var(--text-secondary)', fontSize: 12, fontWeight: 500,
            borderRadius: 8, height: 34, cursor: 'pointer',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-hover)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'none')}
        >
          <span>{isDark ? '🌙' : '☀️'}</span>
          {/* Toggle track */}
          <div style={{
            width: 36, height: 20, borderRadius: 10,
            background: isDark ? '#3b82f6' : 'var(--bg-track)',
            border: '1px solid var(--border)',
            position: 'relative', transition: 'background 0.2s', flexShrink: 0,
          }}>
            <div style={{
              position: 'absolute', top: 2, left: 2,
              width: 14, height: 14, borderRadius: '50%', background: '#fff',
              transition: 'transform 0.2s',
              transform: isDark ? 'translateX(16px)' : 'translateX(0)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
            }} />
          </div>
          <span style={{ fontSize: 11 }}>{isDark ? 'Dark' : 'Light'}</span>
        </button>

        {/* Settings icon */}
        <button style={{
          width: 36, height: 36, border: 'none', background: 'none',
          borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--text-secondary)',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-hover)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </button>

        {/* Menu icon */}
        <button style={{
          width: 36, height: 36, border: 'none', background: 'none',
          borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--text-secondary)',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-hover)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
