import { IDateForm } from "../global";
import React from "react";
import { BasicJewishDay, ReactJewishDatePicker } from "react-jewish-datepicker";

export default React.memo(function _HebrewDatePicker({
  value,
  handleChange,
  name
}: React.PropsWithoutRef<IDateForm>): JSX.Element {
  return (
    <>
      <div>
        Hebrew Birthday
        <ReactJewishDatePicker
          value={value}
          isHebrew
          onClick={(day: BasicJewishDay) =>
            handleChange({ [name]: day.jewishDate })
          }
        />
      </div>
    </>
  );
});
