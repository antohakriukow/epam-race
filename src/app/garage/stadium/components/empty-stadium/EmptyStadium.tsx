import { FC } from 'react';
import Line from '../line/Line';

import styles from '../../stadium.module.scss';
import { LineType } from '@/shared/types/garage-page.types';

const EmptyStadium: FC = () => {
  return (
    <div
      className={styles.container}
      style={{ height: '504px' }}
    >
      <Line type={LineType.START} />
      <Line type={LineType.FINISH} />
    </div>
  );
};
export default EmptyStadium;
