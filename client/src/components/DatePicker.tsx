import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IDateForm } from "../global";
import styles from "@cssComponents/DatePicker.module.css";

export default React.memo(function _DatePicker({
  value,
  handleChange,
  name
}: React.PropsWithoutRef<IDateForm>): JSX.Element {
  return (
    <div className={styles.grid}>
      <h4 className={styles.title}>Birthday</h4>
      <DatePicker
        selected={value}
        onChange={(date: Date | null) => handleChange({ [name]: date })}
      />
    </div>
  );
});
