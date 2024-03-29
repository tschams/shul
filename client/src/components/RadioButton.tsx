import React from "react";
import styles from "@cssComponents/RadioButton.module.css";
import clsx from "clsx";

interface IProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  id: string;
  selected: boolean;
  label: string;
  value?: string;
  clicked?: () => void;
  forSingle?: boolean;
  name?: string;
}

export default React.memo(function _RadioButton({
  onChange,
  id,
  selected,
  label,
  value,
  clicked,
  forSingle,
  name
}: React.PropsWithoutRef<IProps>): JSX.Element {
  return (
    <>
      <label
        className={clsx(styles.radio, forSingle && styles.forSingle)}
        htmlFor={id}
      >
        <input
          id={id}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            onChange && onChange(e)
          }
          value={value}
          type="radio"
          checked={selected}
          onClick={() => clicked && clicked()}
          name={name}
        />
        <span>{label}</span>
      </label>
    </>
  );
});
