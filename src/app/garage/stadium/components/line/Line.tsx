import { FC } from 'react';
import cn from 'clsx';
import { Buckles } from '@/components/ui';
import { LineType } from '@/app/garage/types';

import styles from './line.module.scss';

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
        count={20}
      />
      <p>{isStartLine ? 'start' : 'finish'}</p>
      <Buckles
        color='#fff'
        count={20}
      />
    </div>
  );
};

export default Line;
