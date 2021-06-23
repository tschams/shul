import Input from "@components/Input";
import React from "react";
import styles from "@cssPages/Register.module.css";
import Button from "@components/Button";
import { useOneStateObjectFromStrings } from "../customHooks";
import RadioButtons from "@components/RadioButtons";

//unselect login/register after registering
export default React.memo(function _Register(): JSX.Element {
  const RegisterButton = <Button text="Register" color="green" />;
  const inputNames = ["firstName", "genderType"];
  const nodes = [
    ...inputNames,
    RadioButtons
    // "lastName",
    // "hebrewName"
    // "email",
    // "retypeEmail",
    // "password",
    // "retypePassword"
  ];
  const { inputs, handleChange } = useOneStateObjectFromStrings(inputNames) as {
    inputs: {
      [key: string]: string;
    };
    handleChange: (value: {}) => void;
  };

  return (
    <form className={styles.container} autoComplete="off">
      <h1 className={styles.title}>Register</h1>
      {inputNames.map((
        e: string /* | React.NamedExoticComponent<object> */,
        i
      ) =>
        e !== "genderType" ? (
          <Input
            required={e !== "hebrewName" && true}
            key={i}
            value={inputs[e]}
            name={e}
            handleChange={handleChange}
            children={e === "hebrewName" && e}
          />
        ) : (
          <RadioButtons
            name={e}
            value={inputs[e]}
            handleChange={handleChange}
            key={i}
          />
        )
      )}
      {RegisterButton}
    </form>
  );
});
