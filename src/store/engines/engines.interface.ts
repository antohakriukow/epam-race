import { IEngine } from '@/shared/types/engine.types';

export interface IEngineState {
  engines: { [key: string]: IEngine };
}
