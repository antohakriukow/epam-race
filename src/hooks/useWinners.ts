import { useQuery } from '@tanstack/react-query';
import { useActions, useTypedSelector } from '@/hooks';
import { winnersService } from '@/services/winners.service';
import { garageService } from '@/services/garage.service';
import { ICar } from '@/shared/types/car.types';
import { WINNERS_PAGE_LIMIT } from '@/shared/constants';

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
      console.log('WINNERS: ', response);
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
