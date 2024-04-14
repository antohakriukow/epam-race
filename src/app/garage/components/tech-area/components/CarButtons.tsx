import { FC } from 'react';
import { Button } from '@/components/ui';
import { COLOR_PRIMARY_500, COLOR_SECONDARY } from '@/shared/styles/colors';
import { ICarId } from '@/shared/types/car.types';
import { useDeleteCar } from '@/app/garage/hooks/useDeleteCar';

const SelectRemoveButtons: FC<ICarId> = ({ id }) => {
  const { deleteCar } = useDeleteCar();

  const handleDeleteCar = () => deleteCar(id);

  return (
    <div>
      <Button
        text='select'
        size='S'
        color={COLOR_SECONDARY}
        onClick={() => {}}
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
