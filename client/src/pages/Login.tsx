import React from "react";
import { Input } from "../components/Input";
import { objectArrayToObject } from "../utils";

function _Login() {
  const inputNames = ["firstName", "lastName"];
  const [inputs, setInputs] = React.useState(() => {
    const inputArray = inputNames.map((e) => ({ [e]: "" }));
    return objectArrayToObject(inputArray);
  });
  const handleChange = React.useCallback(
    (value: object) => setInputs({ ...inputs, ...value }),
    [inputs]
  );

  return (
    <form noValidate autoComplete="off">
      {inputNames.map((e, i) => (
        <Input key={i} value={inputs[e]} name={e} onNameChange={handleChange} />
      ))}
    </form>
  );
}

export const Login = React.memo(_Login);
