import { garageService } from '@/services/garage.service';
import { ICarDTO } from '@/shared/types/car.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUpdateCar = () => {
  const queryClient = useQueryClient();

  const { mutate: updateCar } = useMutation({
    mutationKey: ['update car'],
    mutationFn: ({ id, carData }: { id: string; carData: ICarDTO }) =>
      garageService.updateCar(id, carData),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['cars'],
      });
    },
  });

  return { updateCar };
};
