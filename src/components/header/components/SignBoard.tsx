import { FC } from 'react';
import { Sign } from '@/components/ui';

import styles from '../header.module.scss';

const SignBoard: FC = () => {
  return (
    <div className={styles.signBoard}>
      <Sign />
      <h1>
        <span>async</span>
        <span>race</span>
      </h1>
    </div>
  );
};
export default SignBoard;
