import React from "react";
import styles from "./Input.module.css";
import clsx from "clsx";

function _Input() {
  const inputEl = React.useRef<HTMLInputElement>(null);
  const [input, setInput] = React.useState("");

  return (
    <div
      className={styles.inputAndLabelContainer}
      onClick={() => inputEl.current && inputEl.current.focus()}
    >
      <label
        id="name-label"
        className={clsx(styles.label, {
          [styles.unTransitionLabel]: input,
        })}
        htmlFor="name"
      >
        Name
      </label>
      <div className={clsx(styles.inputContainer, styles.inputContainerHover)}>
        <input
          ref={inputEl}
          aria-invalid="false"
          className={styles.input}
          type="text"
          id="name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
}

export const Input = React.memo(_Input);
