import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Shiurim } from "./pages/Shiurim";
import { Minyanim } from "./pages/Minyanim";
import { Login } from "./pages/Login";
import logo from "./assets/images/logo.jpg";
import styles from "./app.module.css";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
      <ul className={styles.container}>
        <li>
          <img src={logo} alt="Company Logo" />
        </li>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/minyanim">MINYANIM</Link>
        </li>
        <li>
          <Link to="/shiurim">SHIURIM</Link>
        </li>
        <li>
          <Link to="/about">ABOUT US</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT US</Link>
        </li>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
        <li>
          <button>Donate</button>
        </li>
      </ul>

      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/minyanim">
          <Minyanim />
        </Route>
        <Route exact path="/shiurim">
          <Shiurim />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
