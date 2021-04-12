import React from "react";
import { HebrewKeyboard } from "../components/HebrewKeyboard";
import { Input } from "../components/Input";
import { RadioButtons } from "../components/RadioButtons";
import { SelectInput } from "../components/SelectInput";
import { objectArrayToObject } from "../utils";

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

  return (
    <form noValidate autoComplete="off">
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
