'use client';

import { FC } from 'react';
import { useCars } from '@/shared/hooks';
import Toolbar from './stadium/components/toolbar/Toolbar';
import Stadium from './stadium/Stadium';
import PageSelector from '@/components/ui/page-selector/PageSelector';
import Border from './stadium/components/border/Border';
import ModalPlaceHolder from '@/components/ui/modal/ModalPlaceHolder';

const GaragePage: FC = () => {
  const { page, setPage, totalCount, cars, isSuccess, isLoading } = useCars();

  return (
    <main>
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
      <ModalPlaceHolder />
    </main>
  );
};
export default GaragePage;
