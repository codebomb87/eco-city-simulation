import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';
import AnalysisView from './components/Analysis/AnalysisView';
import PolicyPanel from './components/Policy/PolicyPanel';

const App: React.FC = () => {
  const activeView = useSelector((state: RootState) => state.ui.activeView);

  const renderActiveView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'analysis':
        return <AnalysisView />;
      case 'policy':
        return <PolicyPanel />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 text-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-6">
        {renderActiveView()}
      </main>
    </div>
  );
};

export default App; 