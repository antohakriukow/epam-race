import { SortOrder, SortParam } from '@/shared/types/winners-page.types';

export interface IWinnersState {
  winnersPageNumber: number;
  sortParam: SortParam;
  sortOrder: SortOrder;
}
