import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EnvironmentalConditions } from '../../types';

const initialState: EnvironmentalConditions = {
  timestamp: new Date(),
  temperature: 22,
  humidity: 65,
  sunlight: 75,
  windSpeed: 12,
  season: 'summer',
};

const environmentSlice = createSlice({
  name: 'environment',
  initialState,
  reducers: {
    setTemperature: (state, action: PayloadAction<number>) => {
      state.temperature = action.payload;
    },
    setHumidity: (state, action: PayloadAction<number>) => {
      state.humidity = action.payload;
    },
    setSunlight: (state, action: PayloadAction<number>) => {
      state.sunlight = action.payload;
    },
    setWindSpeed: (state, action: PayloadAction<number>) => {
      state.windSpeed = action.payload;
    },
    setSeason: (state, action: PayloadAction<EnvironmentalConditions['season']>) => {
      state.season = action.payload;
    },
    updateEnvironment: (state, action: PayloadAction<Partial<EnvironmentalConditions>>) => {
      Object.assign(state, action.payload);
      state.timestamp = new Date();
    },
  },
});

export const {
  setTemperature,
  setHumidity,
  setSunlight,
  setWindSpeed,
  setSeason,
  updateEnvironment,
} = environmentSlice.actions;

export default environmentSlice.reducer; 