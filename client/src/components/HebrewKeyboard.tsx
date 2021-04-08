import React from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import layout from "simple-keyboard-layouts/build/layouts/hebrew";
import styles from "./HebrewKeyboard.module.css";

function _HebrewKeyboard() {
  const onChange = (input) => {
    console.log("Input changed", input);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
  };
  return (
    <div className={styles.root}>
      <Keyboard
        className={styles.keyboard}
        onChange={onChange}
        onKeyPress={onKeyPress}
        {...layout}
      />
    </div>
  );
}

export const HebrewKeyboard = React.memo(_HebrewKeyboard);
