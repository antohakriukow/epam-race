import { FC } from 'react';
import { ICarId } from '@/shared/types/car.types';
import CarButtons from './components/CarButtons';
import EngineButtons from './components/EngineButtons';

import styles from './garage-box.module.scss';

const GarageBox: FC<ICarId> = ({ id }) => {
  return (
    <div className={styles.container}>
      <CarButtons id={id} />
      <EngineButtons id={id} />
    </div>
  );
};
export default GarageBox;
