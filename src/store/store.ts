import { configureStore } from '@reduxjs/toolkit';
import { garageReducer } from './garage/garage.slice';
import { winnersReducer } from './winners/winners.slice';
import { enginesReducer } from './engines/engines.slice';

export const store = configureStore({
  reducer: {
    engines: enginesReducer,
    garage: garageReducer,
    winners: winnersReducer,
  },
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
