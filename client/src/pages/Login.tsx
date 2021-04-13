import React from "react";
import { HebrewKeyboard } from "../components/HebrewKeyboard";
import { Input } from "../components/Input";
import { RadioButtons } from "../components/RadioButtons";
import { SelectInput } from "../components/SelectInput";
import { objectArrayToObject } from "../utils";
import ReCAPTCHA from "react-google-recaptcha";

function _Login() {
  const inputNames = ["firstName", "lastName", "hebrewName"];
  const [inputs, setInputs] = React.useState(() => {
    const inputArray = inputNames.map((e) => ({ [e]: undefined }));
    return objectArrayToObject(inputArray);
  });
  const handleChange = React.useCallback(
    (value: object) => setInputs({ ...inputs, ...value }),
    [inputs]
  );
  function onChange(value: string | null) {
    console.log("Captcha value:", value);
  }

  return (
    <form noValidate autoComplete="off">
      <ReCAPTCHA
        sitekey={process.env.MIX_RECAPTCHA_SITE_KEY as string}
        onChange={(v) => onChange(v)}
      />
      <SelectInput />
      <RadioButtons />
      {inputNames.map((e, i) => (
        <Input
          key={i}
          value={inputs[e]}
          name={e}
          onNameChange={handleChange}
          children={e === "hebrewName" && <HebrewKeyboard />}
        />
      ))}
    </form>
  );
}

export const Login = React.memo(_Login);
