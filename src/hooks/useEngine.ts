import { useMutation } from '@tanstack/react-query';
import { engineService } from '@/services/engine.service';
import { EngineStatus, IEngine } from '@/shared/types/engine.types';
import { useActions } from '@/hooks';

type EngineMutationParams = { id: string; providedStatus: EngineStatus };
type EngineMutationResponse = { id: string; data: IEngine };

export const useEngine = () => {
  const { setEngineStatus, setRaceData } = useActions();

  const clearEngineState = (id: string) => {
    setRaceData({ id, velocity: 0, distance: 0 });
    setEngineStatus({ id, status: EngineStatus.STOPPED });
  };

  const { _, mutate: setEngineStatusAsync } = useMutation<
    EngineMutationResponse,
    Error,
    EngineMutationParams
  >({
    mutationFn: async ({ id, providedStatus }) => {
      if (providedStatus === EngineStatus.STARTED)
        setEngineStatus({ id, status: EngineStatus.STARTED });

      if (providedStatus === EngineStatus.DRIVE)
        setEngineStatus({ id, status: EngineStatus.DRIVE });

      const data = await engineService.setStatus(id, providedStatus);

      if (providedStatus === EngineStatus.STOPPED) {
        await setEngineStatus({ id, status: EngineStatus.STOPPED });
        clearEngineState(id);
      }

      return { id, data };
    },
    onSuccess: ({ id, data }) => {
      if (!!data.distance && !!data.velocity)
        setRaceData({
          id,
          velocity: data.velocity,
          distance: data.distance,
        });
    },
    onError: (err, { id }) => {
      if (err.message.includes('500'))
        setEngineStatus({ id, status: EngineStatus.BROKEN });
    },
  });

  return {
    setEngineStatus: setEngineStatusAsync,
  };
};
