export function camelCaseToSentence(string: string) {
  const sentenceCase = string
    .split("")
    .map((e) => (e === e.toUpperCase() ? " " + e : e))
    .join("");
  return capitalizeFirstLetter(sentenceCase);
};

export function objectArrayToObject(array: {}[]) {
  return array.reduce(
    (accumulator, current) => ({ ...accumulator, ...current }),
    {}
  );
};

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
