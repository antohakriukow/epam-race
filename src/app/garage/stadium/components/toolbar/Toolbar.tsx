import { FC } from 'react';
import CarGenerateButton from './components/CarGenerateButton';
import RaceButtons from './components/RaceButtons';
import CarForms from './components/CarForms';

import styles from './toolbar.module.scss';
import { ICar } from '@/shared/types/car.types';

interface Props {
  cars: ICar[];
}

const Toolbar: FC<Props> = ({ cars }) => (
  <div className={styles.container}>
    <RaceButtons cars={cars} />
    <CarForms />
    <CarGenerateButton />
  </div>
);

export default Toolbar;
