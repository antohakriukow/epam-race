import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IWinnersState } from './winners.interface';
import { SortOrder, SortParam } from '@/shared/types/winners-page.types';

const initialState: IWinnersState = {
  winnersPageNumber: 1,
  sortParam: SortParam.WINS,
  sortOrder: SortOrder.DESC,
};

export const winnersSlice = createSlice({
  name: 'winners',
  initialState,
  reducers: {
    setWinnersPageNumber: (state, action: PayloadAction<number>) => {
      state.winnersPageNumber = action.payload;
    },
    setSortParam: (state, action: PayloadAction<SortParam>) => {
      state.sortParam = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<SortOrder>) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { setWinnersPageNumber, setSortParam, setSortOrder } =
  winnersSlice.actions;
export const winnersReducer = winnersSlice.reducer;
