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

type Props = {
  closeDisplay: () => void;
  navLinkSelected: () => void;
};

export default React.memo(function _Login({
  closeDisplay,
  navLinkSelected
}: Props) {
  const inputNames = ["email", "password"];
  const icons = [faGoogle, faFacebookF];
  const iconNodes = objectArrayToObject(
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
  const duplicateStyles = filterObjectOfObjectsByArray(
    styles,
    duplicateClasses
  );

  const buttons = ["login", "googleLogin", "facebookLogin"];
  const buttonTexts = {
    login: "Login",
    googleLogin: "Google Login",
    facebookLogin: "Facebook Login"
  };
  const buttonColors = {
    login: "green",
    googleLogin: "lightBlue",
    facebookLogin: "blue"
  };
  const buttonIcons = {
    login: undefined,
    googleLogin: iconNodes["google"],
    facebookLogin: iconNodes["facebook-f"]
  };
  const buttonProps = objectArrayToObject(
    buttons.map((button: string): { [x: string]: {} } => ({
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
  const hr = <hr className={styles.line} />;
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

  const { inputs, handleChange } = useOneStateObjectFromStrings(inputNames);
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
  const nodes = [
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
        (E, i): JSX.Element =>
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
