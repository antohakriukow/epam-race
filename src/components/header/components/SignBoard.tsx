import { FC } from 'react';
import { Sign } from '@/components/ui';

import styles from '../header.module.scss';
import { COLOR_PRIMARY_500, COLOR_SECONDARY } from '@/shared/styles/colors';

const SignBoard: FC = () => {
  return (
    <div className={styles.signBoard}>
      <Sign
        primaryColor={COLOR_PRIMARY_500}
        secondaryColor={COLOR_SECONDARY}
      />
      <h1>
        <span>async</span>
        <span>race</span>
      </h1>
    </div>
  );
};
export default SignBoard;
