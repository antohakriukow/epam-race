import {
  setEngineStatus,
  setRaceData,
  clearRaceState,
  setWinner,
} from './race/race.slice';

import {
  setGaragePageNumber,
  setUpdatingCarId,
  setUpdatingCarName,
  setUpdatingCarColor,
  setCreatingCarName,
  setCreatingCarColor,
  clearCreatingCarStore,
  clearUpdatingCarStore,
} from './garage/garage.slice';

import { setWinnersPageNumber } from './winners/winners.slice';

export const rootActions = {
  setEngineStatus,
  setRaceData,
  clearRaceState,

  setGaragePageNumber,
  setUpdatingCarId,
  setUpdatingCarName,
  setUpdatingCarColor,
  setCreatingCarName,
  setCreatingCarColor,
  setWinner,
  clearCreatingCarStore,
  clearUpdatingCarStore,

  setWinnersPageNumber,
};
