import { COLOR_PRIMARY_500, COLOR_SECONDARY } from '@/shared/styles/colors';
import { FC } from 'react';

const Sign: FC = () => {
  return (
    <svg
      width='1050'
      height='670'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1050 670'
    >
      <path
        d='M 240,132
        L 930,38
        A 110,90 0 0 1 1048,128
        L 998,548
        A 90,90 0 0 1 900,634'
        fill='none'
        stroke={COLOR_SECONDARY}
        stroke-width='8'
        stroke-linecap='round'
      />

      <path
        d='M 800,624 
        L 170,570 
        A 90,90 0 0 1 90,500 
        L 36,260 
        A 90, 90 0 0 1 110,150'
        stroke-dasharray='200,30,1000'
        fill='none'
        stroke={COLOR_SECONDARY}
        stroke-width='8'
        stroke-linecap='round'
      />

      <path
        d='M 180,110
        L 900,8 
        A 140,120 0 0 1 1078,128 
        L 1028,548 
        A 120,120 0 0 1 900,664 
        L 870, 662
        L 886 560'
        stroke-dasharray='280,30,10000'
        fill='none'
        stroke={COLOR_PRIMARY_500}
        stroke-width='8'
        stroke-linecap='round'
      />

      <path
        d='M 840, 658 
        L 170,600 
        A 120,120 0 0 1 60,500 
        L 6,260 
        A 120, 120 0 0 1 110,120
        L 130, 116
        L 155 216'
        stroke-dasharray='930,30,10000'
        fill='none'
        stroke={COLOR_PRIMARY_500}
        stroke-width='8'
        stroke-linecap='round'
      />
    </svg>
  );
};
export default Sign;
