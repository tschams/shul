import React from "react";
import styles from "./Input.module.css";
import clsx from "clsx";
import { camelCaseToSentence } from "../utils";

type Props = { value: string; name: string; onNameChange: Function };

function _Input({ value, onNameChange, name }: Props) {
  const inputProps = { value, name };
  const inputEl = React.useRef<HTMLInputElement>(null);
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      onNameChange({ [e.target.name]: e.target.value }),
    [onNameChange]
  );

  return (
    <div
      className={styles.inputAndLabelContainer}
      onClick={() => inputEl.current && inputEl.current.focus()}
    >
      <label
        id="name-label"
        className={clsx(styles.label, {
          [styles.unTransitionLabel]: value,
        })}
        htmlFor="name"
      >
        {camelCaseToSentence(name)}
      </label>
      <div className={clsx(styles.inputContainer, styles.inputContainerHover)}>
        <input
          ref={inputEl}
          aria-invalid="false"
          className={styles.input}
          type="text"
          id="name"
          {...inputProps}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export const Input = React.memo(_Input);
