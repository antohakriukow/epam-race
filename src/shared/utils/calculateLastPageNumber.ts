export const calculateLastPageNumber = (
  totalElementsCount: number,
  elementsOnPageLimit: number,
) => Math.ceil(totalElementsCount / elementsOnPageLimit);
