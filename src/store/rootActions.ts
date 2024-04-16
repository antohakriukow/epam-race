import { setWinnersPageNumber } from './winners/winners.slice';

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

import {
  setEngineStatus,
  setRaceData,
  clearEnginesState,
} from './engines/engines.slice';

export const rootActions = {
  setWinnersPageNumber,

  setGaragePageNumber,
  setUpdatingCarId,
  setUpdatingCarName,
  setUpdatingCarColor,
  setCreatingCarName,
  setCreatingCarColor,
  clearCreatingCarStore,
  clearUpdatingCarStore,

  setEngineStatus,
  setRaceData,
  clearEnginesState,
};
