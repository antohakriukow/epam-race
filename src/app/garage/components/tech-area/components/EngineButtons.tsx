import { FC } from 'react';
import { Button } from '@/components/ui';
import { ICarId } from '@/shared/types/car.types';
import { COLOR_YELLOW } from '@/shared/styles/colors';

const EngineButtons: FC<ICarId> = ({ id }) => {
  return (
    <div>
      <Button
        iconName='MdOutlinePlayArrow'
        size='S'
        color={COLOR_YELLOW}
        onClick={() => {}}
      />
      <Button
        iconName='MdStop'
        size='S'
        color={COLOR_YELLOW}
        onClick={() => {}}
      />
    </div>
  );
};
export default EngineButtons;
