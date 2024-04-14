import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTypedSelector } from '@/shared/hooks';
import { garageService } from '@/services/garage.service';

export const useDeleteCar = () => {
  const { garagePageNumber } = useTypedSelector((state) => state.garage);
  const queryClient = useQueryClient();

  const { mutate: deleteCar } = useMutation({
    mutationKey: ['delete car'],
    mutationFn: (id: string) => garageService.deleteCar(id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['cars', garagePageNumber],
      });
    },
  });

  return { deleteCar };
};
