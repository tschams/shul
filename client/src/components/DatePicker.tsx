import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IProps {
  value: Date;
  name: string;
  handleChange: (value: {}) => void;
}

export default React.memo(function _DatePicker({
  value,
  handleChange,
  name
}: React.PropsWithoutRef<IProps>): JSX.Element {
  return (
    <DatePicker
      selected={value}
      onChange={(date: Date | null) => handleChange({ [name]: date })}
    />
  );
});
