import { FC } from 'react';
import { Button } from '@/components/ui';
import { ISingleRaceData } from '@/app/garage/types';
import { EngineStatus } from '@/shared/types/engine.types';
import { COLOR_YELLOW } from '@/shared/styles/colors';

interface Props {
  singleRaceData: ISingleRaceData;
}

const EngineButtons: FC<Props> = ({ singleRaceData }) => {
  const { engine, handleStart, handleStop } = singleRaceData;

  const isStopButtonDisabled = !!engine
    ? engine.status === EngineStatus.STOPPED
    : true;
  const isStartButtonDisabled = !isStopButtonDisabled;

  return (
    <div>
      <Button
        iconName='MdOutlinePlayArrow'
        size='S'
        color={COLOR_YELLOW}
        onClick={handleStart}
        disabled={isStartButtonDisabled}
      />
      <Button
        iconName='MdStop'
        size='S'
        color={COLOR_YELLOW}
        onClick={handleStop}
        disabled={isStopButtonDisabled}
      />
    </div>
  );
};
export default EngineButtons;
