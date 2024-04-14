'use client';

import { FC } from 'react';
import { useCars } from './hooks/useCars';
import Toolbar from './components/toolbar/Toolbar';
import Stadium from './components/Stadium';
import PageSelector from '@/components/ui/page-selector/PageSelector';

const GaragePage: FC = () => {
  const { cars, isLoading, isSuccess, page, setPage, totalCount } = useCars();

  return (
    <main>
      <Toolbar />
      {isLoading || !isSuccess ? null : <Stadium cars={cars} />}
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
