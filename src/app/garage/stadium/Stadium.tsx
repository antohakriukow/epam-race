import { FC } from 'react';
import Line from './components/line/Line';
import Track from './components/track/Track';

import styles from './stadium.module.scss';
import EmptyStadium from './components/empty-stadium/EmptyStadium';
import { ICar } from '@/shared/types/car.types';
import { LineType } from '@/shared/types/garage-page.types';

interface Props {
  cars: ICar[];
  isSuccess: boolean;
  isLoading: boolean;
}

const Stadium: FC<Props> = ({ cars, isSuccess, isLoading }) => {
  if (!isSuccess || isLoading) return <EmptyStadium />;

  return (
    <div className={styles.container}>
      {!!cars.length && <Line type={LineType.START} />}
      <div
        id='tracks'
        className={styles.tracks}
      >
        {!!cars.length &&
          cars.map((car, index) => (
            <Track
              isFirst={index === 0}
              key={car.id}
              car={car}
            />
          ))}
      </div>
      {!!cars.length && <Line type={LineType.FINISH} />}
    </div>
  );
};
export default Stadium;
