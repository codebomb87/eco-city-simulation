import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setTemperature, setSunlight, setWindSpeed } from '../../store/slices/environmentSlice';

const EnvironmentControls: React.FC = () => {
  const dispatch = useDispatch();
  const environment = useSelector((state: RootState) => state.environment);

  const handleTemperatureChange = (value: number) => {
    dispatch(setTemperature(value));
  };

  const handleSunlightChange = (value: number) => {
    dispatch(setSunlight(value));
  };

  const handleWindSpeedChange = (value: number) => {
    dispatch(setWindSpeed(value));
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="text-lg font-semibold text-white flex items-center">
          🌤️ 환경 제어
        </h3>
      </div>
      <div className="space-y-4">
        {/* 온도 제어 */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm text-gray-300">온도</label>
            <span className="text-orange-400 font-mono">{environment.temperature}°C</span>
          </div>
          <input
            type="range"
            min="-10"
            max="40"
            value={environment.temperature}
            onChange={(e) => handleTemperatureChange(Number(e.target.value))}
            className="slider"
          />
        </div>

        {/* 일조량 제어 */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm text-gray-300">일조량</label>
            <span className="text-yellow-400 font-mono">{environment.sunlight}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={environment.sunlight}
            onChange={(e) => handleSunlightChange(Number(e.target.value))}
            className="slider"
          />
        </div>

        {/* 풍속 제어 */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm text-gray-300">풍속</label>
            <span className="text-blue-400 font-mono">{environment.windSpeed}m/s</span>
          </div>
          <input
            type="range"
            min="0"
            max="30"
            value={environment.windSpeed}
            onChange={(e) => handleWindSpeedChange(Number(e.target.value))}
            className="slider"
          />
        </div>
      </div>
    </div>
  );
};

export default EnvironmentControls; 