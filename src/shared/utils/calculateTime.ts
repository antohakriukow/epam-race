import { ICar } from '../types/car.types';

export const calculateRaceResult = (winner: ICar): number => {
  if (!winner.distance || !winner.velocity) return 999999;
  return +(winner.distance / winner.velocity / 1000).toPrecision(2);
};
