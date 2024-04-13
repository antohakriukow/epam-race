import { FC } from 'react';
import { Buckles } from '@/components/ui';
import cn from 'clsx';

import styles from '../race-area.module.scss';
import { LineType } from '@/app/garage/types';

interface LineProps {
  type: LineType;
}

const Line: FC<LineProps> = ({ type }) => {
  const isStartLine = type === LineType.START;

  return (
    <div
      className={cn(styles.line, {
        [styles.start]: isStartLine,
      })}
    >
      <Buckles
        color='#fff'
        count={10}
      />
      <p>{isStartLine ? 'start' : 'finish'}</p>
      <Buckles
        color='#fff'
        count={10}
      />
    </div>
  );
};

export default Line;
