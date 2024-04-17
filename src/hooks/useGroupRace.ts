import { useEngine } from './useEngine';
import { EngineStatus } from '@/shared/types/engine.types';

export const useGroupRace = (ids: string[]) => {
  const { setEngineStatus } = useEngine();

  const handleStartEngines = async () =>
    ids.forEach((id) =>
      setEngineStatus({
        id,
        providedStatus: EngineStatus.STARTED,
      }),
    );

  const handleStartDriving = () =>
    ids.forEach((id) =>
      setEngineStatus({ id, providedStatus: EngineStatus.DRIVE }),
    );

  const handleStart = async () => {
    try {
      await handleStartEngines();
      await handleStartDriving();
    } catch (error) {}
  };

  const handleStop = () =>
    ids.forEach((id) =>
      setEngineStatus({
        id,
        providedStatus: EngineStatus.STOPPED,
      }),
    );

  return { handleStart, handleStop };
};
