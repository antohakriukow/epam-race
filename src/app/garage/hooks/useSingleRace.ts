import { EngineStatus } from '@/shared/types/engine.types';
import { useEngine } from './useEngine';

export const useSingleRace = (id: string) => {
  const { engine, setEngineStatus } = useEngine();

  const handleStartEngine = async () => {
    return setEngineStatus({ id, providedStatus: EngineStatus.STARTED });
  };

  const handleStopEngine = async () => {
    return setEngineStatus({ id, providedStatus: EngineStatus.STOPPED });
  };

  const handleStartDriving = async () => {
    return setEngineStatus({ id, providedStatus: EngineStatus.DRIVE });
  };

  const handleStart = async () => {
    try {
      await handleStartEngine();
      await handleStartDriving();
    } catch (error) {}
  };

  return {
    engine,
    handleStart,
    handleStop: handleStopEngine,
  };
};
