import React, { useEffect } from 'react';
import type { ModalChart } from '../types';
import ChartGrid from './ChartGrid';
import {
  CUTTINGS_CURVE_PATH, CUTTINGS_FILL_PATH, CUTTINGS_X_TICKS,
  ECD_WELLBORE_PATH, ECD_PORE_PATH, ECD_SOLID_PATH, ECD_DASHED_PATH, ECD_X_TICKS,
} from '../data/mockData';

interface ChartModalProps {
  chart: ModalChart;
  isDark: boolean;
  onClose: () => void;
}

const ChartModal: React.FC<ChartModalProps> = ({ chart, isDark, onClose }) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!chart) return null;

  const dashColor  = isDark ? '#374151' : '#d1d5db';
  const hDashColor = isDark ? '#4a5568' : '#94a3b8';
  const refColor   = isDark ? '#374151' : '#d1d5db';
  const wbFill     = isDark ? '#2d3748' : 'url(#mWbGrad)';
  const poreFill   = isDark ? '#1f2937' : '#f0f2f5';
  const poreOpacity = isDark ? 0.4 : 0.6;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
        zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--bg-panel)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          width: 'min(90vw, 720px)',
          height: 'min(90vh, 760px)',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
          transition: 'background 0.25s, border-color 0.25s',
        }}
      >
        {/* Modal header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 18px', borderBottom: '1px solid var(--border)',
          fontSize: 11, fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase',
          color: 'var(--text-secondary)', flexShrink: 0,
        }}>
          {chart === 'cuttings' ? 'CUTTINGS' : 'ECD'} — Expanded View
          <button
            onClick={onClose}
            style={{
              width: 30, height: 30, borderRadius: 6, border: 'none',
              background: 'var(--bg-hover)', color: 'var(--text-secondary)',
              fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            }}
          >✕</button>
        </div>

        {/* Modal body */}
        <div style={{ flex: 1, overflow: 'auto', padding: 16, display: 'flex', flexDirection: 'row' }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            writingMode: 'vertical-rl', transform: 'rotate(180deg)',
            padding: '0 6px', fontSize: 10, fontWeight: 600, letterSpacing: '0.5px',
            color: 'var(--text-muted)', textTransform: 'uppercase', flexShrink: 0,
          }}>
            Measured Depth (m)
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
            {chart === 'cuttings' && (
              <>
                <div style={{ paddingLeft: 38 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', fontFamily: "'DM Mono', monospace", fontSize: 9, color: 'var(--axis-text)', paddingBottom: 2 }}>
                    <span>0</span><span style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>Bed Height (mm)</span><span>400</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', fontFamily: "'DM Mono', monospace", fontSize: 9, color: 'var(--axis-text)', paddingBottom: 6 }}>
                    <span>20</span><span style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>Suspension (%)</span><span>0</span>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <svg viewBox="0 0 320 680" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%' }}>
                    <defs><clipPath id="mCClip"><rect x="38" y="0" width="282" height="660"/></clipPath></defs>
                    <ChartGrid svgWidth={320} isDark={isDark}/>
                    <g clipPath="url(#mCClip)">
                      <line x1="110" y1="0" x2="110" y2="660" stroke={refColor} strokeDasharray="4,3" strokeWidth={0.8}/>
                      <line x1="215" y1="0" x2="215" y2="660" stroke={refColor} strokeDasharray="4,3" strokeWidth={0.8}/>
                      <path d={CUTTINGS_FILL_PATH} fill="rgba(96,165,250,0.07)"/>
                      <path d={CUTTINGS_CURVE_PATH} fill="none" stroke="#60a5fa" strokeWidth={2}/>
                      <line x1="38" y1="652" x2="320" y2="652" stroke="#fb923c" strokeDasharray="5,4" strokeWidth={1.2}/>
                    </g>
                    <g fontFamily="DM Mono" fontSize={9} fill="var(--axis-text)">
                      <line x1="38" y1="660" x2="320" y2="660" stroke={dashColor} strokeWidth={1}/>
                      {CUTTINGS_X_TICKS.map(({ x, label }) => <text key={x} x={x} y={674} textAnchor="middle">{label}</text>)}
                      <text x={178} y={683} textAnchor="middle" fontSize={8}>Inclination (deg)</text>
                    </g>
                  </svg>
                </div>
              </>
            )}

            {chart === 'ecd' && (
              <>
                <div style={{ height: 30, flexShrink: 0 }}/>
                <div style={{ flex: 1 }}>
                  <svg viewBox="0 0 340 680" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%' }}>
                    <defs>
                      <clipPath id="mEClip"><rect x="38" y="0" width="302" height="660"/></clipPath>
                      <linearGradient id="mWbGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={isDark ? '#2d3748' : '#e2e8f0'}/>
                        <stop offset="100%" stopColor={isDark ? '#1f2937' : '#f8fafc'}/>
                      </linearGradient>
                    </defs>
                    <ChartGrid svgWidth={340} isDark={isDark}/>
                    <g clipPath="url(#mEClip)">
                      <path d={ECD_WELLBORE_PATH} fill={wbFill} opacity={0.7}/>
                      <path d={ECD_PORE_PATH} fill={poreFill} opacity={poreOpacity}/>
                      <line x1="38" y1="654" x2="340" y2="654" stroke={hDashColor} strokeDasharray="5,4" strokeWidth={1}/>
                      <path d={ECD_SOLID_PATH} fill="none" stroke="#22c55e" strokeWidth={2.2}/>
                      <path d={ECD_DASHED_PATH} fill="none" stroke="#22c55e" strokeWidth={1.8} strokeDasharray="6,4"/>
                    </g>
                    <g fontFamily="DM Mono" fontSize={9} fill="var(--axis-text)">
                      <line x1="38" y1="660" x2="340" y2="660" stroke={dashColor} strokeWidth={1}/>
                      {ECD_X_TICKS.map(({ x, label }) => <text key={x} x={x} y={674} textAnchor="middle">{label}</text>)}
                      <text x={188} y={683} textAnchor="middle" fontSize={8}>ECD (sg)</text>
                    </g>
                  </svg>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartModal;
