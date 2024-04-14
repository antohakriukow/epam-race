import { garageService } from '@/services/garage.service';
import { ICarDTO } from '@/shared/types/car.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateCar = () => {
  const queryClient = useQueryClient();

  const { mutate: createCar } = useMutation({
    mutationKey: ['create car'],
    mutationFn: (carData: ICarDTO) => garageService.createCar(carData),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['cars'],
      });
    },
  });

  return { createCar };
};
