import { useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { garageService } from '@/services/garage.service';
import { ICar } from '@/shared/types/car.types';
import { CARS_PAGE_LIMIT } from '@/shared/constants';

export const useCars = () => {
  const [page, setPage] = useState(1);

  const { data, isSuccess, isLoading, isFetching } = useQuery<{
    data: ICar[];
    totalCount: number;
  }>({
    queryKey: ['cars', page],
    queryFn: () => garageService.getCars(page, CARS_PAGE_LIMIT),
    placeholderData: keepPreviousData,
  });

  return {
    cars: data?.data || [],
    totalCount: data?.totalCount || 0,
    isLoading: isLoading || isFetching,
    isSuccess,
    page,
    setPage,
  };
};
