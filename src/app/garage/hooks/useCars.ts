import { garageService } from '@/services/garage.service';
import { ICar } from '@/shared/types/car.types';
import { useQuery } from '@tanstack/react-query';

export const useCars = () => {
  const { data, isSuccess } = useQuery<ICar[]>({
    queryKey: ['cars'],
    queryFn: () => garageService.getCars(),
  });

  return {
    cars: data,
    isLoading: !isSuccess && !data,
    isSuccess,
  };
};
