import React from "react";
import styles from "@cssComponents/Input.module.css";
import clsx from "clsx";
import { camelCaseToSentence, setAndLiftUpObject } from "../utils";
import HebrewKeyboard from "./HebrewKeyboard";
import { useToggleElemVisibility } from "../customHooks";
import { IInputForm } from "../global";

interface IProps extends IInputForm {
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
        ? setAndLiftUpObject(handleChange, e.target.name, e.target.value)
        : setAndLiftUpObject(handleChange, children as string, e.toString());
    },
    [children, handleChange]
  );

  const { ref, display, setDisplay } = useToggleElemVisibility();

  const handleClick = React.useCallback((): void => {
    inputEl.current?.focus();
    children && setDisplay(true);
  }, [children, setDisplay]);
  return (
    //make sure this div does not extend because clicking on that extension would be part of div to close keyboard unless second ref
    <div ref={ref}>
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
            type="search"
            id="name"
            {...inputProps}
            onChange={handleLocalChange}
            autoComplete="off"
          />
        </div>
      </div>
      {children && (
        <div>
          <HebrewKeyboard display={display} handleChange={handleLocalChange} />
        </div>
      )}
    </div>
  );
});
