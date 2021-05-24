import React from "react";
import { NavLink } from "react-router-dom";
import Login from "./pages/Login";
import logo from "@images/logo.jpg";
import styles from "@css/Nav.module.css";
import Button from "./components/Button";
import clsx from "clsx";
import { useOnMount } from "./customHooks";

type Props = {
  routes: string[];
};

const Img = React.memo(() => {
  return <img className={styles.logo} src={logo} alt="Company Logo"></img>;
});

const DonateButton = React.memo(() => {
  return <Button color="darkBlue" text="Donate" />;
});

export default React.memo(function _Nav({ routes }: Props) {
  const LoginLink = React.memo(() => {
    return !modal ? (
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
      <div ref={ref}>
        <Login />
      </div>
    );
  });

  const nodes = [Img, ...routes, LoginLink, DonateButton];

  const ref = React.useRef<HTMLDivElement>(null);
  const [modal, setModal] = React.useState(false);

  const handleClick = React.useCallback((e: MouseEvent) => {
    if (ref.current?.contains(e.target as Node)) {
      return;
    }
    setModal(false);
  }, []);

  useOnMount(() => {
    document.addEventListener("mousedown", e => handleClick(e));
    return () => {
      document.removeEventListener("mousedown", e => handleClick(e));
    };
  });

  return (
    <nav>
      <ul className={styles.navContainer}>
        {nodes.map((Node, i) => {
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
        })}
      </ul>
    </nav>
  );
});
