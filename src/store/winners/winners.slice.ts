import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IWinnersState } from './winners.interface';

const initialState: IWinnersState = {
  winnersPageNumber: 1,
};

export const winnersSlice = createSlice({
  name: 'winners',
  initialState,
  reducers: {
    setWinnersPageNumber: (state, action: PayloadAction<number>) => {
      state.winnersPageNumber = action.payload;
    },
  },
});

export const { setWinnersPageNumber } = winnersSlice.actions;
export const winnersReducer = winnersSlice.reducer;
