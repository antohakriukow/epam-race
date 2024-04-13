'use client';

import { FC } from 'react';
import { Button } from '@/components/ui';
import { COLOR_PRIMARY_500, COLOR_SUCCESS } from '@/shared/styles/colors';

import styles from './toolbar.module.scss';

const Toolbar: FC = () => {
  const handleStartRace = () => {};
  const handleResetRace = () => {};
  const handleCreateCar = () => {};
  const handleUpdateCar = () => {};
  const handleGenerateCars = () => {};
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
      <div>
        <input type='text' />
        <input type='color' />
        <Button
          size='M'
          text='create'
          onClick={handleCreateCar}
          color={COLOR_PRIMARY_500}
        />
      </div>
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
          onClick={handleGenerateCars}
          color={COLOR_SUCCESS}
        />
      </div>
    </div>
  );
};
export default Toolbar;
