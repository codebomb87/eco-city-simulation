import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimulationState, ChartData } from '../../types';

interface SimulationSliceState extends SimulationState {
  historicalData: ChartData[];
}

const initialState: SimulationSliceState = {
  isRunning: false,
  speed: 1,
  currentTime: new Date(),
  totalConsumption: 1247,
  totalProduction: 1356,
  efficiency: 92,
  co2Emission: 542,
  historicalData: [],
};

const simulationSlice = createSlice({
  name: 'simulation',
  initialState,
  reducers: {
    toggleSimulation: (state) => {
      state.isRunning = !state.isRunning;
    },
    setSpeed: (state, action: PayloadAction<number>) => {
      state.speed = action.payload;
    },
    updateTime: (state, action: PayloadAction<Date>) => {
      state.currentTime = action.payload;
    },
    updateMetrics: (state, action: PayloadAction<{
      consumption: number;
      production: number;
      efficiency: number;
      co2Emission: number;
    }>) => {
      state.totalConsumption = action.payload.consumption;
      state.totalProduction = action.payload.production;
      state.efficiency = action.payload.efficiency;
      state.co2Emission = action.payload.co2Emission;
    },
    addHistoricalData: (state, action: PayloadAction<ChartData>) => {
      state.historicalData.push(action.payload);
      // 최근 100개 데이터만 유지
      if (state.historicalData.length > 100) {
        state.historicalData.shift();
      }
    },
    resetSimulation: (state) => {
      state.isRunning = false;
      state.speed = 1;
      state.currentTime = new Date();
      state.historicalData = [];
    },
  },
});

export const {
  toggleSimulation,
  setSpeed,
  updateTime,
  updateMetrics,
  addHistoricalData,
  resetSimulation,
} = simulationSlice.actions;

export default simulationSlice.reducer; 