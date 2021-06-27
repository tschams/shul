import React from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
// @ts-ignore: Could not find a declaration file for module 'simple-keyboard-layouts/build/layouts/hebrew'
import layout from "simple-keyboard-layouts/build/layouts/hebrew";
import styles from "@cssComponents/HebrewKeyboard.module.css";
import clsx from "clsx";

interface IProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  display: boolean;
}

export default React.memo(function _HebrewKeyboard({
  handleChange,
  display
}: React.PropsWithoutRef<IProps>): JSX.Element {
  return (
    <div
      id="keyboard"
      className={clsx(styles.root, { [styles.hide]: !display })}
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
