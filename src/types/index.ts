// Theme
export type Theme = 'light' | 'dark';

// Nav
export interface NavTab {
  id: string;
  label: string;
  isActive?: boolean;
  isMpd?: boolean;
}

// Safe Guides
export interface SliderCard {
  id: string;
  label: string;
  badge: string;
  statusColor: string;
  statusText: string;
  value: number;       // 0-1 percentage along -0.95…0.95
  displayValue: string;
  fillColor: string;
  active: boolean;
}

export interface GaugeData {
  value: number;       // m/s
  min: number;
  max: number;
  flowRateExceeded: boolean;
  flowRateValue: string;
}

// Chart zoom
export type ZoomLevel = 50 | 75 | 100 | 125 | 150 | 200 | 250 | 300;
export const ZOOM_STEPS: ZoomLevel[] = [50, 75, 100, 125, 150, 200, 250, 300];

// Modal
export type ModalChart = 'cuttings' | 'ecd' | null;
