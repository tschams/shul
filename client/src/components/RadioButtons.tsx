import React from "react";
import { RadioButton } from "./RadioButton";

function _RadioButtons() {
  const [genderType, setGenderType] = React.useState<null | string>(null);

  const genders = ["male", "female"];

  const radioChangeHandler = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setGenderType(event.target.value),
    []
  );

  return (
    <>
      <div style={{ margin: "0 auto", padding: "4em", maxWidth: "800px" }}>
        <h3 style={{ margin: "1.5em 0 0" }}>Gender</h3>
        {genders.map((gender, i) => (
          <RadioButton
            key={i}
            changed={radioChangeHandler}
            id={i.toString()}
            isSelected={genderType === gender}
            label={gender}
            value={gender}
          />
        ))}
      </div>
      <h2 style={{ marginTop: "50px" }}>
        The selected radio button value is {genderType}
      </h2>
    </>
  );
}

export const RadioButtons = React.memo(_RadioButtons);
