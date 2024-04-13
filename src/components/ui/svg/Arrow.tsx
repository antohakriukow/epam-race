import { FC } from 'react';

interface Props {
  color: string;
}

const Arrow: FC<Props> = ({ color }) => (
  <svg
    style={{ height: '100%' }}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 342 516'
  >
    <path
      d='M 12,12
        L 164,12
        Q 168,12 168,16
        L 168,16
        L 324,254
        Q 328,258 324,262
        L 168,500
        Q 168,504 164,504
        L 16,504
        Q 11,504 12,500
        L 12,500
        L 164,254
        Q 168,250 164,246
        L 12,16
        Q 11,11 12,12
        L 124,12'
      fill='none'
      stroke={color}
      strokeWidth='42'
    />
    <path
      d='M 12,12
        L 164,12
        Q 168,12 168,16
        L 168,16
        L 324,254
        Q 328,258 324,262
        L 168,500
        Q 168,504 164,504
        L 16,504
        Q 11,504 12,500
        L 12,500
        L 164,254
        Q 168,250 164,246
        L 12,16
        Q 11,11 12,12
        L 124,12'
      fill='none'
      stroke='white'
      strokeWidth='10'
    />
  </svg>
);

export default Arrow;
