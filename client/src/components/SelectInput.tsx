import React from "react";
import ArrowDropDownIcon from "../icons/ArrowDropDownIcon.svg";

function _SelectInput() {
  return (
    <>
      <img src={ArrowDropDownIcon} alt="" />
    </>
  );
}

export const SelectInput = React.memo(_SelectInput);
