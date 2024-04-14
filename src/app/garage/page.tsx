'use client';

import { FC } from 'react';
import { useCars } from './hooks/useCars';
import Toolbar from './stadium/components/toolbar/Toolbar';
import Stadium from './stadium/Stadium';
import PageSelector from '@/components/ui/page-selector/PageSelector';
import Border from './stadium/components/border/Border';

const GaragePage: FC = () => {
  const { page, setPage, totalCount } = useCars();

  return (
    <main>
      <Toolbar />
      <Border>
        <Stadium />
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
