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
};
