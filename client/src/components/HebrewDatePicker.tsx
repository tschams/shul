import React from "react";
import { BasicJewishDay, ReactJewishDatePicker } from "react-jewish-datepicker";

interface IProps {
  value: Date;
  name: string;
  handleChange: (value: {}) => void;
}

export default React.memo(function _HebrewDatePicker({
  value,
  handleChange,
  name
}: React.PropsWithoutRef<IProps>): JSX.Element {
  return (
    <>
      <div>
        Hebrew:
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
