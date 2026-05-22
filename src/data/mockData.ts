import type { NavTab, SliderCard, GaugeData } from '../types';

export const NAV_TABS: NavTab[] = [
  { id: 'rig',     label: 'RIG NAME',     isActive: true },
  { id: 'well',    label: 'WELL NAME' },
  { id: 'section', label: 'SECTION NAME' },
  { id: 'mpd',     label: 'MPD ACTIVE',   isMpd: true },
];

export const GAUGE_DATA: GaugeData = {
  value: 0.75,
  min: -0.95,
  max: 0.95,
  flowRateExceeded: true,
  flowRateValue: '0.75',
};

export const SLIDER_CARDS: SliderCard[] = [
  {
    id: 'flow',
    label: 'FLOW (l/min)',
    badge: 'Steady Flow',
    statusColor: '#3b82f6',
    statusText: 'Flow Rate Limit Not Exceeded',
    value: 0.75,
    displayValue: '0.45',
    fillColor: '#3b82f6',
    active: true,
  },
  {
    id: 'spb',
    label: 'SPB (bar)',
    badge: 'Inactive',
    statusColor: '#6b7a90',
    statusText: 'No active signal',
    value: 0,
    displayValue: '',
    fillColor: '#6b7a90',
    active: false,
  },
  {
    id: 'hookload',
    label: 'HOOKLOAD (ton)',
    badge: 'Active Flow',
    statusColor: '#ef4444',
    statusText: 'Message For The Status Of The Flow',
    value: 0.75,
    displayValue: '0.45',
    fillColor: '#ef4444',
    active: true,
  },
  {
    id: 'torque',
    label: 'TORQUE (KN.m)',
    badge: 'Active Flow',
    statusColor: '#3b82f6',
    statusText: 'Message For The Status Of The Flow',
    value: 0.75,
    displayValue: '0.45',
    fillColor: '#3b82f6',
    active: true,
  },
];

// Cuttings chart paths
export const CUTTINGS_CURVE_PATH =
  'M110,2 C110,20 108,40 106,60 C102,100 100,130 105,160 C115,210 130,250 160,310 C190,370 220,430 250,500 C265,540 275,580 278,620 C279,640 279,650 279,660';

export const CUTTINGS_FILL_PATH =
  'M38,620 L38,660 L279,660 L279,620 C275,580 265,540 250,500 C220,430 190,370 160,310 C130,250 115,210 105,160 C100,130 102,100 106,60 C108,40 110,20 110,2 L38,2 Z';

export const CUTTINGS_X_TICKS = [
  { x: 38,  label: '0' },
  { x: 178, label: '45' },
  { x: 320, label: '90' },
];

// ECD chart paths
export const ECD_WELLBORE_PATH =
  'M200,0 L200,88 C240,88 270,110 285,132 C300,154 305,176 305,198 C305,220 305,242 305,264 C305,308 305,352 295,396 C290,418 285,440 285,484 C285,506 290,528 300,550 C310,572 315,594 318,616 C320,638 320,649 320,660 L340,660 L340,0 Z';

export const ECD_PORE_PATH =
  'M85,44 C83,88 82,132 82,176 C82,220 82,264 83,308 C84,352 85,396 87,440 C89,484 91,528 93,572 C95,616 97,638 98,660 L165,660 C163,638 162,616 161,572 C160,528 159,484 158,440 C157,396 156,352 155,308 C154,264 153,220 152,176 C151,132 150,88 148,44 Z';

export const ECD_SOLID_PATH =
  'M95,2 C95,10 95,20 95,44 C95,88 95,132 94,176 C93,220 92,264 91,308 C90,352 90,396 91,440 C92,484 93,528 95,572 C97,616 100,638 102,660';

export const ECD_DASHED_PATH =
  'M88,2 C88,10 88,20 88,44 C88,88 88,132 87,176 C86,220 85,264 84,308 C83,352 83,396 84,440 C85,484 87,528 89,572 C91,616 94,638 96,660';

export const ECD_X_TICKS = [
  { x: 38,  label: '1' },
  { x: 98,  label: '1.2' },
  { x: 158, label: '1.4' },
  { x: 218, label: '1.6' },
  { x: 278, label: '1.8' },
  { x: 338, label: '2' },
];

export const DEPTH_TICKS = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500];
