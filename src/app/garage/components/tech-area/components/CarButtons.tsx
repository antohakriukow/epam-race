import { FC } from 'react';
import { Button } from '@/components/ui';
import { COLOR_PRIMARY_500, COLOR_SECONDARY } from '@/shared/styles/colors';
import { ICarId } from '@/shared/types/car.types';

const SelectRemoveButtons: FC<ICarId> = ({ id }) => {
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
        onClick={() => {}}
      />
    </div>
  );
};
export default SelectRemoveButtons;
