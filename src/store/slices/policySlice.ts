import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EnergyPolicy, PolicyImpact } from '../../types';

interface PolicySliceState {
  policies: EnergyPolicy[];
  activePolicyId: string | null;
  policyImpacts: Record<string, PolicyImpact>;
  energyPrice: number;
}

const initialState: PolicySliceState = {
  policies: [],
  activePolicyId: null,
  policyImpacts: {},
  energyPrice: 15, // 기본 15원/kWh
};

const policySlice = createSlice({
  name: 'policy',
  initialState,
  reducers: {
    addPolicy: (state, action: PayloadAction<EnergyPolicy>) => {
      state.policies.push(action.payload);
    },
    removePolicy: (state, action: PayloadAction<string>) => {
      state.policies = state.policies.filter(p => p.id !== action.payload);
      delete state.policyImpacts[action.payload];
    },
    activatePolicy: (state, action: PayloadAction<string>) => {
      state.activePolicyId = action.payload;
      const policy = state.policies.find(p => p.id === action.payload);
      if (policy) {
        policy.isActive = true;
      }
    },
    deactivatePolicy: (state, action: PayloadAction<string>) => {
      const policy = state.policies.find(p => p.id === action.payload);
      if (policy) {
        policy.isActive = false;
      }
      if (state.activePolicyId === action.payload) {
        state.activePolicyId = null;
      }
    },
    setEnergyPrice: (state, action: PayloadAction<number>) => {
      state.energyPrice = action.payload;
    },
    updatePolicyImpact: (state, action: PayloadAction<PolicyImpact>) => {
      state.policyImpacts[action.payload.policyId] = action.payload;
    },
  },
});

export const {
  addPolicy,
  removePolicy,
  activatePolicy,
  deactivatePolicy,
  setEnergyPrice,
  updatePolicyImpact,
} = policySlice.actions;

export default policySlice.reducer; 