import { garageService } from '@/services/garage.service';
import { useTypedSelector } from '@/shared/hooks/useTypedSelector';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteCar = () => {
  const { garagePageNumber } = useTypedSelector((state) => state.garage);
  const queryClient = useQueryClient();

  const { mutate: deleteCar, isPending: isDeletePending } = useMutation({
    mutationKey: ['delete car'],
    mutationFn: (id: string) => garageService.deleteCar(id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['cars', garagePageNumber],
      });
    },
  });

  return { deleteCar, isDeletePending };
};
