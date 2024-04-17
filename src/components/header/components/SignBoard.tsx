import { FC } from 'react';
import { Sign } from '@/components/ui';
import { COLOR_PRIMARY_500, COLOR_SECONDARY } from '@/shared/styles/colors';
import { Codystar } from 'next/font/google';

const CodystarFont = Codystar({ subsets: ['latin'], weight: '400' });

import styles from '../header.module.scss';

const SignBoard: FC = () => {
  return (
    <div className={styles.signBoard}>
      <Sign
        primaryColor={COLOR_PRIMARY_500}
        secondaryColor={COLOR_SECONDARY}
      />
      <h1>
        <span className={CodystarFont.className}>async</span>
        <span className={CodystarFont.className}>race</span>
      </h1>
    </div>
  );
};
export default SignBoard;
