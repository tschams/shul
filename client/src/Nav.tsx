import React from "react";
import { NavLink } from "react-router-dom";
import { Login } from "./pages/Login";
import logo from "./assets/images/logo.jpg";
import styles from "./Nav.module.css";
import { Button } from "./components/Button";
import clsx from "clsx";
import { useOnMount } from "./customHooks";

function _Nav() {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [modal, setModal] = React.useState(false);

  const handleClick = React.useCallback((e: MouseEvent) => {
    if (ref.current?.contains(e.target as Node)) {
      // inside click
      return;
    }
    // outside click
    setModal(false);
  }, []);

  useOnMount(() => {
    document.addEventListener("mousedown", e => handleClick(e));
    return () => {
      document.removeEventListener("mousedown", e => handleClick(e));
    };
  });

  return (
    <>
      <ul className={styles.navContainer}>
        <li>
          <img className={styles.logo} src={logo} alt="Company Logo" />
        </li>
        <li className={styles.navLinkContainer}>
          <NavLink
            className={styles.navLink}
            exact
            activeClassName="navLinkSelected"
            to="/"
          >
            <span>HOME</span>
          </NavLink>
        </li>
        <li className={styles.navLinkContainer}>
          <NavLink
            className={styles.navLink}
            activeClassName="navLinkSelected"
            to="/minyanim"
          >
            <span>MINYANIM</span>
          </NavLink>
        </li>
        <li className={styles.navLinkContainer}>
          <NavLink
            className={styles.navLink}
            activeClassName="navLinkSelected"
            to="/shiurim"
          >
            <span>SHIURIM</span>
          </NavLink>
        </li>
        <li className={styles.navLinkContainer}>
          <NavLink
            className={styles.navLink}
            activeClassName="navLinkSelected"
            to="/about"
          >
            <span>ABOUT US</span>
          </NavLink>
        </li>
        <li className={styles.navLinkContainer}>
          <NavLink
            className={styles.navLink}
            activeClassName="navLinkSelected"
            to="/contact"
          >
            <span>CONTACT US</span>
          </NavLink>
        </li>
        {!modal ? (
          <li className={styles.navLinkContainer}>
            <span
              onClick={() => setModal(!modal)}
              className={clsx(styles.navLink, styles.login)}
            >
              <span>
                LOGIN<strong>/</strong>REGISTER
              </span>
            </span>
          </li>
        ) : (
          <span ref={ref}>
            <Login />
          </span>
        )}
        <li>
          <Button>Donate</Button>
        </li>
      </ul>
    </>
  );
}

export const Nav = React.memo(_Nav);
