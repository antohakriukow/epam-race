import { useMutation, useQueryClient } from '@tanstack/react-query';
import { winnersService } from '@/services/winners.service';
import { ICar } from '@/shared/types/car.types';
import { calculateRaceResult } from '@/shared/utils/calculateTime';

export const useCreateWinner = () => {
  const queryClient = useQueryClient();

  const { mutate: createWinner } = useMutation({
    mutationKey: ['create winner'],
    mutationFn: async (winner: ICar) => {
      const newTime = calculateRaceResult(winner);
      const existingWinners = await winnersService.getWinners();
      const currentWinnerInDb =
        existingWinners.data.find(
          (winnerInDB) => winnerInDB.id === winner.id,
        ) ?? null;

      const winnerDTO = {
        id: winner.id,
        time: currentWinnerInDb
          ? Math.min(currentWinnerInDb.time!, newTime)
          : newTime,
        wins: currentWinnerInDb ? currentWinnerInDb.wins! + 1 : 1,
      };

      const result = currentWinnerInDb
        ? winnersService.updateWinner(winnerDTO)
        : winnersService.createWinner(winnerDTO);

      return result;
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['winners'],
      });
    },
  });

  return createWinner;
};
