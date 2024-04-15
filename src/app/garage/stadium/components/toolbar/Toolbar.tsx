import { FC } from 'react';
import CarGenerateButton from './components/CarGenerateButton';
import RaceButtons from './components/RaceButtons';
import CarForms from './components/CarForms';

import styles from './toolbar.module.scss';

const Toolbar: FC = () => (
  <div className={styles.container}>
    <RaceButtons />
    <CarForms />
    <CarGenerateButton />
  </div>
);

export default Toolbar;
