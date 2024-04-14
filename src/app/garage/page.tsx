'use client';

import { FC } from 'react';
import Toolbar from './components/toolbar/Toolbar';
import Stadium from './components/Stadium';
import { useCars } from './hooks/useCars';
import PageSelector from '@/components/ui/page-selector/PageSelector';

const GaragePage: FC = () => {
  const { cars, isLoading, isSuccess, page, setPage, totalCount } = useCars();

  return (
    <main>
      <Toolbar />
      {isLoading || !isSuccess ? null : <Stadium cars={cars} />}
      {!!cars?.length && (
        <PageSelector
          type='garage'
          page={page}
          setPage={setPage}
          totalCount={totalCount}
        />
      )}
    </main>
  );
};
export default GaragePage;
