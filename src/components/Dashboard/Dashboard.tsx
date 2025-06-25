import React from 'react';
import CityVisualization from './CityVisualization';
import EnergyMetrics from './EnergyMetrics';
import EnvironmentControls from './EnvironmentControls';
import ScenarioPanel from './ScenarioPanel';
import EnergyChart from './EnergyChart';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* 3D 도시 뷰 */}
      <div className="col-span-8">
        <div className="card h-[600px]">
          <div className="card-header">
            <h2 className="text-xl font-semibold text-white flex items-center">
              🏙️ 3D 도시 시각화
            </h2>
          </div>
          <CityVisualization />
        </div>
      </div>

      {/* 우측 패널 */}
      <div className="col-span-4 space-y-6">
        {/* 실시간 에너지 지표 */}
        <EnergyMetrics />
        
        {/* 환경 제어 */}
        <EnvironmentControls />
        
        {/* 시나리오 비교 */}
        <ScenarioPanel />
      </div>

      {/* 하단 차트 영역 */}
      <div className="col-span-12">
        <div className="grid grid-cols-3 gap-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-white flex items-center">
                📈 에너지 소비 추이
              </h3>
            </div>
            <EnergyChart type="consumption" />
          </div>
          
          <div className="card">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-white flex items-center">
                🏢 지역별 분석
              </h3>
            </div>
            <EnergyChart type="district" />
          </div>
          
          <div className="card">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-white flex items-center">
                ⚡ 성능 지표
              </h3>
            </div>
            <EnergyChart type="performance" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 