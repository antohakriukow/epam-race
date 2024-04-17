import { SortOrder, SortParam } from '@/shared/types/winners-page.types';
import { useQuery } from '@tanstack/react-query';
import { useActions, useTypedSelector } from '@/hooks';
import { winnersService } from '@/services/winners.service';
import { garageService } from '@/services/garage.service';
import { ICar } from '@/shared/types/car.types';
import { WINNERS_PAGE_LIMIT } from '@/shared/constants';

export const useWinners = (sortParam: SortParam, sortOrder: SortOrder) => {
  const { winnersPageNumber } = useTypedSelector((state) => state.winners);
  const { setWinnersPageNumber } = useActions();

  const { data, isSuccess, isLoading, isFetching } = useQuery<{
    data: ICar[];
    totalCount: number;
  }>({
    queryKey: ['winners', winnersPageNumber, sortParam, sortOrder],
    queryFn: async () => {
      const response = await winnersService.getWinners(
        winnersPageNumber,
        WINNERS_PAGE_LIMIT,
        sortParam,
        sortOrder,
      );
      const updatedWinners = await Promise.all(
        response.data.map(async (winner) => {
          const carData = await garageService.getCar(winner.id);
          return { ...winner, color: carData.color, name: carData.name };
        }),
      );
      return { data: updatedWinners, totalCount: response.totalCount };
    },
  });

  const preparedWinners = data?.data?.map((winner) => ({
    id: winner.id,
    color: winner.color,
    name: winner.name ?? 'no name',
    wins: winner.wins,
    time: winner.time,
  }));

  return {
    winners: preparedWinners || [],
    totalCount: data?.totalCount,
    isLoading: isLoading || isFetching,
    isSuccess,
    page: winnersPageNumber,
    setPage: setWinnersPageNumber,
  };
};
