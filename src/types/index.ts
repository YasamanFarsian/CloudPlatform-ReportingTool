export type Theme = "light" | "dark";

export interface NavTab {
  id: string;
  label: string;
  isActive?: boolean;
  isMpd?: boolean;
}

export interface SliderCard {
  id: string;
  label: string;
  badge: string;
  statusColor: string;
  statusText: string;
  value: number;
  displayValue: string;
  fillColor: string;
  active: boolean;
}

export interface GaugeData {
  value: number;
  min: number;
  max: number;
  flowRateExceeded: boolean;
  flowRateValue: string;
}

export type ZoomLevel = 50 | 75 | 100 | 125 | 150 | 200 | 250 | 300;
export const ZOOM_STEPS: ZoomLevel[] = [50, 75, 100, 125, 150, 200, 250, 300];

export type ModalChart = "cuttings" | "ecd" | null;
