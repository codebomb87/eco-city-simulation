import React from 'react';

const ScenarioPanel: React.FC = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="text-lg font-semibold text-white">📊 시나리오 비교</h3>
      </div>
      <div className="space-y-3">
        <button className="btn-primary w-full">기본 시나리오</button>
        <button className="btn-secondary w-full">에너지 절약 시나리오</button>
        <button className="btn-secondary w-full">재생에너지 확대</button>
      </div>
    </div>
  );
};

export default ScenarioPanel; 