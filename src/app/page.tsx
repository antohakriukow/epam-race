'use client';

import { FC } from 'react';
import { useCars } from '@/hooks';
import Toolbar from './garage/stadium/components/toolbar/Toolbar';
import Stadium from './garage/stadium/Stadium';
import PageSelector from '@/components/ui/page-selector/PageSelector';
import Border from './garage/stadium/components/border/Border';
import { Heading } from '@/components/ui';

const GaragePage: FC = () => {
  const { page, setPage, totalCount, cars, isSuccess, isLoading } = useCars();

  return (
    <main>
      <Heading title='garage' />
      <Toolbar cars={cars} />
      <Border>
        <Stadium
          cars={cars}
          isSuccess={isSuccess}
          isLoading={isLoading}
        />
      </Border>
      <PageSelector
        type='garage'
        page={page}
        setPage={setPage}
        totalCount={totalCount}
      />
    </main>
  );
};
export default GaragePage;
