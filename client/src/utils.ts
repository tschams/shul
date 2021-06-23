export const camelCaseToSentence = (string: string): string => {
  const sentenceCase = string
    .split("")
    .map(e => (e === e.toUpperCase() ? " " + e : e))
    .join("");
  return capitalizeFirstLetter(sentenceCase);
};

export const objectArrayToObject = (
  array: { [key: string]: any }[]
): { [key: string]: any } =>
  array.reduce(
    (accumulator: {}, current: {}): {} => ({ ...accumulator, ...current }),
    {}
  );

export const capitalizeFirstLetter = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const filterObjectOfObjectsByArray = (
  obj: { [key: string]: string },
  arr: string[]
): { [key: string]: string } =>
  arr.reduce(
    (a: { [key: string]: string }, e: string): { [key: string]: string } => (
      // eslint-disable-next-line no-sequences
      (a[e] = obj[e]), a
    ),
    {}
  );

export const setObject = (
  func: (value: {}) => void,
  key: string,
  value: string
): void => {
  func({ [key]: value });
};
