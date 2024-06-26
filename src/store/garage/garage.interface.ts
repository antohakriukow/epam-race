import { ICar } from '@/shared/types/car.types';

export interface IGarageState {
  garagePageNumber: number;
  updatingCarId: string | null;
  updatingCarName: string | null;
  updatingCarColor: string;
  creatingCarName: string | null;
  creatingCarColor: string;
  winner: ICar | null;
}
