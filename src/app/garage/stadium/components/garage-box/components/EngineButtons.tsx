import { FC } from 'react';
import { Button } from '@/components/ui';
import { ICarId } from '@/shared/types/car.types';
import { COLOR_YELLOW } from '@/shared/styles/colors';
import { useEngine } from '@/app/garage/hooks';
import { EngineStatus } from '@/shared/types/engine.types';

const EngineButtons: FC<ICarId> = ({ id }) => {
  const { engine, setEngineStatus } = useEngine();
  const isEngineStarted = !!engine?.velocity && engine?.velocity > 0;
  const isEngineStopped = !isEngineStarted;

  const handleStartEngine = () =>
    setEngineStatus({ id, status: EngineStatus.STARTED });

  const handleStopEngine = () =>
    setEngineStatus({ id, status: EngineStatus.STOPPED });

  return (
    <div>
      <Button
        iconName='MdOutlinePlayArrow'
        size='S'
        color={COLOR_YELLOW}
        onClick={handleStartEngine}
        disabled={isEngineStarted}
      />
      <Button
        iconName='MdStop'
        size='S'
        color={COLOR_YELLOW}
        onClick={handleStopEngine}
        disabled={isEngineStopped}
      />
    </div>
  );
};
export default EngineButtons;
