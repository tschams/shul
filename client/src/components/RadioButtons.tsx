import React from "react";
import RadioButton from "./RadioButton";
import styles from "@cssComponents/RadioButtons.module.css";
import { setObject } from "../utils";

interface IProps {
  handleChange: (value: {}) => void;
  value: string;
  name?: string;
}

export default React.memo(function _RadioButtons({
  handleChange,
  value,
  name
}: React.PropsWithChildren<IProps>): JSX.Element {
  const genders = ["male", "female"];

  const handleLocalChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setObject(handleChange, e.target.name, e.target.value);
    },
    [handleChange]
  );

  return (
    <>
      <h3 className={styles.title}>Gender</h3>
      {genders.map((gender, i) => (
        <RadioButton
          key={i}
          onChange={handleLocalChange} //fix for login
          id={i.toString()}
          selected={value === gender}
          label={gender}
          value={gender}
          name={name}
        />
      ))}
    </>
  );
});
