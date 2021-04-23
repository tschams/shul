import React from "react";
import { Input } from "../components/Input";
import { objectArrayToObject } from "../utils";

const _Login = React.forwardRef(
  (props: {}, ref: React.Ref<HTMLFormElement | null>) => {
    const formRef = React.useRef<HTMLFormElement>(null);
    const inputNames = ["email", "password"];
    const [inputs, setInputs] = React.useState(() => {
      const inputArray = inputNames.map(e => ({ [e]: "" }));
      return objectArrayToObject(inputArray);
    });
    const handleChange = React.useCallback(
      (value: object) => setInputs({ ...inputs, ...value }),
      [inputs]
    );

    React.useImperativeHandle(ref, () => formRef.current);

    return (
      <form ref={formRef} noValidate autoComplete="off">
        {inputNames.map((e, i) => (
          <Input
            key={i}
            value={inputs[e]}
            name={e}
            onNameChange={handleChange}
          />
        ))}
      </form>
    );
  }
);

export const Login = React.memo(_Login);
