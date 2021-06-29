import { IDateForm } from "../global";
import React from "react";
import { BasicJewishDay, ReactJewishDatePicker } from "react-jewish-datepicker";
import styles from "@cssComponents/HebrewDatePicker.module.css";

export default React.memo(function _HebrewDatePicker({
  value,
  handleChange,
  name
}: React.PropsWithoutRef<IDateForm>): JSX.Element {
  return (
    <div className={styles.grid}>
      <h4 className={styles.title}>Hebrew Birthday</h4>
      <ReactJewishDatePicker
        value={value}
        isHebrew
        onClick={(day: BasicJewishDay) =>
          handleChange({ [name]: day.jewishDate })
        }
      />
    </div>
  );
});
