import React from "react";
import styles from "@cssComponents/Input.module.css";
import clsx from "clsx";
import { camelCaseToSentence } from "../utils";
import HebrewKeyboard from "./HebrewKeyboard";

type Props = {
  value: string;
  name: string;
  handleChange: Function;
  children?: false | string;
  backgroundColor?: string | undefined;
  required: boolean;
};

export default React.memo(function _Input({
  value,
  handleChange,
  name,
  children,
  backgroundColor,
  required
}: Props) {
  const inputProps = { value, name };

  const inputEl = React.useRef<HTMLInputElement>(null);
  const handleLocalChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      !children
        ? handleChange({ [e.target.name]: e.target.value })
        : handleChange({ [children]: e });
    },
    [handleChange, children]
  );
  const [display, setDisplay] = React.useState(false);
  const handleClick = React.useCallback(() => {
    inputEl.current?.focus();
    children && setDisplay(true);
  }, [children]);

  return (
    <div>
      <div className={styles.inputAndLabelContainer} onClick={handleClick}>
        <label
          id="name-label"
          className={clsx(styles.label, {
            [styles.unTransitionLabel]: value
          })}
          htmlFor="name"
        >
          {camelCaseToSentence(name)}
          {required && " *"}
        </label>
        <div
          style={
            { "--background-color": backgroundColor } as React.CSSProperties
          }
          className={clsx(styles.inputContainer, styles.inputContainerHover)}
        >
          <input
            disabled={children ? true : undefined}
            ref={inputEl}
            aria-invalid="false"
            className={styles.input}
            type="text"
            id="name"
            {...inputProps}
            onChange={handleLocalChange}
          />
        </div>
      </div>
      {display && children && (
        <HebrewKeyboard handleChange={handleLocalChange} />
      )}
    </div>
  );
});
