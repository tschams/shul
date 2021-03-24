import React from "react";
import styles from "./Login.module.css";
import clsx from "clsx";

function _Login() {
  const inputEl = React.useRef<HTMLInputElement>(null);
  const [input, setInput] = React.useState("");

  return (
    <form noValidate autoComplete="off">
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
        <div
          className={clsx(styles.inputContainer, styles.inputContainerHover)}
        >
          <input
            ref={inputEl}
            aria-invalid="false"
            className={styles.input}
            type="text"
            id="name"
            name="name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
}

export const Login = React.memo(_Login);
