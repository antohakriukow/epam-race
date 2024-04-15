import { FC, useEffect, useMemo } from 'react';
import cn from 'clsx';

import GarageBox from '../garage-box/GarageBox';
import CarAnimation from '@/shared/utils/carAnimation';
import { Car } from '@/components/ui';
import { useSingleRace } from '@/app/garage/hooks/useSingleRace';
import { ICar } from '@/shared/types/car.types';
import { EngineStatus } from '@/shared/types/engine.types';
import { CAR_LENGTH, START_LINE_WIDTH } from '@/shared/constants';

import styles from './track.module.scss';

interface Props {
  car: ICar;
  isFirst: boolean;
}

const Track: FC<Props> = ({ car, isFirst }) => {
  const singleRaceData = useSingleRace(car.id);

  const { engine } = singleRaceData;
  const carLength = CAR_LENGTH + 'px';
  const startPosition = -CAR_LENGTH - START_LINE_WIDTH + 'px';

  const carAnimation = useMemo(() => new CarAnimation(), []);

  useEffect(() => {
    if (engine.velocity > 0) {
      const duration = engine.distance / engine.velocity / 1000;

      carAnimation.startAnimation({
        id: car.id,
        duration,
      });
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
          singleRaceData={singleRaceData}
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
            style={{ width: carLength, left: startPosition }}
          />
        </div>
      </div>
    </>
  );
};
export default Track;
