import { FC, memo } from 'react';
import cn from 'clsx';
import GarageBox from '../garage-box/GarageBox';
import { Car } from '@/components/ui';
import { useTrack } from './useTrack';
import { ICar } from '@/shared/types/car.types';
import { carLength, startCarPosition } from '@/shared/constants';

import styles from './track.module.scss';

interface Props {
  car: ICar;
  isFirst: boolean;
}

const Track: FC<Props> = memo(({ car, isFirst }) => {
  const { engine, handleStart, handleStop } = useTrack(car.id);

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
