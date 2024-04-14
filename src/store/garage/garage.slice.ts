import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IGarageState } from './garage.interface';
import { COLOR_PRIMARY_500 } from '@/shared/styles/colors';

const initialState: IGarageState = {
  garagePageNumber: 1,
  updatingCarId: null,
  updatingCarName: null,
  updatingCarColor: COLOR_PRIMARY_500,
  creatingCarName: null,
  creatingCarColor: COLOR_PRIMARY_500,
};

export const garageSlice = createSlice({
  name: 'garage',
  initialState,
  reducers: {
    setGaragePageNumber: (state, action: PayloadAction<number>) => {
      state.garagePageNumber = action.payload;
    },

    setUpdatingCarId: (state, action: PayloadAction<string>) => {
      state.updatingCarId = action.payload;
    },
    setUpdatingCarName: (state, action: PayloadAction<string>) => {
      state.updatingCarName = action.payload;
    },
    setUpdatingCarColor: (state, action: PayloadAction<string>) => {
      state.updatingCarColor = action.payload;
    },

    setCreatingCarName: (state, action: PayloadAction<string>) => {
      state.creatingCarName = action.payload;
    },
    setCreatingCarColor: (state, action: PayloadAction<string>) => {
      state.creatingCarColor = action.payload;
    },

    clearCreatingCarStore: (state) => {
      state.creatingCarName = null;
      state.creatingCarColor = COLOR_PRIMARY_500;
    },

    clearUpdatingCarStore: (state) => {
      state.updatingCarId = null;
      state.updatingCarName = null;
      state.updatingCarColor = COLOR_PRIMARY_500;
    },
  },
});

export const {
  setGaragePageNumber,
  setUpdatingCarId,
  setUpdatingCarName,
  setUpdatingCarColor,
  setCreatingCarName,
  setCreatingCarColor,
  clearCreatingCarStore,
  clearUpdatingCarStore,
} = garageSlice.actions;
export const garageReducer = garageSlice.reducer;
