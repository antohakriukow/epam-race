import { EngineStatus } from '@/shared/types/engine.types';
import { useEngine } from './useEngine';

export const useSingleRace = (id: string) => {
  const { setEngineStatus } = useEngine();

  const handleStartEngine = () =>
    setEngineStatus({
      id,
      providedStatus: EngineStatus.STARTED,
    });

  const handleStartDriving = () =>
    setEngineStatus({ id: id, providedStatus: EngineStatus.DRIVE });

  const handleStart = async () => {
    try {
      await handleStartEngine();
      await handleStartDriving();
    } catch (error) {}
  };

  const handleStop = () =>
    setEngineStatus({
      id: id,
      providedStatus: EngineStatus.STOPPED,
    });

  return { handleStart, handleStop };
};
