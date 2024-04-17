import { CSSProperties, FC } from 'react';
import cn from 'clsx';
import { Buckles } from '@/components/ui';
import { getStringInPixels } from '@/shared/utils/getStringInPixels';
import {
  CAR_LENGTH,
  GARAGE_LENGTH,
  START_LINE_WIDTH,
} from '@/shared/constants';

import styles from './line.module.scss';
import { LineType } from '@/shared/types/garage-page.types';

interface LineProps {
  type: LineType;
}

const Line: FC<LineProps> = ({ type }) => {
  const isStartLine = type === LineType.START;

  const width = { width: getStringInPixels(START_LINE_WIDTH) };
  const startLineCSSProps = { left: getStringInPixels(GARAGE_LENGTH) };
  const finishLineCSSProps = { right: getStringInPixels(CAR_LENGTH) };
  const position = isStartLine ? startLineCSSProps : finishLineCSSProps;
  const CSSProps: CSSProperties = { ...width, ...position };

  return (
    <div
      className={cn(styles.line, {
        [styles.start]: isStartLine,
      })}
      style={CSSProps}
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
