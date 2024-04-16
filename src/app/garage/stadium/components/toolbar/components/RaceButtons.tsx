import { FC } from 'react';
import { Button } from '@/components/ui';
import { COLOR_PRIMARY_500, COLOR_SUCCESS } from '@/shared/styles/colors';
import { useGroupRace } from '@/app/garage/hooks/useGroupRace';

interface Props {
  carIds: string[];
}

const RaceButtons: FC<Props> = ({ carIds }) => {
  const { handleStart, handleStop } = useGroupRace(carIds);

  return (
    <div>
      <Button
        size='M'
        text='race'
        iconName='MdOutlinePlayArrow'
        onClick={handleStart}
        color={COLOR_SUCCESS}
      />
      <Button
        size='M'
        text='reset'
        iconName='MdOutlineRefresh'
        onClick={handleStop}
        color={COLOR_PRIMARY_500}
      />
    </div>
  );
};
export default RaceButtons;
