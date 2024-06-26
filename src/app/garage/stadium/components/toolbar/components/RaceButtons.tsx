import { FC } from 'react';
import { Button } from '@/components/ui';
import WinnersModal from '@/app/garage/modal/WinnersModal';
import { useGroupRace, useWinnerDetector } from '@/hooks';
import { ICar } from '@/shared/types/car.types';
import { COLOR_PRIMARY_500, COLOR_SUCCESS } from '@/shared/styles/colors';

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
