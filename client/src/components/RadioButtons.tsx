import React from "react";
import RadioButton from "./RadioButton";

export default React.memo(function _RadioButtons() {
  const genders = ["male", "female"];

  const [genderType, setGenderType] = React.useState<null | string>(null);
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void =>
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
            onChange={handleChange}
            id={i.toString()}
            selected={genderType === gender}
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
});
