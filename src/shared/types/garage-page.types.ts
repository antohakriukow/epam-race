import { IEngine } from '@/shared/types/engine.types';

export const enum LineType {
  START = 'start',
  FINISH = 'finish',
}

export interface ISingleRaceData {
  engine: IEngine;
  handleStart: () => void;
  handleStop: () => void;
}
