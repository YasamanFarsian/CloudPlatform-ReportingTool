import React from 'react';
import { DEPTH_TICKS } from '../data/mockData';

interface ChartGridProps {
  svgWidth: number;
  isDark: boolean;
}

const Y_SCALE = 660 / 1500;

const ChartGrid: React.FC<ChartGridProps> = ({ svgWidth, isDark }) => {
  const lineColor = isDark ? '#1f2937' : '#eef0f4';
  return (
    <g fontFamily="DM Mono" fontSize={9} fill="var(--axis-text)">
      {DEPTH_TICKS.map(d => {
        const y = d * Y_SCALE;
        return (
          <g key={d}>
            <line x1={38} y1={y} x2={svgWidth} y2={y} stroke={lineColor} strokeWidth={0.7}/>
            <text x={34} y={y + 3} textAnchor="end">{d}</text>
          </g>
        );
      })}
    </g>
  );
};

export default ChartGrid;
