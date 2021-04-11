import React from "react";
import styles from "./RadioButton.module.scss";
import clsx from "clsx";

type Props = {
  changed: Function;
  id: string;
  isSelected: boolean;
  label: string;
  value: string;
};

function _RadioButtonForSass({ changed, id, isSelected, label, value }: Props) {
  return (
    <>
      <div className={clsx(styles.mdRadio, styles.mdRadioInline)}>
        <input
          id={id}
          onChange={(e) => changed(e)}
          value={value}
          type="radio"
          checked={isSelected}
        />
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      </div>
    </>
  );
}

export const RadioButtonForSass = React.memo(_RadioButtonForSass);
