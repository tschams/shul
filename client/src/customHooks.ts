import React from "react";
import { objectArrayToObject } from "./utils";

export const useOnMount = (handler: React.EffectCallback): void =>
  React.useEffect(handler, []);

export const useOneStateObjectFromStrings = (
  strings: string[]
): { inputs: {}; handleChange: (value: object) => void } => {
  const [inputs, setInputs] = React.useState(() => {
    const inputArray = strings.map(e => ({ [e]: "" }));
    return objectArrayToObject(inputArray);
  });
  const handleChange = React.useCallback(
    (value: object): void => setInputs({ ...inputs, ...value }),
    [inputs]
  );
  return {
    inputs,
    handleChange
  };
};

export const useToggleElemVisibility = (
  resetParentDisplay:
    | React.Dispatch<React.SetStateAction<boolean>>
    | undefined = undefined
): {
  ref: React.RefObject<HTMLDivElement>;
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
} => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [display, setDisplay] = React.useState(false);

  const handleClick = React.useCallback(
    (e: MouseEvent) => {
      if (ref.current?.contains(e.target as Node)) {
        return;
      }
      setDisplay(false);
      resetParentDisplay && resetParentDisplay(false);
    },
    [resetParentDisplay]
  );
  useOnMount(() => {
    document.addEventListener("mousedown", e => handleClick(e));
    return () => {
      document.removeEventListener("mousedown", e => handleClick(e));
    };
  });
  return {
    ref,
    display,
    setDisplay
  };
};
