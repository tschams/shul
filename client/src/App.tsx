import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import { capitalizeFirstLetter } from "./utils";

export default React.memo(function _App() {
  const navRoutes = ["home", "minyanim", "shiurim", "about", "contact"];
  const routes = [...navRoutes, "register"];

  return (
    <>
      <Router>
        <Nav routes={navRoutes} />
        <Suspense fallback={<span>Loading...</span>}>
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
      {/* <footer className="footer">&copy; 2021 All rights reserved</footer> */}
    </>
  );
});
