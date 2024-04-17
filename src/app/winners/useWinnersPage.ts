import { useActions, useTypedSelector, useWinners } from '@/hooks';

export const useWinnersPage = () => {
  const { sortParam, sortOrder } = useTypedSelector((state) => state.winners);
  const { setSortParam, setSortOrder } = useActions();
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
