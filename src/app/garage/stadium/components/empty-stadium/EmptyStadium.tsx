import { FC } from 'react';
import Line from '../line/Line';
import { LineType } from '@/app/garage/types';

import styles from '../../stadium.module.scss';

const EmptyStadium: FC = () => {
  return (
    <div
      className={styles.container}
      style={{ height: '574px' }}
    >
      <Line type={LineType.START} />
      <Line type={LineType.FINISH} />
    </div>
  );
};
export default EmptyStadium;
