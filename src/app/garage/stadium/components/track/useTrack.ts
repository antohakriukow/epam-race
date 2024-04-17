import CarAnimation from '@/shared/utils/carAnimation';
import { EngineStatus } from '@/shared/types/engine.types';
import { useTypedSelector, useSingleRace } from '@/hooks';
import { useEffect, useMemo } from 'react';

export const useTrack = (id: string) => {
  const { handleStart, handleStop } = useSingleRace(id);
  const engine = useTypedSelector((state) =>
    id ? state.race.engines[id] : {},
  );

  const carAnimation = useMemo(() => new CarAnimation(), []);

  useEffect(() => {
    if (!engine) return;
    if (!!engine?.distance && !!engine?.velocity && engine?.velocity > 0) {
      const duration = engine.distance / engine.velocity / 1000;

      carAnimation.startAnimation({ id: id, duration });
    }

    if (engine.status === EngineStatus.BROKEN) carAnimation.stopAnimation();
    if (engine.status === EngineStatus.STOPPED) carAnimation.resetAnimation();

    return () => carAnimation.stopAnimation();
  }, [id, engine, carAnimation]);

  return { engine, handleStart, handleStop };
};
