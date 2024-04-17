import { FC } from 'react';
import { useActions, useDeleteCar } from '@/shared/hooks';
import { Button } from '@/components/ui';
import { COLOR_PRIMARY_500, COLOR_SECONDARY } from '@/shared/styles/colors';
import { ICarId } from '@/shared/types/car.types';

const SelectRemoveButtons: FC<ICarId> = ({ id }) => {
  const { deleteCar } = useDeleteCar();
  const { setUpdatingCarId } = useActions();

  const handleDeleteCar = () => deleteCar(id);
  const handleSelectCar = () => setUpdatingCarId(id);

  return (
    <div>
      <Button
        text='select'
        size='S'
        color={COLOR_SECONDARY}
        onClick={handleSelectCar}
      />
      <Button
        text='remove'
        size='S'
        color={COLOR_PRIMARY_500}
        onClick={handleDeleteCar}
      />
    </div>
  );
};
export default SelectRemoveButtons;
