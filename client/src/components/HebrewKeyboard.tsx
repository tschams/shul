import React from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
// @ts-ignore: Could not find a declaration file for module 'simple-keyboard-layouts/build/layouts/hebrew'
import layout from "simple-keyboard-layouts/build/layouts/hebrew";
import styles from "@cssComponents/HebrewKeyboard.module.css";
import clsx from "clsx";
import { useToggleElemVisibility } from "../customHooks";

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  displayProp: boolean;
  resetDisplay: React.Dispatch<React.SetStateAction<boolean>>;
};

export default React.memo(function _HebrewKeyboard({
  handleChange,
  displayProp,
  resetDisplay
}: Props) {
  const { ref, display, setDisplay } = useToggleElemVisibility(resetDisplay);
  React.useEffect((): void => {
    setDisplay(displayProp);
  }, [displayProp, setDisplay]);
  return (
    <div
      id="keyboard"
      className={clsx(styles.root, { [styles.hide]: !display })}
      ref={ref}
    >
      <Keyboard
        className={styles.keyboard}
        onChange={handleChange}
        display={{
          "{bksp}": "Bksp",
          "{enter}": "Enter",
          "{space}": "Space",
          "{lock}": "Caps",
          "{shift}": "Shift",
          "{tab}": "Tab"
        }}
        {...layout}
      />
    </div>
  );
});
