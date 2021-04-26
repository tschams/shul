import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Shiurim } from "./pages/Shiurim";
import { Minyanim } from "./pages/Minyanim";
import { Nav } from "./Nav";

function _App() {
  return (
    <>
      <Router>
        <Nav />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/minyanim">
          <Minyanim />
        </Route>
        <Route path="/shiurim">
          <Shiurim />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Router>
      <footer className="footer">&copy; 2021 All rights reserved</footer>
    </>
  );
}

export const App = React.memo(_App);
