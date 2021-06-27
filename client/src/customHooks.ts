import React from "react";
import { objectArrayToObject } from "./utils";

export const useOnMount = (handler: React.EffectCallback): void =>
  React.useEffect(handler, []);

export const useOneStateObjectFromStrings = (
  strings: string[]
): {
  inputs: { [key: string]: string };
  handleChange: (value: { [key: string]: string }) => void;
} => {
  const [inputs, setInputs] = React.useState(() => {
    const inputArray = strings.map(e => ({ [e]: "" }));
    return objectArrayToObject(inputArray);
  });
  const handleChange = React.useCallback(
    (value: {}): void => setInputs({ ...inputs, ...value }),
    [inputs]
  );
  return {
    inputs,
    handleChange
  };
};

export const useOneStateObjectFromObjects = (
  defaultStates: { [key: string]: string | Date }[]
): {
  inputs: { [key: string]: string | Date };
  handleChange: (value: { [key: string]: string | Date }) => void;
} => {
  const [inputs, setInputs] = React.useState(() => {
    return objectArrayToObject(defaultStates);
  });
  const handleChange = React.useCallback(
    (value: {}): void => {
      setInputs({ ...inputs, ...value });
    },
    [inputs]
  );
  return {
    inputs,
    handleChange
  };
};

export const useToggleElemVisibility = (): {
  ref: React.RefObject<HTMLDivElement>;
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
} => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [display, setDisplay] = React.useState<boolean>(false);

  const handleClick = React.useCallback((e: MouseEvent): void => {
    if (ref.current?.contains(e.target as Node)) {
      return;
    }
    setDisplay(false);
  }, []);

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
