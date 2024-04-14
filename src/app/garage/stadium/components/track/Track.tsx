import { FC } from 'react';
import cn from 'clsx';
import { Car } from '@/components/ui';
import { ICar } from '@/shared/types/car.types';

import styles from './track.module.scss';
import GarageBox from '../garage-box/GarageBox';

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
      <GarageBox id={car.id} />
      <Car color={car.color} />
      <p>{car.name}</p>
    </div>
  );
};
export default Track;
