import React from 'react';

const AnalysisView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-header">
          <h2 className="text-xl font-semibold text-white">📊 상세 분석 대시보드</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">🕒 시간대별 에너지 사용량</h3>
            <div className="h-64 bg-dark-700 rounded flex items-center justify-center">
              <span className="text-gray-400">시간대별 차트 영역</span>
            </div>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">🏢 지역별 상세 분석</h3>
            <div className="h-64 bg-dark-700 rounded flex items-center justify-center">
              <span className="text-gray-400">지역별 차트 영역</span>
            </div>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">⚡ 에너지 효율성 비교</h3>
            <div className="h-64 bg-dark-700 rounded flex items-center justify-center">
              <span className="text-gray-400">효율성 차트 영역</span>
            </div>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">🔮 에너지 수요 예측</h3>
            <div className="h-64 bg-dark-700 rounded flex items-center justify-center">
              <span className="text-gray-400">예측 차트 영역</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisView; 