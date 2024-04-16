import { FC } from 'react';
import CarGenerateButton from './components/CarGenerateButton';
import RaceButtons from './components/RaceButtons';
import CarForms from './components/CarForms';

import styles from './toolbar.module.scss';

interface Props {
  carIds: string[];
}

const Toolbar: FC<Props> = ({ carIds }) => (
  <div className={styles.container}>
    <RaceButtons carIds={carIds} />
    <CarForms />
    <CarGenerateButton />
  </div>
);

export default Toolbar;
