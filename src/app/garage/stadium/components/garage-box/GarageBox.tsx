import { FC } from 'react';
import { ICarId } from '@/shared/types/car.types';
import CarButtons from './components/CarButtons';
import EngineButtons from './components/EngineButtons';

import styles from './garage-box.module.scss';
import { ISingleRaceData } from '@/app/garage/types';
import { PARKING_LENGTH } from '@/shared/constants';

interface Props extends ICarId {
  singleRaceData: ISingleRaceData;
}

const GarageBox: FC<Props> = ({ id, singleRaceData }) => {
  return (
    <div
      className={styles.container}
      style={{ paddingRight: PARKING_LENGTH }}
    >
      <CarButtons id={id} />
      <EngineButtons singleRaceData={singleRaceData} />
    </div>
  );
};
export default GarageBox;
