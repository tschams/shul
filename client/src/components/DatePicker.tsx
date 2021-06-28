import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IDateForm } from "../global";

export default React.memo(function _DatePicker({
  value,
  handleChange,
  name
}: React.PropsWithoutRef<IDateForm>): JSX.Element {
  return (
    <div>
      Birthday
      <DatePicker
        selected={value}
        onChange={(date: Date | null) => handleChange({ [name]: date })}
      />
    </div>
  );
});
