import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CityStructure, District, Building } from '../../types';

interface CitySliceState {
  city: CityStructure | null;
  selectedDistrict: string | null;
  selectedBuilding: string | null;
}

const initialState: CitySliceState = {
  city: null,
  selectedDistrict: null,
  selectedBuilding: null,
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCityData: (state, action: PayloadAction<CityStructure>) => {
      state.city = action.payload;
    },
    selectDistrict: (state, action: PayloadAction<string | null>) => {
      state.selectedDistrict = action.payload;
      state.selectedBuilding = null; // 지역 변경 시 건물 선택 해제
    },
    selectBuilding: (state, action: PayloadAction<string | null>) => {
      state.selectedBuilding = action.payload;
    },
    updateBuildingConsumption: (state, action: PayloadAction<{
      buildingId: string;
      consumption: number;
    }>) => {
      if (!state.city) return;
      
      for (const district of state.city.districts) {
        const building = district.buildings.find(b => b.id === action.payload.buildingId);
        if (building) {
          building.baseConsumption = action.payload.consumption;
          break;
        }
      }
    },
  },
});

export const {
  setCityData,
  selectDistrict,
  selectBuilding,
  updateBuildingConsumption,
} = citySlice.actions;

export default citySlice.reducer; 