import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { winnersService } from '@/services/winners.service';
import { garageService } from '@/services/garage.service';
import { ICar } from '@/shared/types/car.types';
import { WINNERS_PAGE_LIMIT } from '@/shared/constants';
import { useTypedSelector } from '@/shared/hooks/useTypedSelector';
import { useActions } from '@/shared/hooks/useActions';

export const useWinners = () => {
  const { winnersPageNumber } = useTypedSelector((state) => state.winners);
  const { setWinnersPageNumber } = useActions();

  const { data, isSuccess, isLoading, isFetching } = useQuery<{
    data: ICar[];
    totalCount: number;
  }>({
    queryKey: ['winners', winnersPageNumber],
    queryFn: async () => {
      const response = await winnersService.getWinners(
        winnersPageNumber,
        WINNERS_PAGE_LIMIT,
        'wins',
        'DESC',
      );
      const updatedWinners = await Promise.all(
        response.data.map(async (winner) => {
          const carData = await garageService.getCar(winner.id);
          return { ...winner, color: carData.color, name: carData.name };
        }),
      );
      return { data: updatedWinners, totalCount: response.totalCount };
    },
    placeholderData: keepPreviousData,
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
