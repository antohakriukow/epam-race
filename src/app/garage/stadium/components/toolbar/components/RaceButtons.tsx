import { FC } from 'react';
import { Button } from '@/components/ui';
import { COLOR_PRIMARY_500, COLOR_SUCCESS } from '@/shared/styles/colors';

const RaceButtons: FC = () => {
  const handleStartRace = () => {};
  const handleResetRace = () => {};

  return (
    <div>
      <Button
        size='M'
        text='race'
        iconName='MdOutlinePlayArrow'
        onClick={handleStartRace}
        color={COLOR_SUCCESS}
      />
      <Button
        size='M'
        text='reset'
        iconName='MdOutlineRefresh'
        onClick={handleResetRace}
        color={COLOR_PRIMARY_500}
      />
    </div>
  );
};
export default RaceButtons;
