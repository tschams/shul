import React from "react";
import { objectArrayToObject } from "./utils";

export const useOnMount = (handler: React.EffectCallback) =>
  React.useEffect(handler, []);

export const useOneStateObjectFromStrings = (strings: string[]) => {
  const [inputs, setInputs] = React.useState(() => {
    const inputArray = strings.map(e => ({ [e]: "" }));
    return objectArrayToObject(inputArray);
  });
  const handleChange = React.useCallback(
    (value: object) => setInputs({ ...inputs, ...value }),
    [inputs]
  );
  return {
    inputs,
    handleChange
  };
};
