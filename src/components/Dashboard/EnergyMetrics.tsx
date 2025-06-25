import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { TrendingUp, TrendingDown, Zap, Factory } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: number;
  unit: string;
  change: number;
  color: 'green' | 'blue' | 'yellow' | 'red';
  icon: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, unit, change, color, icon }) => {
  const getColorClasses = () => {
    switch (color) {
      case 'green': return 'text-energy-green';
      case 'blue': return 'text-energy-blue';
      case 'yellow': return 'text-energy-yellow';
      case 'red': return 'text-energy-red';
      default: return 'text-gray-300';
    }
  };

  const formatValue = (val: number) => {
    if (val >= 1000) {
      return `${(val / 1000).toFixed(1)}k`;
    }
    return val.toFixed(1);
  };

  return (
    <div className="metric-card">
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-lg bg-opacity-20 ${getColorClasses()}`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="text-sm text-gray-300">{title}</div>
          <div className={`text-lg font-bold ${getColorClasses()}`}>
            {formatValue(value)} {unit}
          </div>
        </div>
      </div>
      <div className="flex items-center mt-2">
        {change >= 0 ? (
          <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
        ) : (
          <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
        )}
        <span className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {Math.abs(change).toFixed(1)}%
        </span>
      </div>
    </div>
  );
};

const EnergyMetrics: React.FC = () => {
  const { totalConsumption, totalProduction, efficiency, co2Emission } = useSelector(
    (state: RootState) => state.simulation
  );

  // 이전 값과 비교를 위한 임시 변화율 계산 (실제로는 historicalData에서 계산)
  const getChangeRate = (current: number) => {
    return (Math.random() - 0.5) * 10; // -5% ~ +5% 임시 값
  };

  const metrics = [
    {
      title: '총 소비량',
      value: totalConsumption,
      unit: 'MWh',
      change: getChangeRate(totalConsumption),
      color: 'green' as const,
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: '총 생산량',
      value: totalProduction,
      unit: 'MWh',
      change: getChangeRate(totalProduction),
      color: 'blue' as const,
      icon: <Factory className="w-5 h-5" />,
    },
    {
      title: '효율성',
      value: efficiency,
      unit: '%',
      change: getChangeRate(efficiency),
      color: 'yellow' as const,
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      title: 'CO₂ 배출량',
      value: co2Emission,
      unit: '톤',
      change: getChangeRate(co2Emission),
      color: 'red' as const,
      icon: <Factory className="w-5 h-5" />,
    },
  ];

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="text-lg font-semibold text-white flex items-center">
          ⚡ 실시간 에너지 지표
        </h3>
      </div>
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            unit={metric.unit}
            change={metric.change}
            color={metric.color}
            icon={metric.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default EnergyMetrics; 