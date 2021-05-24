import React from "react";
import styles from "@cssComponents/RadioButton.module.css";
import clsx from "clsx";

type Props = {
  changed?: Function;
  id: string;
  isSelected: boolean;
  label: string;
  value?: string;
  clicked?: Function;
  forSingle?: boolean;
};

export default React.memo(function _RadioButton({
  changed,
  id,
  isSelected,
  label,
  value,
  clicked,
  forSingle
}: Props) {
  return (
    <>
      <label
        className={clsx(styles.radio, forSingle && styles.forSingle)}
        htmlFor={id}
      >
        <input
          id={id}
          onChange={e => changed && changed(e)}
          value={value}
          type="radio"
          checked={isSelected}
          onClick={() => clicked && clicked()}
        />
        <span>{label}</span>
      </label>
    </>
  );
});
