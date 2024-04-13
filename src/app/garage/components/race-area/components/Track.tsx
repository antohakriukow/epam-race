import { FC } from 'react';
import cn from 'clsx';
import { Car } from '@/components/ui';
import { ICar } from '@/shared/types/car.types';

import styles from '../race-area.module.scss';

interface Props {
  car: ICar;
  isFirst: boolean;
}

const Track: FC<Props> = ({ car, isFirst }) => {
  return (
    <div
      className={cn(styles.track, {
        [styles.firstTrack]: isFirst,
      })}
    >
      <Car color={car.color} />
      <p>{car.name}</p>
    </div>
  );
};
export default Track;
