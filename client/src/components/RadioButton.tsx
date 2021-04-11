import React from "react";
import styles from "./RadioButton.module.css";

type Props = {
  changed: Function;
  id: string;
  isSelected: boolean;
  label: string;
  value: string;
};

function _RadioButton({ changed, id, isSelected, label, value }: Props) {
  return (
    <>
      <label className={styles.radio} htmlFor={id}>
        <input
          id={id}
          onChange={(e) => changed(e)}
          value={value}
          type="radio"
          checked={isSelected}
        />
        <span>{label}</span>
      </label>
    </>
  );
}

export const RadioButton = React.memo(_RadioButton);
