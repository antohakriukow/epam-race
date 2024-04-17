import {
  setEngineStatus,
  setRaceData,
  clearEnginesState,
  setWinner,
} from './engines/engines.slice';

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
  clearEnginesState,

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
