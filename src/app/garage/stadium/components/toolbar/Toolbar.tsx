import { FC } from 'react';
import CarGenerateButton from './components/CarGenerateButton';
import RaceButtons from './components/RaceButtons';
import CarForms from './components/CarForms';
import { ICar } from '@/shared/types/car.types';

import styles from './toolbar.module.scss';

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
