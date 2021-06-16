import React from "react";
import { NavLink } from "react-router-dom";
import Login from "./pages/Login";
import logo from "@images/logo.jpg";
import styles from "@css/Nav.module.css";
import Button from "./components/Button";
import clsx from "clsx";
import { useToggleElemVisibility } from "./customHooks";

type Props = {
  routes: string[];
};

const Img = React.memo(
  (): JSX.Element => {
    return <img className={styles.logo} src={logo} alt="Company Logo"></img>;
  }
);

const DonateButton = React.memo(
  (): JSX.Element => {
    return <Button color="darkBlue" text="Donate" />;
  }
);

export default React.memo(function _Nav({ routes }: Props) {
  const LoginLink = React.memo(
    (): JSX.Element => {
      return !display ? (
        <li className={styles.navLinkContainer}>
          <span
            onClick={() => setDisplay(true)}
            className={clsx(styles.navLink, styles.login, {
              navLinkSelected: register
            })}
          >
            <span>
              LOGIN<strong>/</strong>REGISTER
            </span>
          </span>
        </li>
      ) : (
        <div ref={ref}>
          <Login
            navLinkSelected={(): void => setRegister(true)}
            closeDisplay={(): void => setDisplay(false)}
          />
        </div>
      );
    }
  );

  const nodes = [Img, ...routes, LoginLink, DonateButton];

  const [register, setRegister] = React.useState(false);

  const { ref, display, setDisplay } = useToggleElemVisibility();

  return (
    <nav>
      <ul className={styles.navContainer}>
        {nodes.map(
          (
            Node: string | React.MemoExoticComponent<() => JSX.Element>,
            i: number
          ) => {
            return Node === LoginLink ? (
              <Node key={i} />
            ) : typeof Node !== "string" ? (
              <li key={i}>
                <Node />
              </li>
            ) : (
              <li key={i} className={styles.navLinkContainer}>
                <NavLink
                  className={styles.navLink}
                  activeClassName="navLinkSelected"
                  exact={Node === "home"}
                  to={Node === "home" ? "/" : `/${Node}`}
                >
                  <span>{Node.toUpperCase()}</span>
                </NavLink>
              </li>
            );
          }
        )}
      </ul>
    </nav>
  );
});
