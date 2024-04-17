'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui';
import { COLOR_SECONDARY } from '@/shared/styles/colors';

import styles from './not-found.module.scss';

const NotFoundContent: FC = () => {
  const router = useRouter();
  const goToGarage = () => router.push('/', undefined);

  return (
    <main className={styles.container}>
      <div>
        <h2>Page Not Found</h2>
        <p>Press the button to go to Homepage</p>
      </div>
      <Button
        text='go home'
        color={COLOR_SECONDARY}
        size='L'
        onClick={goToGarage}
      />
      ;
    </main>
  );
};
export default NotFoundContent;
