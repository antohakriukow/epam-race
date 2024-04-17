import { FC } from 'react';
import { Button } from '@/components/ui';
import { COLOR_PRIMARY_500, COLOR_SUCCESS } from '@/shared/styles/colors';
import { useGroupRace, useWinnerDetector } from '@/shared/hooks';
import { ICar } from '@/shared/types/car.types';
import WinnersModal from '@/app/garage/modal/WinnersModal';

interface Props {
  cars: ICar[];
}

const RaceButtons: FC<Props> = ({ cars }) => {
  const carIds = cars.map((car) => car.id);
  const { handleStart, handleStop } = useGroupRace(carIds);

  const { setIsWinnerDetectorOn, winner } = useWinnerDetector(cars);

  const onStart = () => {
    setIsWinnerDetectorOn(true);
    handleStart();
  };

  const onStop = () => {
    setIsWinnerDetectorOn(false);
    handleStop();
  };

  return (
    <>
      <div>
        <Button
          size='M'
          text='race'
          iconName='MdOutlinePlayArrow'
          onClick={onStart}
          color={COLOR_SUCCESS}
        />
        <Button
          size='M'
          text='reset'
          iconName='MdOutlineRefresh'
          onClick={onStop}
          color={COLOR_PRIMARY_500}
        />
      </div>
      {winner && <WinnersModal />}
    </>
  );
};
export default RaceButtons;
