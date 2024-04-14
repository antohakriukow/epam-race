import { garageReducer } from './garage/garage.slice';
import { configureStore } from '@reduxjs/toolkit';
import { winnersReducer } from './winners/winners.slice';

export const store = configureStore({
  reducer: {
    garage: garageReducer,
    winners: winnersReducer,
  },
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
