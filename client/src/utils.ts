export const camelCaseToSentence = (string: string): string => {
  const sentenceCase = string
    .split("")
    .map(e => (e === e.toUpperCase() ? " " + e : e))
    .join("");
  return capitalizeFirstLetter(sentenceCase);
};

export const objectArrayToObject = (array: {}[]): { [x: string]: any } =>
  array.reduce((accumulator, current) => ({ ...accumulator, ...current }), {});

export const capitalizeFirstLetter = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const filterObjectOfObjectsByArray = (
  obj: { [x: string]: string },
  arr: string[]
): { [x: string]: string } =>
  arr.reduce(
    (a: { [x: string]: string }, e: string): { [x: string]: string } => (
      // eslint-disable-next-line no-sequences
      (a[e] = obj[e]), a
    ),
    {}
  );
