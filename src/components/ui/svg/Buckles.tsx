import { FC } from 'react';

interface Props {
  color: string;
  count: number;
}

const Buckles: FC<Props> = ({ color, count }) => {
  const size = 16;
  const step = 11;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`0 0 ${size} ${size + step * count}`}
      style={{ height: '100%' }}
    >
      <rect
        width='100%'
        height='100%'
        fill='#182051'
      />
      {Array.from({ length: count }).map((_, idx) => (
        <path
          key={idx}
          d={`M 2, ${step * idx}
          L 16, ${step + step * idx}
          L 16, ${step * idx + size}
          L 2, ${step * idx + size - step}
          Z`}
          fill='none'
          stroke={color}
          strokeWidth='2'
        />
      ))}
    </svg>
  );
};

export default Buckles;
