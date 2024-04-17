import { FC, memo, useEffect, useMemo } from 'react';
import cn from 'clsx';
import GarageBox from '../garage-box/GarageBox';
import { Car } from '@/components/ui';
import { ICar } from '@/shared/types/car.types';
import { carLength, startCarPosition } from '@/shared/constants';

import styles from './track.module.scss';
import CarAnimation from '@/shared/utils/carAnimation';
import { EngineStatus } from '@/shared/types/engine.types';
import { useTypedSelector, useSingleRace } from '@/shared/hooks';

interface Props {
  car: ICar;
  isFirst: boolean;
}

const Track: FC<Props> = memo(({ car, isFirst }) => {
  const { handleStart, handleStop } = useSingleRace(car.id);
  const engine = useTypedSelector((state) =>
    car.id ? state.engines.engines[car.id] : {},
  );

  const carAnimation = useMemo(() => new CarAnimation(), []);

  useEffect(() => {
    if (!engine) return;
    if (!!engine?.distance && !!engine?.velocity && engine?.velocity > 0) {
      const duration = engine.distance / engine.velocity / 1000;

      carAnimation.startAnimation({ id: car.id, duration });
    }

    if (engine.status === EngineStatus.BROKEN) carAnimation.stopAnimation();
    if (engine.status === EngineStatus.STOPPED) carAnimation.resetAnimation();

    return () => carAnimation.stopAnimation();
  }, [car.id, engine, carAnimation]);

  return (
    <>
      <div className={styles.container}>
        <GarageBox
          id={car.id}
          singleRaceData={{ engine, handleStart, handleStop }}
        />
        <div
          id={`track-${car.id}`}
          className={cn(styles.track, {
            [styles.firstTrack]: isFirst,
          })}
        >
          <p>{car.name}</p>
          <Car
            id={`car-${car.id}`}
            className={styles.car}
            color={car.color}
            style={{ width: carLength, left: startCarPosition }}
          />
        </div>
      </div>
    </>
  );
});
Track.displayName = 'Track';
export default Track;
