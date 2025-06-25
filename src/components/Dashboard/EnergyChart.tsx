import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface EnergyChartProps {
  type: 'consumption' | 'district' | 'performance';
}

const EnergyChart: React.FC<EnergyChartProps> = ({ type }) => {
  // 임시 데이터 생성
  const generateData = () => {
    const hours = Array.from({ length: 24 }, (_, i) => i);
    return hours.map(hour => ({
      time: `${hour}:00`,
      value: Math.random() * 100 + 50,
      secondary: Math.random() * 80 + 40,
    }));
  };

  const data = generateData();

  const getChartConfig = () => {
    switch (type) {
      case 'consumption':
        return {
          line1: { stroke: '#4ADE80', name: '소비량' },
          line2: { stroke: '#3B82F6', name: '생산량' },
        };
      case 'district':
        return {
          line1: { stroke: '#FACC15', name: '주거지역' },
          line2: { stroke: '#BD10E0', name: '상업지역' },
        };
      case 'performance':
        return {
          line1: { stroke: '#EF4444', name: '효율성' },
          line2: { stroke: '#10B981', name: '절약량' },
        };
      default:
        return {
          line1: { stroke: '#4ADE80', name: 'Line 1' },
          line2: { stroke: '#3B82F6', name: 'Line 2' },
        };
    }
  };

  const config = getChartConfig();

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="time" 
            stroke="#6B7280"
            fontSize={12}
          />
          <YAxis 
            stroke="#6B7280"
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#1F2937',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#F9FAFB',
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={config.line1.stroke}
            strokeWidth={2}
            dot={false}
            name={config.line1.name}
          />
          <Line
            type="monotone"
            dataKey="secondary"
            stroke={config.line2.stroke}
            strokeWidth={2}
            dot={false}
            name={config.line2.name}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnergyChart;