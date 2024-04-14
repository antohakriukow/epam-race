import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTypedSelector } from '@/shared/hooks';
import { garageService } from '@/services/garage.service';
import { winnersService } from '@/services/winners.service';

export const useDeleteCar = () => {
  const { garagePageNumber } = useTypedSelector((state) => state.garage);
  const queryClient = useQueryClient();

  const { mutate: deleteCar } = useMutation({
    mutationKey: ['delete car'],
    mutationFn: (id: string) =>
      Promise.all([
        garageService.deleteCar(id),
        winnersService.deleteWinner(id),
      ]),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['cars', garagePageNumber],
      });
    },
  });

  return { deleteCar };
};
