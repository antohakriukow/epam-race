'use client';

import { FC } from 'react';
import Border from './border/Border';
import TechArea from './tech-area/TechArea';
import RaceArea from './race-area/RaceArea';
import { useCars } from '../hooks/useCars';

const Stadium: FC = () => {
  const { cars, isLoading, isSuccess } = useCars();

  if (isLoading || !isSuccess) return null;

  return (
    <Border>
      <TechArea cars={cars ?? []} />
      <RaceArea cars={cars ?? []} />
    </Border>
  );
};
export default Stadium;
