import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
  <Auth0Provider
    domain="dev-sq43s74ur7rl8wx6.us.auth0.com"
    clientId="snFkSMv0yH40FwTECBFL2NzzknjxPUzl"
    authorizationParams={{
      redirect_uri: "http://127.0.0.1:3000/"
    }}
  >
    <App />
    </Auth0Provider>,
  </Router>
);


