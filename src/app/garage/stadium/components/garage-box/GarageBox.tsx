import { FC } from 'react';
import CarButtons from './components/CarButtons';
import EngineButtons from './components/EngineButtons';
import { ICarId } from '@/shared/types/car.types';
import { ISingleRaceData } from '@/shared/types/garage-page.types';
import { PARKING_LENGTH } from '@/shared/constants';

import styles from './garage-box.module.scss';

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
