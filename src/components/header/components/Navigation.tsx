import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui';
import { COLOR_PRIMARY_500, COLOR_SECONDARY } from '@/shared/styles/colors';

import styles from '../header.module.scss';

const Navigation: FC = () => {
  const router = useRouter();
  const goToGarage = () => router.push('/garage', undefined);
  const goToWinners = () => router.push('/winners', undefined);

  return (
    <div className={styles.navigation}>
      <Button
        text='garage'
        color={COLOR_SECONDARY}
        size='L'
        onClick={goToGarage}
      />
      <Button
        text='winners'
        color={COLOR_PRIMARY_500}
        size='L'
        onClick={goToWinners}
      />
    </div>
  );
};
export default Navigation;
