// 도시 구조 관련 타입
export interface CityStructure {
  id: string;
  name: string;
  districts: District[];
  energySources: EnergySource[];
  infrastructure: Infrastructure[];
}

export interface District {
  id: string;
  type: 'residential' | 'commercial' | 'industrial' | 'public';
  buildings: Building[];
  population: number;
  area: number;
  coordinates: { x: number; y: number };
}

export interface Building {
  id: string;
  type: string;
  energyEfficiency: number;
  baseConsumption: number;
  coordinates: { x: number; y: number; z: number };
  name: string;
  capacity: number;
}

export interface EnergySource {
  id: string;
  type: 'coal' | 'gas' | 'nuclear' | 'solar' | 'wind' | 'hydro';
  capacity: number;
  currentOutput: number;
  efficiency: number;
  coordinates: { x: number; y: number; z: number };
  name: string;
}

export interface Infrastructure {
  id: string;
  type: 'road' | 'powerline' | 'subway' | 'water' | 'gas';
  coordinates: { x: number; y: number; z: number }[];
  capacity: number;
  usage: number;
}

// 에너지 데이터 관련 타입
export interface EnergyConsumption {
  timestamp: Date;
  buildingId: string;
  consumption: number;
  source: 'grid' | 'solar' | 'wind' | 'other';
  efficiency: number;
}

export interface EnergyProduction {
  timestamp: Date;
  sourceId: string;
  production: number;
  type: 'coal' | 'gas' | 'nuclear' | 'solar' | 'wind' | 'hydro';
  cost: number;
  co2Emission: number;
}

// 환경 데이터 관련 타입
export interface EnvironmentalConditions {
  timestamp: Date;
  temperature: number;
  humidity: number;
  sunlight: number;
  windSpeed: number;
  season: 'spring' | 'summer' | 'autumn' | 'winter';
}

// 정책 관련 타입
export interface EnergyPolicy {
  id: string;
  name: string;
  type: 'pricing' | 'renewable' | 'efficiency' | 'campaign';
  parameters: Record<string, number>;
  isActive: boolean;
  startDate: Date;
  endDate?: Date;
}

export interface PolicyImpact {
  policyId: string;
  consumptionChange: number;
  co2Change: number;
  costChange: number;
  efficiencyChange: number;
  timeline: { date: Date; value: number }[];
}

// 시뮬레이션 상태 관련 타입
export interface SimulationState {
  isRunning: boolean;
  speed: number; // 1x, 2x, 4x 등
  currentTime: Date;
  totalConsumption: number;
  totalProduction: number;
  efficiency: number;
  co2Emission: number;
}

// 대시보드 관련 타입
export interface MetricCard {
  id: string;
  title: string;
  value: number;
  unit: string;
  change: number;
  color: 'green' | 'blue' | 'yellow' | 'red';
  icon: string;
}

export interface ChartData {
  timestamp: Date;
  consumption: number;
  production: number;
  efficiency: number;
  co2: number;
}

// UI 상태 관련 타입
export interface UIState {
  activeView: 'dashboard' | 'analysis' | 'policy';
  selectedDistrict?: string;
  selectedBuilding?: string;
  timeRange: {
    start: Date;
    end: Date;
  };
  filters: {
    districtType?: District['type'];
    energySource?: EnergySource['type'];
  };
} 