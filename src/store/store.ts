import { configureStore } from '@reduxjs/toolkit';
import simulationReducer from './slices/simulationSlice';
import cityReducer from './slices/citySlice';
import environmentReducer from './slices/environmentSlice';
import policyReducer from './slices/policySlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    simulation: simulationReducer,
    city: cityReducer,
    environment: environmentReducer,
    policy: policyReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 