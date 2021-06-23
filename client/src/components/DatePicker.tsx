import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default React.memo(function _DatePicker(): JSX.Element {
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date | null) => setStartDate(date)}
    />
  );
});
