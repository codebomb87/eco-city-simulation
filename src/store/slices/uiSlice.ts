import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UIState } from '../../types';

const initialState: UIState = {
  activeView: 'dashboard',
  selectedDistrict: undefined,
  selectedBuilding: undefined,
  timeRange: {
    start: new Date(Date.now() - 24 * 60 * 60 * 1000), // 24시간 전
    end: new Date(),
  },
  filters: {},
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveView: (state, action: PayloadAction<UIState['activeView']>) => {
      state.activeView = action.payload;
    },
    setSelectedDistrict: (state, action: PayloadAction<string | undefined>) => {
      state.selectedDistrict = action.payload;
    },
    setSelectedBuilding: (state, action: PayloadAction<string | undefined>) => {
      state.selectedBuilding = action.payload;
    },
    setTimeRange: (state, action: PayloadAction<{ start: Date; end: Date }>) => {
      state.timeRange = action.payload;
    },
    setFilters: (state, action: PayloadAction<Partial<UIState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = {};
    },
  },
});

export const {
  setActiveView,
  setSelectedDistrict,
  setSelectedBuilding,
  setTimeRange,
  setFilters,
  clearFilters,
} = uiSlice.actions;

export default uiSlice.reducer; 