import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { winnersService } from '@/services/winners.service';
import { garageService } from '@/services/garage.service';
import { ICar } from '@/shared/types/car.types';
import { useState } from 'react';
import { CARS_PAGE_LIMIT } from '@/shared/constants';
import { calculateLastPageNumber } from '@/shared/utils/calculateLastPageNumber';

export const useWinners = () => {
  const [page, setPage] = useState(1);

  const { data, isSuccess, isLoading, isFetching } = useQuery<{
    data: ICar[];
    totalCount: number;
  }>({
    queryKey: ['winners', page],
    queryFn: async () => {
      const response = await winnersService.getWinners(
        page,
        CARS_PAGE_LIMIT,
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

  const lastPageNumber = calculateLastPageNumber(
    data?.totalCount || 0,
    CARS_PAGE_LIMIT,
  );

  return {
    winners: preparedWinners || [],
    lastPageNumber,
    isLoading: isLoading || isFetching,
    isSuccess,
    page,
    setPage,
  };
};
