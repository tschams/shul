import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import { capitalizeFirstLetter } from "./utils";

export default React.memo(function _App() {
  const routes = ["home", "minyanim", "shiurim", "about", "contact"];

  return (
    <>
      <Router>
        <Suspense fallback={<span>Loading...</span>}>
          <Nav routes={routes} />
          {routes.map((route, i) => (
            <Route
              key={i}
              exact={route === "home"}
              path={route === "home" ? "/" : `/${route}`}
              component={lazy(() =>
                import(`./pages/${capitalizeFirstLetter(route)}`)
              )}
            ></Route>
          ))}
        </Suspense>
      </Router>
      <footer className="footer">&copy; 2021 All rights reserved</footer>
    </>
  );
});
