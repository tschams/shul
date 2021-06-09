export const camelCaseToSentence = (string: string) => {
  const sentenceCase = string
    .split("")
    .map(e => (e === e.toUpperCase() ? " " + e : e))
    .join("");
  return capitalizeFirstLetter(sentenceCase);
};

export const objectArrayToObject = (array: {}[]) =>
  array.reduce((accumulator, current) => ({ ...accumulator, ...current }), {});

export const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const filterObjectOfObjectsByArray = (
  obj: { [x: string]: any },
  arr: any[]
) =>
  // eslint-disable-next-line no-sequences
  arr.reduce((a, e) => ((a[e] = obj[e]), a), {});

export const conditionalFunction = (handler: any, condition: boolean) =>
  !condition && handler;
