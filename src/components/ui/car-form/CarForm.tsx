import { ChangeEvent, FC } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Button } from '@/components/ui';
import { COLOR_PRIMARY_500 } from '@/shared/styles/colors';
import { Codystar } from 'next/font/google';

const CodystarFont = Codystar({ subsets: ['latin'], weight: '400' });

import styles from './car-form.module.scss';

interface Props {
  buttonText: string;
  buttonColor?: string;
  textInputValue: string | null;
  colorInputValue: string;
  setTextValueChange: ActionCreatorWithPayload<string, string>;
  setColorValueChange: ActionCreatorWithPayload<string, string>;
  onSubmit: () => Promise<void>;
}

const CarForm: FC<Props> = ({
  buttonText,
  buttonColor = COLOR_PRIMARY_500,
  textInputValue,
  colorInputValue,
  setTextValueChange,
  setColorValueChange,
  onSubmit,
}) => {
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextValueChange(event.target.value);
  };

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setColorValueChange(event.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        className={CodystarFont.className}
        type='text'
        placeholder='type car brand'
        value={textInputValue || ''}
        onChange={handleNameChange}
      />
      <input
        type='color'
        value={colorInputValue}
        onChange={handleColorChange}
      />
      <Button
        size='M'
        text={buttonText}
        onClick={onSubmit}
        color={buttonColor}
      />
    </div>
  );
};
export default CarForm;
