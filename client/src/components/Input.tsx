import React from "react";
import styles from "@cssComponents/Input.module.css";
import clsx from "clsx";
import { camelCaseToSentence } from "../utils";

type Props = {
  value: string;
  name: string;
  onNameChange: Function;
  children?: React.ReactNode;
};

export default React.memo(function _Input({
  value,
  onNameChange,
  name,
  children
}: Props) {
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
      onClick={() => inputEl.current?.focus()}
    >
      <label
        id="name-label"
        className={clsx(styles.label, {
          [styles.unTransitionLabel]: value
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
        {children && <span>{children}</span>}
      </div>
    </div>
  );
});
