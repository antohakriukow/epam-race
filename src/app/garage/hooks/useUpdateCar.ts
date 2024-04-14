import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ICarDTO } from '@/shared/types/car.types';
import { garageService } from '@/services/garage.service';

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
