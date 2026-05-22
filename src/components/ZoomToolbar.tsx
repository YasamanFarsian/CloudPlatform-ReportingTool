import React from 'react';
import type { ZoomLevel } from '../types';

interface ZoomToolbarProps {
  zoom: ZoomLevel;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  onExpand: () => void;
  extraRight?: React.ReactNode;
}

const btnStyle: React.CSSProperties = {
  width: 28, height: 28, borderRadius: 6,
  border: '1px solid var(--zoom-btn-border)',
  background: 'var(--zoom-btn-bg)',
  color: 'var(--zoom-btn-color)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: 14, fontWeight: 600, cursor: 'pointer',
  transition: 'background 0.15s, color 0.15s',
};

const ZoomToolbar: React.FC<ZoomToolbarProps> = ({ zoom, onZoomIn, onZoomOut, onReset, onExpand, extraRight }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
    <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--text-muted)', marginRight: 2 }}>
      ZOOM
    </span>
    <button style={btnStyle} onClick={onZoomOut} title="Zoom out"
      onMouseEnter={e => (e.currentTarget.style.background = 'var(--zoom-btn-hover)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'var(--zoom-btn-bg)')}>−</button>
    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'var(--text-primary)', minWidth: 36, textAlign: 'center' }}>
      {zoom}%
    </span>
    <button style={btnStyle} onClick={onZoomIn} title="Zoom in"
      onMouseEnter={e => (e.currentTarget.style.background = 'var(--zoom-btn-hover)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'var(--zoom-btn-bg)')}>+</button>

    <div style={{ width: 1, height: 18, background: 'var(--border)', margin: '0 4px' }}/>

    <button style={{ ...btnStyle, width: 'auto', padding: '0 8px', fontSize: 11, letterSpacing: '0.3px' }}
      onClick={onReset} title="Reset zoom"
      onMouseEnter={e => (e.currentTarget.style.background = 'var(--zoom-btn-hover)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'var(--zoom-btn-bg)')}>
      Reset
    </button>

    <div style={{ width: 1, height: 18, background: 'var(--border)', margin: '0 4px' }}/>

    <button style={{ ...btnStyle, fontSize: 12 }} onClick={onExpand} title="Expand chart"
      onMouseEnter={e => (e.currentTarget.style.background = 'var(--zoom-btn-hover)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'var(--zoom-btn-bg)')}>⤢</button>

    {extraRight}
  </div>
);

export default ZoomToolbar;
