import React from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import layout from "simple-keyboard-layouts/build/layouts/hebrew";
import styles from "@cssComponents/HebrewKeyboard.module.css";

type Props = {
  handleChange: Function;
};

export default React.memo(function _HebrewKeyboard({ handleChange }: Props) {
  return (
    <div id="keyboard" className={styles.root}>
      <Keyboard
        className={styles.keyboard}
        onChange={handleChange}
        {...layout}
        display={{
          "{bksp}": "Bksp",
          "{enter}": "Enter",
          "{space}": "Space",
          "{lock}": "Caps",
          "{shift}": "Shift",
          "{tab}": "Tab"
        }}
      />
    </div>
  );
});
