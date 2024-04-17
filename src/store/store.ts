import { configureStore } from '@reduxjs/toolkit';
import { raceReducer } from './race/race.slice';
import { garageReducer } from './garage/garage.slice';
import { winnersReducer } from './winners/winners.slice';

export const store = configureStore({
  reducer: {
    race: raceReducer,
    garage: garageReducer,
    winners: winnersReducer,
  },
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
