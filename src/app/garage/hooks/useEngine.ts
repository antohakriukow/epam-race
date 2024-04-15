import { useMutation } from '@tanstack/react-query';
import { engineService } from '@/services/engine.service';
import { EngineStatus, IEngine } from '@/shared/types/engine.types';
import { useMemo, useState } from 'react';

type EngineMutationParams = { id: string; providedStatus: EngineStatus };

export const useEngine = () => {
  const [distance, setDistance] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [status, setStatus] = useState<EngineStatus>(EngineStatus.STOPPED);

  const clearEngineState = () => {
    setDistance(0);
    setVelocity(0);
    setStatus(EngineStatus.STOPPED);
  };

  const { _, mutate: setEngineStatus } = useMutation<
    IEngine,
    Error,
    EngineMutationParams
  >({
    mutationFn: async ({ id, providedStatus }) => {
      if (providedStatus === EngineStatus.STARTED)
        setStatus(EngineStatus.STARTED);
      if (providedStatus === EngineStatus.DRIVE) setStatus(EngineStatus.DRIVE);
      if (providedStatus === EngineStatus.STOPPED) {
        await setStatus(EngineStatus.STOPPED);
        clearEngineState();
      }

      return engineService.setStatus(id, providedStatus);
    },
    onSuccess: (response) => {
      if (response.distance) setDistance(response.distance);
      if (response.velocity) setVelocity(response.velocity);
    },
    onError: (err) => {
      if (err.message.includes('500')) setStatus(EngineStatus.BROKEN);
    },
  });

  const engine = useMemo(
    () => ({ distance, velocity, status }),
    [distance, velocity, status],
  );

  return {
    engine,
    setEngineStatus,
    clearEngineState,
  };
};
