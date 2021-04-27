export function camelCaseToSentence(string: string) {
  const sentenceCase = string
    .split("")
    .map((e) => (e === e.toUpperCase() ? " " + e : e))
    .join("");
  return sentenceCase.charAt(0).toUpperCase() + sentenceCase.slice(1);
};

export function objectArrayToObject(array: {}[]) {
  return array.reduce(
    (accumulator, current) => ({ ...accumulator, ...current }),
    {}
  );
};
