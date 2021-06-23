import React from "react";
import {
  ReactJewishDatePicker,
  BasicJewishDay,
  BasicJewishDate
} from "react-jewish-datepicker";

export default React.memo(function _HebrewDatePicker(): JSX.Element {
  const [basicJewishDay, setBasicJewishDay] = React.useState<BasicJewishDay>();
  const basicJewishDate: BasicJewishDate = {
    day: 13,
    monthName: "Elul",
    year: 5788
  };

  return (
    <>
      <div>
        Hebrew:
        <ReactJewishDatePicker
          value={basicJewishDate}
          isHebrew
          onClick={(day: BasicJewishDay) => {
            setBasicJewishDay(day);
          }}
        />
      </div>
    </>
  );
});
