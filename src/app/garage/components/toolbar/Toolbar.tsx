'use client';

import { FC } from 'react';
import { Button } from '@/components/ui';
import { COLOR_PRIMARY_500, COLOR_SUCCESS } from '@/shared/styles/colors';

import styles from './toolbar.module.scss';
import { useGenerateCars } from '../../hooks/useGenerateCars';
import CreateCarForm from './forms/CreateCarForm';

const Toolbar: FC = () => {
  const { generateCars } = useGenerateCars();
  const handleStartRace = () => {};
  const handleResetRace = () => {};
  const handleUpdateCar = () => {};

  return (
    <div className={styles.container}>
      <div>
        <Button
          size='M'
          text='race'
          iconName='MdOutlinePlayArrow'
          onClick={handleStartRace}
          color={COLOR_SUCCESS}
        />
        <Button
          size='M'
          text='reset'
          iconName='MdOutlineRefresh'
          onClick={handleResetRace}
          color={COLOR_PRIMARY_500}
        />
      </div>
      <CreateCarForm />
      <div>
        <input type='text' />
        <input type='color' />
        <Button
          size='M'
          text='update'
          onClick={handleUpdateCar}
          color={COLOR_PRIMARY_500}
        />
      </div>
      <div>
        <Button
          size='M'
          text='generate cars'
          onClick={generateCars}
          color={COLOR_SUCCESS}
        />
      </div>
    </div>
  );
};
export default Toolbar;
