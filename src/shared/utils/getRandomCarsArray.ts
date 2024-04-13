import { carColors } from '../mocks/car-colors';
import { carNames } from '../mocks/car-names';
import { ICarDTO } from '../types/car.types';

export const getRandomCarsArray = (): ICarDTO[] =>
  Array.from({ length: 100 }, () => {
    const { brand, models } =
      carNames[Math.floor(Math.random() * carNames.length)];
    const model = models[Math.floor(Math.random() * models.length)];
    const color = carColors[Math.floor(Math.random() * carColors.length)];
    return { name: `${brand} ${model}`, color };
  });
