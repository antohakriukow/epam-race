import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { garageService } from '@/services/garage.service';
import { ICar } from '@/shared/types/car.types';
import { GARAGE_PAGE_LIMIT } from '@/shared/constants';
import { useTypedSelector } from '@/shared/hooks/useTypedSelector';
import { useActions } from '@/shared/hooks/useActions';

export const useCars = () => {
  const { garagePageNumber } = useTypedSelector((state) => state.garage);
  const { setGaragePageNumber } = useActions();

  const { data, isSuccess, isLoading, isFetching } = useQuery<{
    data: ICar[];
    totalCount: number;
  }>({
    queryKey: ['cars', garagePageNumber],
    queryFn: () => garageService.getCars(garagePageNumber, GARAGE_PAGE_LIMIT),
    placeholderData: keepPreviousData,
  });

  return {
    cars: data?.data || [],
    totalCount: data?.totalCount || 0,
    isLoading: isLoading || isFetching,
    isSuccess,
    page: garagePageNumber,
    setPage: setGaragePageNumber,
  };
};
