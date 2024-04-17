import { useState } from 'react';
import { SortOrder, SortParam } from './types';
import { useWinners } from '@/hooks';

export const useWinnersPage = () => {
  const [sortParam, setSortParam] = useState<SortParam>(() => SortParam.WINS);
  const [sortOrder, setSortOrder] = useState<SortOrder>(() => SortOrder.DESC);
  const headerTitles = ['№', 'car', 'name', 'wins', 'best time (seconds)'];

  const {
    winners,
    isLoading,
    isSuccess,
    page,
    totalCount = 0,
    setPage,
  } = useWinners(sortParam, sortOrder);

  return {
    headerTitles,

    winners,
    isLoading,
    isSuccess,
    page,
    totalCount,
    setPage,

    sortParam,
    sortOrder,
    setSortParam,
    setSortOrder,
  };
};
