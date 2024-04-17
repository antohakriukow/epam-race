import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EngineStatus, IEngineWithId } from '@/shared/types/engine.types';
import { IRaceState } from './race.interface';
import { ICar } from '@/shared/types/car.types';

interface SetRaceDataPayload {
  id: string;
  velocity: number;
  distance: number;
}

const initialState: IRaceState = {
  engines: {},
  winner: null,
};

export const raceSlice = createSlice({
  name: 'race',
  initialState,
  reducers: {
    setEngineStatus: (state, action: PayloadAction<IEngineWithId>) => {
      const { id, status } = action.payload;
      if (!state.engines[id]) {
        state.engines[id] = {
          status: EngineStatus.STOPPED,
          velocity: 0,
          distance: 0,
        };
      }
      state.engines[id].status = status;
    },
    setRaceData: (state, action: PayloadAction<SetRaceDataPayload>) => {
      const { id, velocity, distance } = action.payload;
      if (!state.engines[id]) {
        state.engines[id] = {
          status: EngineStatus.STOPPED,
          velocity: 0,
          distance: 0,
        };
      }
      state.engines[id].velocity = velocity;
      state.engines[id].distance = distance;
    },

    setWinner: (state, action: PayloadAction<ICar | null>) => {
      state.winner = action.payload;
      if (action.payload) {
        const { id } = action.payload;
        state.winner!.velocity = state.engines[id]?.velocity;
        state.winner!.distance = state.engines[id]?.distance;
      }
    },

    clearRaceState: (state) => {
      Object.keys(state.engines).forEach((id) => {
        state.engines[id] = {
          status: EngineStatus.STOPPED,
          velocity: 0,
          distance: 0,
        };
      });
      state.winner = null;
    },
  },
});

export const { setEngineStatus, setRaceData, clearRaceState, setWinner } =
  raceSlice.actions;

export const raceReducer = raceSlice.reducer;
