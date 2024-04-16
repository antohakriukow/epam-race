import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EngineStatus, IEngineWithId } from '@/shared/types/engine.types';
import { IEngineState } from './engines.interface';

interface SetRaceDataPayload {
  id: string;
  velocity: number;
  distance: number;
}

const initialState: IEngineState = {
  engines: {},
};

export const enginesSlice = createSlice({
  name: 'engines',
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
    clearEnginesState: (state) => {
      Object.keys(state.engines).forEach((id) => {
        state.engines[id] = {
          status: EngineStatus.STOPPED,
          velocity: 0,
          distance: 0,
        };
      });
    },
  },
});

export const { setEngineStatus, setRaceData, clearEnginesState } =
  enginesSlice.actions;

export const enginesReducer = enginesSlice.reducer;
