import { FC, PropsWithChildren } from 'react';
import { Arrow } from '@/components/ui';
import { COLOR_NEUTRAL } from '@/shared/styles/colors';

import styles from './border.module.scss';

const Border: FC<PropsWithChildren> = ({ children }) => {
  const arrows = Array.from({ length: 50 })
    .map((_, index) =>
      Array.from({ length: 5 }).map((__, subIndex) => (
        <Arrow
          key={`${index}-${subIndex}`}
          color={index % 2 === 0 ? COLOR_NEUTRAL : '#fff'}
        />
      )),
    )
    .flat();

  return (
    <>
      <div className={styles.border}>{arrows}</div>
      <div className={styles.flexContainer}>{children}</div>
      <div className={styles.border}>{arrows}</div>
    </>
  );
};

export default Border;
