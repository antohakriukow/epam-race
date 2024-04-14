import { FC } from 'react';
import Border from './border/Border';
import TechArea from './tech-area/TechArea';
import RaceArea from './race-area/RaceArea';
import { ICar } from '@/shared/types/car.types';

interface Props {
  cars: ICar[];
}

const Stadium: FC<Props> = ({ cars }) => (
  <Border>
    <TechArea cars={cars} />
    <RaceArea cars={cars} />
  </Border>
);

export default Stadium;
