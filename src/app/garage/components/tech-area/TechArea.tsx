import { ICar } from '@/shared/types/car.types';
import { FC } from 'react';
import GarageBox from './components/GarageBox';

import styles from './tech-area.module.scss';

interface Props {
  cars: ICar[];
}

const TechArea: FC<Props> = ({ cars }) => {
  return (
    <div className={styles.container}>
      {!!cars?.length &&
        cars.map((car) => (
          <GarageBox
            key={car.id}
            id={car.id}
          />
        ))}
    </div>
  );
};
export default TechArea;
