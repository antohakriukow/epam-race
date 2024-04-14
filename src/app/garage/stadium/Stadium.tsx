'use client';

import { FC } from 'react';
import Line from './components/line/Line';
import Track from './components/track/Track';
import { LineType } from '../types';

import styles from './stadium.module.scss';
import { useCars } from '../hooks';
import EmptyStadium from './components/empty-stadium/EmptyStadium';

const Stadium: FC = () => {
  const { cars, isSuccess, isLoading } = useCars();

  if (!isSuccess || isLoading) return <EmptyStadium />;

  return (
    <div className={styles.container}>
      <Line type={LineType.START} />
      <div className={styles.tracks}>
        {!!cars.length &&
          cars.map((car, index) => (
            <Track
              isFirst={index === 0}
              key={car.id}
              car={car}
            />
          ))}
      </div>
      <Line type={LineType.FINISH} />
    </div>
  );
};
export default Stadium;
