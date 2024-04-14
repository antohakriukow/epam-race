import { FC } from 'react';
import Line from './components/Line';
import Track from './components/Track';

import { LineType } from '../../types';
import { ICar } from '@/shared/types/car.types';

import styles from './race-area.module.scss';

interface Props {
  cars: ICar[];
}

const RaceArea: FC<Props> = ({ cars }) => {
  if (!cars.length) return null;
  return (
    <div className={styles.container}>
      <Line type={LineType.START} />
      <div className={styles.tracks}>
        {!!cars.length &&
          cars.map((car, index) => (
            <Track
              isFirst={index === 0}
              key={car.id}
              car={car}
            />
          ))}
      </div>
      <Line type={LineType.FINISH} />
    </div>
  );
};
export default RaceArea;
