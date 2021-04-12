import React from "react";
import Select from "react-select";

const options = ["chocolate", "strawberry", "vanilla"];

const optionsForSelect = options.map((option) => ({
  value: option,
  label: option.charAt(0).toUpperCase() + option.slice(1),
}));

type selected = { value: string; label: string } | null;

function _SelectInput() {
  const [selectedOption, setSelectedOption] = React.useState<selected>(null);

  const handleChange = React.useCallback((selectedOption: selected) => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  }, []);
  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={optionsForSelect}
    />
  );
}

export const SelectInput = React.memo(_SelectInput);
