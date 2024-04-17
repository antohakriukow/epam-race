import { getStringInPixels } from './utils/getStringInPixels';
export const GARAGE_PAGE_LIMIT = 7;
export const WINNERS_PAGE_LIMIT = 10;
export const CAR_LENGTH = 80;
export const START_LINE_WIDTH = 24;
export const PARKING_LENGTH = CAR_LENGTH + START_LINE_WIDTH;
export const GARAGE_LENGTH = 174;

export const carLength = getStringInPixels(CAR_LENGTH);
export const startCarPosition = getStringInPixels(
  -CAR_LENGTH - START_LINE_WIDTH,
);

export const MODAL_PLACEHOLDER_ID = 'modal-placeholder';
