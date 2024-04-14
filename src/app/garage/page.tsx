'use client';

import { FC } from 'react';
import Toolbar from './components/toolbar/Toolbar';
import Stadium from './components/Stadium';
import PageTools from './components/page-tools/PageTools';
import { useCars } from './hooks/useCars';

const GaragePage: FC = () => {
  const { cars, isLoading, isSuccess, page, setPage, totalCount } = useCars();

  return (
    <main>
      <Toolbar />
      {isLoading || !isSuccess ? null : <Stadium cars={cars} />}
      {!!cars?.length && (
        <PageTools
          page={page}
          setPage={setPage}
          totalCount={totalCount}
        />
      )}
    </main>
  );
};
export default GaragePage;
