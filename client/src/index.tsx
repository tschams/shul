import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assets/css/styles.css";
import { defaultTheme } from "./themes";
import {
    // CssBaseline,
    // jssPreset,
    // StylesProvider,
    ThemeProvider,
} from "@material-ui/core";
// Example to use service worker / progressive web app (PWA):
// import * as serviceWorker from "./serviceWorker";
// import serviceWorkerConfig from "./serviceWorkerConfig";

/**
 * JSS config. Sets insertion point so JSS styles are inserted BEFORE our own,
 * so that we don't have to use `!important` everywhere to override JSS
 * generated styles.
 */
// const jss = createJSS({
//   ...jssPreset(),
//   // See "Other HTML Element" at https://material-ui.com/styles/advanced/#insertionpoint
//   insertionPoint: document.getElementById("jss-insertion-point"),
// });

/**
 * Startup function.
 *
 * NOTE: The `store` already comes preloaded with data since `state/store.js`
 * does that.
 */
// function main() {
//   preloadAuthToken();
//   render();
//   registerServiceWorker();
// }
/**
 * Loads the token from storage or redux and registers it with `AuthRequest`.
 */
// function preloadAuthToken() {
//   if (authUser) {
//     return;
//   }
//   const state = store.getState();
//   const { auth: { user, expiration, token } = {} } = state;
//   if (token) {
//     // NOTE: We only register telemetry user details here since the page reloads
//     // after a login.
//     ErrorSentry.setUser({
//       email: user.email,
//       id: user.id,
//       username: user.email,
//     });
//     authUser = user;
//     setAuthRequestToken(token, expiration);
//   }
// }
/**
 * Service worker registration.
 *
 * Should be registered after a call to `render` **UNLESS you are using
 * `self.clients.claim()` within your service worker.** Otherwise, you want
 * to register late (after a call to `render`) to avoid problems on "low-end
 * mobile devices" (per the docs).
 *
 * 1. [CRA docs on PWA](https://create-react-app.dev/docs/making-a-progressive-web-app)
 * 2. [Reasons to register early](https://developers.google.com/web/fundamentals/primers/service-workers/registration#reasons_to_register_early)
 *
 */
function registerServiceWorker() {
    // Example to implement register service worker:
    // serviceWorker.register(serviceWorkerConfig);
}

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// main();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
