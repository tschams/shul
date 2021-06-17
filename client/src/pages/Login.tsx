import React from "react";
import Input from "@components/Input";
import { filterObjectOfObjectsByArray, objectArrayToObject } from "../utils";
import styles from "@cssComponents/Login.module.css";
import Button from "@components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import clsx from "clsx";
import RadioButton from "@components/RadioButton";
import { Link } from "react-router-dom";
import { useOneStateObjectFromStrings } from "../customHooks";

interface IProps {
  closeDisplay: () => void;
  navLinkSelected: () => void;
}

type ButtonProps = {
  color: string;
  width: string | undefined;
  text: string;
  icon: undefined | JSX.Element;
};

export default React.memo(function _Login({
  closeDisplay,
  navLinkSelected
}: React.PropsWithChildren<IProps>): JSX.Element {
  const inputNames = ["email", "password"];
  const icons = [faGoogle, faFacebookF];
  const iconNodes: {
    [x: string]: JSX.Element;
  } = objectArrayToObject(
    icons.map((i): { [x: string]: JSX.Element } => {
      return {
        [i.iconName]: <FontAwesomeIcon icon={i} />
      };
    })
  );
  const duplicateClasses = [
    "flex",
    "noWrap",
    "alignCenter",
    "font14",
    "highlightedGreen"
  ];
  const duplicateStyles: {
    [x: string]: string;
  } = filterObjectOfObjectsByArray(styles, duplicateClasses);

  const buttons = ["login", "googleLogin", "facebookLogin"];
  const buttonTexts = {
    login: "Login",
    googleLogin: "Google Login",
    facebookLogin: "Facebook Login"
  } as { [x: string]: string };

  const buttonColors = {
    login: "green",
    googleLogin: "lightBlue",
    facebookLogin: "blue"
  } as { [x: string]: string };

  const buttonIcons = {
    login: undefined,
    googleLogin: iconNodes["google"],
    facebookLogin: iconNodes["facebook-f"]
  } as { [x: string]: undefined | JSX.Element };

  const buttonProps: { [x: string]: ButtonProps } = objectArrayToObject(
    buttons.map((button: string): { [x: string]: ButtonProps } => ({
      [button]: {
        text: buttonTexts[button],
        color: buttonColors[button],
        icon: buttonIcons[button],
        width: button === "login" ? undefined : "eighty"
      }
    }))
  );
  const loginButton = (): JSX.Element => <Button {...buttonProps["login"]} />;
  const loginGoogleButton = (): JSX.Element => (
    <Button {...buttonProps["googleLogin"]} />
  );
  const loginFacebookButton = (): JSX.Element => (
    <Button {...buttonProps["facebookLogin"]} />
  );

  const handleClick = React.useCallback((): void => {
    closeDisplay();
    navLinkSelected();
  }, [closeDisplay, navLinkSelected]);

  const hr: JSX.Element = <hr className={styles.line} />;
  const divider = (): JSX.Element => (
    <div className={clsx(duplicateStyles.flex, styles.fullWidth)}>
      {hr}
      <i>or</i>
      {hr}
    </div>
  );

  const registerEl = (): JSX.Element => (
    <div
      className={clsx(
        duplicateStyles.flex,
        duplicateStyles.noWrap,
        duplicateStyles.alignCenter
      )}
    >
      <span className={duplicateStyles.font14}>
        Don't have an account? &nbsp;
      </span>
      <Link to={"/register"} onClick={handleClick}>
        <span className={duplicateStyles.highlightedGreen}>Register Now!</span>
      </Link>
    </div>
  );

  const { inputs, handleChange } = useOneStateObjectFromStrings(inputNames) as {
    inputs: {
      [x: string]: string;
    };
    handleChange: (value: {}) => void;
  };
  const [rememberMe, setRememberMe] = React.useState<null | boolean>(null);
  const handleRememberChange = React.useCallback(
    (): void => setRememberMe(!rememberMe),
    [rememberMe]
  );

  const rememberMeAndForgotPassEl = (): JSX.Element => (
    <div
      className={clsx(
        duplicateStyles.flex,
        duplicateStyles.noWrap,
        styles.spaceBetween,
        duplicateStyles.alignCenter
      )}
    >
      <RadioButton
        label="Remember me"
        selected={rememberMe === true}
        id="rememberMe"
        clicked={handleRememberChange}
        forSingle={true}
      />
      <span
        className={clsx(
          styles.cursorPointer,
          duplicateStyles.highlightedGreen,
          duplicateStyles.font14
        )}
      >
        &nbsp; &nbsp; &nbsp; Forgot Password?
      </span>
    </div>
  );
  const nodes: (string | (() => JSX.Element))[] = [
    ...inputNames,
    loginButton,
    rememberMeAndForgotPassEl,
    divider,
    loginGoogleButton,
    loginFacebookButton,
    registerEl
  ];

  return (
    <form className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      {nodes.map(
        (E: string | (() => JSX.Element), i: number): JSX.Element =>
          typeof E === "string" ? (
            <Input
              required={true}
              backgroundColor="white"
              key={i}
              value={inputs[E]}
              name={E}
              handleChange={handleChange}
            />
          ) : (
            <E key={i} />
          )
      )}
    </form>
  );
});
