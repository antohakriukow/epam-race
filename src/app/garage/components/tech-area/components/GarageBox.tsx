import { FC } from 'react';
import { ICarId } from '@/shared/types/car.types';

import CarButtons from './CarButtons';
import EngineButtons from './EngineButtons';

import styles from '../tech-area.module.scss';

const GarageBox: FC<ICarId> = ({ id }) => {
  return (
    <div className={styles.box}>
      <CarButtons id={id} />
      <EngineButtons id={id} />
    </div>
  );
};
export default GarageBox;
