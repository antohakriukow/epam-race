import { useQuery } from '@tanstack/react-query';
import { winnersService } from '@/services/winners.service';
import { garageService } from '@/services/garage.service';
import { ICar } from '@/shared/types/car.types';

export const useWinners = () => {
  const { data, isSuccess } = useQuery<ICar[]>({
    queryKey: ['winners'],
    queryFn: async () => {
      const winners = await winnersService.getWinners();
      const updatedWinners = await Promise.all(
        winners.map(async (winner) => {
          const carData = await garageService.getCar(winner.id);
          return { ...winner, color: carData.color, name: carData.name };
        }),
      );
      return updatedWinners;
    },
  });

  const preparedWinners = data?.map((winner) => ({
    id: winner.id,
    color: winner.color,
    name: winner.name ?? 'no name',
    wins: winner.wins,
    time: winner.time,
  }));

  return {
    winners: preparedWinners,
    isLoading: !isSuccess && !data,
    isSuccess,
  };
};
