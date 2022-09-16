export const generateRandomNumber = (max: number) =>
  Math.floor(Math.random() * max);

export const getRandomArrayElement = <T>(array: T[]) => {
  const numberOfArrayElements = array.length;
  return array[generateRandomNumber(numberOfArrayElements)];
};
