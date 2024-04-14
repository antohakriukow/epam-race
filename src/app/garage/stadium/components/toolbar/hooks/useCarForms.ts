import { useCreateCar, useUpdateCar } from '@/app/garage/hooks';
import { useActions, useTypedSelector } from '@/shared/hooks';

export const useCarForms = () => {
  const { createCar } = useCreateCar();
  const { updateCar } = useUpdateCar();
  const {
    setCreatingCarColor,
    setCreatingCarName,
    clearCreatingCarStore,
    setUpdatingCarColor,
    setUpdatingCarName,
    clearUpdatingCarStore,
  } = useActions();
  const {
    creatingCarName,
    creatingCarColor,
    updatingCarName,
    updatingCarColor,
    updatingCarId,
  } = useTypedSelector((state) => state.garage);

  const handleCreateCar = async () => {
    if (!creatingCarColor || !creatingCarName) return;
    await createCar({ color: creatingCarColor, name: creatingCarName });
    clearCreatingCarStore();
  };

  const handleUpdateCar = async () => {
    if (!updatingCarName || !updatingCarColor || !updatingCarId) return;
    await updateCar({
      id: updatingCarId,
      carData: { color: updatingCarColor, name: updatingCarName },
    });
    clearUpdatingCarStore();
  };

  return {
    creatingCarName,
    creatingCarColor,
    setCreatingCarName,
    setCreatingCarColor,

    updatingCarName,
    updatingCarColor,
    setUpdatingCarName,
    setUpdatingCarColor,

    handleCreateCar,
    handleUpdateCar,
  };
};
