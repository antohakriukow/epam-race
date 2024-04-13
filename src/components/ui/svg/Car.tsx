import { FC } from 'react';

interface Props {
  color: string;
}

const Car: FC<Props> = ({ color }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 616 348'
    style={{ height: '100%' }}
  >
    <rect
      x='8'
      y='32'
      width='600'
      height='280'
      rx='70'
      ry='70'
      fill='none'
      stroke={color}
      strokeWidth='24'
    />

    <path
      d='M 88,72
          L 175,82 
          Q 180,82 180,87
          Q160,176 180,257
          Q 180,262 175,262
          L 90,272 
          Q 85,272 85,267
          Q 70,176 85,77
          Q 85,72 90,72'
      fill='none'
      stroke={color}
      strokeWidth='24'
    />

    <path
      d='M 375,82
          L 465,72 
          Q 470,72 470,77
          Q490,176 470,267
          Q 470,272 465,272
          L 375,262 
          Q 370,262 370,257
          Q 390,176 370,87
          Q 370,82 375,82'
      fill='none'
      stroke={color}
      strokeWidth='24'
    />

    <path
      d='M 210,82 340,82'
      fill='none'
      stroke={color}
      strokeWidth='24'
      strokeLinecap='round'
    />

    <path
      d='M 210,262 340,262'
      fill='none'
      stroke={color}
      strokeWidth='24'
      strokeLinecap='round'
    />

    <path
      d='M 420,12 420,24'
      fill='none'
      stroke={color}
      strokeWidth='20'
      strokeLinecap='round'
    />
    <path
      d='M 420,336 420,320'
      fill='none'
      stroke={color}
      strokeWidth='20'
      strokeLinecap='round'
    />
  </svg>
);

export default Car;
