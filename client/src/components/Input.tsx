import React from "react";
import styles from "@cssComponents/Input.module.css";
import clsx from "clsx";
import { camelCaseToSentence, setObject } from "../utils";
import HebrewKeyboard from "./HebrewKeyboard";
import { useToggleElemVisibility } from "../customHooks";

interface IProps {
  value: string;
  name: string;
  handleChange: (value: {}) => void;
  children?: false | string;
  backgroundColor?: string | undefined;
  required: boolean;
}

export default React.memo(function _Input({
  value,
  handleChange,
  name,
  children,
  backgroundColor,
  required
}: React.PropsWithChildren<IProps>): JSX.Element {
  const inputProps = { name, value };
  const inputEl = React.useRef<HTMLInputElement>(null);
  const handleLocalChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      !children
        ? setObject(handleChange, e.target.name, e.target.value)
        : setObject(handleChange, children as string, e.toString());
    },
    [children, handleChange]
  );

  const { ref, display, setDisplay } = useToggleElemVisibility();

  const handleClick = React.useCallback((): void => {
    inputEl.current?.focus();
    children && setDisplay(true);
  }, [children, setDisplay]);
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
      {children && (
        <div ref={ref}>
          <HebrewKeyboard display={display} handleChange={handleLocalChange} />
        </div>
      )}
    </div>
  );
});
