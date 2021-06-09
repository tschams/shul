import React from "react";
import styles from "@cssComponents/Button.module.css";
import clsx from "clsx";
import { capitalizeFirstLetter } from "../utils";

type Props = {
  color: string;
  width?: string;
  text: string;
  icon?: React.ReactNode;
};

export default React.memo(function _Button({
  text,
  color,
  width,
  icon
}: Props) {
  const offset = React.useCallback((element, position: string): number => {
    let offset = 0;
    while (element) {
      offset += element[`offset${capitalizeFirstLetter(position)}`];
      element = element.offsetParent;
    }
    return offset;
  }, []);

  const ripple = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      const button = event.currentTarget;

      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      const y = offset(button, "top");
      const x = offset(button, "left");

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - (x + radius)}px`;
      circle.style.top = `${event.clientY - (y + radius)}px`;
      circle.classList.add("ripple");

      const ripple = button.getElementsByClassName("ripple")[0];

      if (ripple) {
        ripple.remove();
      }

      button.appendChild(circle);
    },
    [offset]
  );

  return (
    <>
      <button
        className={clsx(styles.button, styles[color], width && styles[width])}
        onClick={ripple}
      >
        <span>{icon}</span>
        <span>{text}</span>
      </button>
    </>
  );
});
