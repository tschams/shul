import React from "react";
import { conditionalFunction, objectArrayToObject } from "./utils";

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

export const useToggleElemVisibility = (condition = false) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [display, setDisplay] = React.useState(false);

  const handleClick = React.useCallback(
    conditionalFunction((e: MouseEvent) => {
      if (ref.current?.contains(e.target as Node)) {
        return;
      }
      setDisplay(false);
    }, condition),
    []
  );

  useOnMount(
    conditionalFunction(() => {
      document.addEventListener("mousedown", e => handleClick(e));
      return () => {
        document.removeEventListener("mousedown", e => handleClick(e));
      };
    }, condition)
  );

  return {
    ref,
    display,
    setDisplay
  };
};
