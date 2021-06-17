import React from "react";
import Select from "react-select";

const options = ["chocolate", "strawberry", "vanilla"];

const selectOptions = options.map((option: string): {
  value: string;
  label: string;
} => ({
  value: option,
  label: option.charAt(0).toUpperCase() + option.slice(1)
}));

type selected = { value: string; label: string } | null;

export default React.memo(function _SelectInput() {
  const [selected, setSelected] = React.useState<selected>(null);

  const handleChange = React.useCallback((selected: selected) => {
    setSelected(selected);
    console.log(`Option selected:`, selected);
  }, []);
  return (
    <Select value={selected} onChange={handleChange} options={selectOptions} />
  );
});
