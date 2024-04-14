import { useMutation } from '@tanstack/react-query';
import { engineService } from '@/services/engine.service';
import { EngineStatus, IEngine } from '@/shared/types/engine.types';

type EngineMutationParams = { id: string; status: EngineStatus };

export const useEngine = () => {
  const { data: engine, mutate: setEngineStatus } = useMutation<
    IEngine,
    Error,
    EngineMutationParams
  >({
    mutationFn: async ({ id, status }) => engineService.setStatus(id, status),
    onSuccess: (data) => {
      console.log('Engine operation successful:', data);
    },
    onError: (err) => {
      console.error('Engine operation failed:', err);
    },
  });

  return {
    engine,
    setEngineStatus,
  };
};
