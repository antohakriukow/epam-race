import { ICar } from '@/shared/types/car.types';
import { IEngine } from '@/shared/types/engine.types';

export interface IRaceState {
  engines: { [key: string]: IEngine };
  winner: ICar | null;
}
