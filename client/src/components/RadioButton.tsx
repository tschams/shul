import React from "react";
import styles from "@cssComponents/RadioButton.module.css";

type Props = {
  changed: Function;
  id: string;
  isSelected: boolean;
  label: string;
  value: string;
};

export default React.memo(function _RadioButton({
  changed,
  id,
  isSelected,
  label,
  value
}: Props) {
  return (
    <>
      <label className={styles.radio} htmlFor={id}>
        <input
          id={id}
          onChange={e => changed(e)}
          value={value}
          type="radio"
          checked={isSelected}
        />
        <span>{label}</span>
      </label>
    </>
  );
});
