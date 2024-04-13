export const calculateLastPageNumber = (
  totalElementsCount: number,
  elementsOnPageLimit: number,
) => Math.floor(totalElementsCount / elementsOnPageLimit + 1);
