'use client';

import { FC } from 'react';
import { useCars } from './hooks/useCars';
import Toolbar from './stadium/components/toolbar/Toolbar';
import Stadium from './stadium/Stadium';
import PageSelector from '@/components/ui/page-selector/PageSelector';
import Border from './stadium/components/border/Border';

const GaragePage: FC = () => {
  const { page, setPage, totalCount, cars, isSuccess, isLoading } = useCars();
  const carIds = cars.map((car) => car.id);

  return (
    <main>
      <Toolbar carIds={carIds} />
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
