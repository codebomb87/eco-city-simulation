import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { RootState } from '../../store/store';
import { setActiveView } from '../../store/slices/uiSlice';
import { toggleSimulation, resetSimulation } from '../../store/slices/simulationSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { activeView } = useSelector((state: RootState) => state.ui);
  const { isRunning, currentTime } = useSelector((state: RootState) => state.simulation);

  const handleViewChange = (view: 'dashboard' | 'analysis' | 'policy') => {
    dispatch(setActiveView(view));
  };

  const handleToggleSimulation = () => {
    dispatch(toggleSimulation());
  };

  const handleResetSimulation = () => {
    dispatch(resetSimulation());
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ko-KR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <header className="bg-dark-800 border-b border-dark-600 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* 앱 제목 */}
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold text-white">
            🌆 EcoCity Simulator
          </h1>
        </div>

        {/* 네비게이션 */}
        <nav className="flex space-x-4">
          <button
            onClick={() => handleViewChange('dashboard')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeView === 'dashboard'
                ? 'bg-energy-green text-white'
                : 'text-gray-300 hover:text-white hover:bg-dark-700'
            }`}
          >
            대시보드
          </button>
          <button
            onClick={() => handleViewChange('analysis')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeView === 'analysis'
                ? 'bg-energy-green text-white'
                : 'text-gray-300 hover:text-white hover:bg-dark-700'
            }`}
          >
            상세 분석
          </button>
          <button
            onClick={() => handleViewChange('policy')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeView === 'policy'
                ? 'bg-energy-green text-white'
                : 'text-gray-300 hover:text-white hover:bg-dark-700'
            }`}
          >
            정책 시뮬레이션
          </button>
        </nav>

        {/* 시뮬레이션 컨트롤 */}
        <div className="flex items-center space-x-4">
          <div className="bg-dark-700 px-4 py-2 rounded-lg flex items-center space-x-3">
            <span className="text-sm text-gray-300">시간:</span>
            <span className="text-white font-mono">⏱️ {formatTime(currentTime)}</span>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={handleToggleSimulation}
              className={`p-2 rounded-lg transition-colors ${
                isRunning
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-energy-green hover:bg-green-600 text-white'
              }`}
              title={isRunning ? '일시정지' : '시작'}
            >
              {isRunning ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <button
              onClick={handleResetSimulation}
              className="p-2 rounded-lg bg-dark-600 hover:bg-dark-500 text-gray-300 hover:text-white transition-colors"
              title="리셋"
            >
              <RotateCcw size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 