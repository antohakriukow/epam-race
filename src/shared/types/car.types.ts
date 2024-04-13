export interface ICar {
  id: string;
  name: string;
  color: string;
  wins?: number;
  time?: number;
  velocity?: number;
  distance?: number;
}

export interface ICarDTO extends Pick<ICar, 'name' | 'color'> {}
export interface IWinnerDTO extends Pick<ICar, 'id' | 'wins' | 'time'> {}

export interface ICarId extends Pick<ICar, 'id'> {}
