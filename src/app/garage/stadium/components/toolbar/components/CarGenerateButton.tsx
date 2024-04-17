import { FC } from 'react';
import { useGenerateCars } from '@/shared/hooks';
import { Button } from '@/components/ui';
import { COLOR_SUCCESS } from '@/shared/styles/colors';

const CarGenerateButton: FC = () => {
  const { generateCars } = useGenerateCars();

  return (
    <div>
      <Button
        size='M'
        text='generate cars'
        onClick={generateCars}
        color={COLOR_SUCCESS}
      />
    </div>
  );
};
export default CarGenerateButton;
