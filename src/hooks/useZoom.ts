import { useState, useRef, useEffect } from 'react';
import { ZOOM_STEPS } from '../types';
import type { ZoomLevel } from '../types';

export function useZoom(scrollRef: React.RefObject<HTMLDivElement | null>, svgRef: React.RefObject<SVGSVGElement | null>) {
  const [zoomIdx, setZoomIdx] = useState<number>(ZOOM_STEPS.indexOf(100));
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const currentZoom: ZoomLevel = ZOOM_STEPS[zoomIdx];

  function applyZoom(idx: number) {
    const z = ZOOM_STEPS[idx];
    const pct = z / 100;
    const svg = svgRef.current;
    const wrap = wrapRef.current;
    const scroll = scrollRef.current;
    if (!svg || !wrap || !scroll) return;

    if (z === 100) {
      svg.style.width = '100%';
      svg.style.height = '100%';
      scroll.style.minWidth = '';
      scroll.style.minHeight = '';
    } else {
      const baseW = wrap.clientWidth || 400;
      const baseH = wrap.clientHeight || 600;
      const w = Math.round(baseW * pct);
      const h = Math.round(baseH * pct);
      svg.style.width = `${w}px`;
      svg.style.height = `${h}px`;
      scroll.style.minWidth = `${w + 30}px`;
      scroll.style.minHeight = `${h + 30}px`;
    }
  }

  useEffect(() => {
    applyZoom(zoomIdx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoomIdx]);

  function zoomIn() {
    setZoomIdx(i => {
      const next = Math.min(i + 1, ZOOM_STEPS.length - 1);
      setTimeout(() => applyZoom(next), 0);
      return next;
    });
  }

  function zoomOut() {
    setZoomIdx(i => {
      const next = Math.max(i - 1, 0);
      setTimeout(() => applyZoom(next), 0);
      return next;
    });
  }

  function reset() {
    const defaultIdx = ZOOM_STEPS.indexOf(100);
    setZoomIdx(defaultIdx);
    setTimeout(() => applyZoom(defaultIdx), 0);
  }

  // Ctrl+scroll wheel zoom
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        if (e.deltaY < 0) zoomIn(); else zoomOut();
      }
    };
    el.addEventListener('wheel', handler, { passive: false });
    return () => el.removeEventListener('wheel', handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollRef.current]);

  return { currentZoom, wrapRef, zoomIn, zoomOut, reset };
}
