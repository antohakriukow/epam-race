import { garageService } from '@/services/garage.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteCar = (page: number) => {
  const queryClient = useQueryClient();

  const { mutate: deleteCar, isPending: isDeletePending } = useMutation({
    mutationKey: ['delete car'],
    mutationFn: (id: string) => garageService.deleteCar(id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['cars', page],
      });
    },
  });

  return { deleteCar, isDeletePending };
};
