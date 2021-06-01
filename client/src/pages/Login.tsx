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

type Props = {
  closeModal: Function;
  navLinkSelected: Function;
};

export default React.memo(function _Login({
  closeModal,
  navLinkSelected
}: Props) {
  const inputNames = ["email", "password"];
  const icons = [faGoogle, faFacebookF];
  const iconNodes = objectArrayToObject(
    icons.map(i => {
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
    buttons.map(button => ({
      [button]: {
        text: buttonTexts[button],
        color: buttonColors[button],
        icon: buttonIcons[button],
        width: button === "login" ? undefined : "eighty"
      }
    }))
  );
  const loginButton = () => <Button {...buttonProps["login"]} />;
  const loginGoogleButton = () => <Button {...buttonProps["googleLogin"]} />;
  const loginFacebookButton = () => (
    <Button {...buttonProps["facebookLogin"]} />
  );

  const closeModalAndLinkSelected = React.useCallback(() => {
    closeModal();
    navLinkSelected();
  }, [closeModal, navLinkSelected]);
  const hr = <hr className={styles.line} />;
  const divider = () => (
    <div className={clsx(duplicateStyles.flex, styles.fullWidth)}>
      {hr}
      <i>or</i>
      {hr}
    </div>
  );
  const registerEl = () => (
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
      <Link to={"/register"} onClick={closeModalAndLinkSelected}>
        <span className={duplicateStyles.highlightedGreen}>Register Now!</span>
      </Link>
    </div>
  );

  const [inputs, setInputs] = React.useState(() => {
    const inputArray = inputNames.map(e => ({ [e]: "" }));
    return objectArrayToObject(inputArray);
  });
  const [rememberMe, setRememberMe] = React.useState<null | boolean>(null);
  const inputChange = React.useCallback(
    (value: object) => setInputs({ ...inputs, ...value }),
    [inputs]
  );
  const rememberChange = React.useCallback(() => setRememberMe(!rememberMe), [
    rememberMe
  ]);

  const rememberMeAndForgotPassEl = () => (
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
        isSelected={rememberMe === true}
        id="rememberMe"
        clicked={rememberChange}
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
      {nodes.map((E, i) =>
        typeof E === "string" ? (
          <Input
            backgroundColor="white"
            key={i}
            value={inputs[E]}
            name={E}
            onNameChange={inputChange}
          />
        ) : (
          <E key={i} />
        )
      )}
    </form>
  );
});
