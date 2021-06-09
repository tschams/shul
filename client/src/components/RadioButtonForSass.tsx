import React from "react";
import styles from "@cssComponents/RadioButton.module.scss";
import clsx from "clsx";

type Props = {
  changed: Function;
  id: string;
  selected: boolean;
  label: string;
  value: string;
};

export default React.memo(function _RadioButtonForSass({
  changed,
  id,
  selected,
  label,
  value
}: Props) {
  return (
    <>
      <div className={clsx(styles.mdRadio, styles.mdRadioInline)}>
        <input
          id={id}
          onChange={e => changed(e)}
          value={value}
          type="radio"
          checked={selected}
        />
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      </div>
    </>
  );
});
