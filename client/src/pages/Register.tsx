import Input from "@components/Input";
import React from "react";
import styles from "@cssPages/Register.module.css";
import Button from "@components/Button";
import { useOneStateObjectFromObjects } from "../customHooks";
import RadioButtons from "@components/RadioButtons";
import DatePicker from "@components/DatePicker";
import HebrewDatePicker from "@components/HebrewDatePicker";
import { objectArrayToStateDefaults, singleObjectToKey } from "../utils";
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value: string | null) {
  console.log("Captcha value:", value);
}

export default React.memo(function _Register(): JSX.Element {
  const RegisterButton = <Button text="Register" color="green" />;
  const Recaptcha = (
    <ReCAPTCHA
      sitekey={process.env.MIX_RECAPTCHA_SITE_KEY as string}
      onChange={v => onChange(v)}
    />
  );

  const inputDateComponents = [
    { birthDate: DatePicker },
    { jewishBirthDate: HebrewDatePicker }
  ];
  const inputComponents = [
    { firstName: Input },
    { lastName: Input },
    { hebrewName: Input },
    { genderType: RadioButtons },
    ...inputDateComponents,
    { email: Input },
    { retypeEmail: Input },
    { password: Input },
    { retypePassword: Input }
  ];
  const inputDefaults = objectArrayToStateDefaults(
    inputComponents,
    inputDateComponents
  );
  const { inputs, handleChange } = useOneStateObjectFromObjects(
    inputDefaults
  ) as {
    inputs: {
      [key: string]: string | Date;
    };
    handleChange: (value: {}) => void;
  };

  return (
    <form className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      {inputComponents.map((e: { [key: string]: any }, i: number) => {
        const key = singleObjectToKey(e);
        const Component = e[key];
        return (
          <Component
            required={key !== "hebrewName" ? true : undefined}
            key={i}
            value={inputs[key]}
            name={key}
            handleChange={handleChange}
            children={key === "hebrewName" ? key : undefined}
          />
        );
      })}
      {Recaptcha}
      {RegisterButton}
    </form>
  );
});
