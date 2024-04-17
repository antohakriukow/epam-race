import { useMutation, useQueryClient } from '@tanstack/react-query';
import { garageService } from '@/services/garage.service';
import { getRandomCarsArray } from '@/shared/utils/getRandomCarsArray';

export const useGenerateCars = () => {
  const queryClient = useQueryClient();

  const { mutate: generateCars } = useMutation({
    mutationKey: ['generate cars'],
    mutationFn: () =>
      Promise.all(
        getRandomCarsArray().map((car) => garageService.createCar(car)),
      ),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['cars'],
      });
    },
  });

  return { generateCars };
};
