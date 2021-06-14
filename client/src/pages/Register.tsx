import Input from "@components/Input";
import React from "react";
import styles from "@cssPages/Register.module.css";
import Button from "@components/Button";
import { useOneStateObjectFromStrings } from "../customHooks";

//unselect login/register after registering
export default React.memo(function _Register() {
  const RegisterButton = <Button text="Register" color="green" />;
  const nodes = [
    "firstName",
    "lastName",
    "hebrewName"
    // "email",
    // "retypeEmail",
    // "password",
    // "retypePassword"
  ];
  const { inputs, handleChange } = useOneStateObjectFromStrings(nodes);

  return (
    <form className={styles.container} autoComplete="off">
      <h1 className={styles.title}>Register</h1>
      {nodes.map((e, i) => (
        <Input
          required={e !== "hebrewName" && true}
          key={i}
          value={inputs[e]}
          name={e}
          handleChange={handleChange}
          children={e === "hebrewName" && e}
        />
      ))}
      {RegisterButton}
    </form>
  );
});
