import React from "react";
import styles from "@cssComponents/RadioButton.module.css";
import clsx from "clsx";

type Props = {
  onChange?: Function;
  id: string;
  selected: boolean;
  label: string;
  value?: string;
  clicked?: Function;
  forSingle?: boolean;
};

export default React.memo(function _RadioButton({
  onChange,
  id,
  selected,
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
          onChange={e => onChange && onChange(e)}
          value={value}
          type="radio"
          checked={selected}
          onClick={() => clicked && clicked()}
        />
        <span>{label}</span>
      </label>
    </>
  );
});
