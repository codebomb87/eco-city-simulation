import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setEnergyPrice } from '../../store/slices/policySlice';

const PolicyPanel: React.FC = () => {
  const dispatch = useDispatch();
  const { energyPrice } = useSelector((state: RootState) => state.policy);

  const handleEnergyPriceChange = (value: number) => {
    dispatch(setEnergyPrice(value));
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* 정책 설정 */}
      <div className="card">
        <div className="card-header">
          <h2 className="text-xl font-semibold text-white">⚙️ 정책 설정</h2>
        </div>
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">🎛️ 정책 설정</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-2">💰 에너지 요금 정책</label>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-400">15원/kWh →</span>
                  <input
                    type="range"
                    min="10"
                    max="30"
                    value={energyPrice}
                    onChange={(e) => handleEnergyPriceChange(Number(e.target.value))}
                    className="slider flex-1"
                  />
                  <span className="text-sm font-mono text-green-400">{energyPrice}원/kWh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 효과 분석 */}
      <div className="card">
        <div className="card-header">
          <h2 className="text-xl font-semibold text-white">📈 효과 분석</h2>
        </div>
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">📈 효과 분석</h3>
            <div className="space-y-3">
              <div className="metric-card">
                <div className="flex justify-between">
                  <span className="text-gray-300">정책 영향도</span>
                </div>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">소비량 감소</span>
                    <span className="text-green-400">8.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">CO₂ 감소</span>
                    <span className="text-green-400">12.1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">효율성</span>
                    <span className="text-green-400">+5.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">절약 (월)</span>
                    <span className="text-green-400">2,400만원</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyPanel; 