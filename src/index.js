import React from "react";
import ReactDOM from "react-dom";

import GoogleLogin from "react-google-login";

import App from "./App";

const responseGoogle = response => {
  console.log(response);
};

ReactDOM.render(
  <App>
    <GoogleLogin
      clientId='45511987383-hq1pqnli4ca0f5o5ggqab4pvq1t8f7i6.apps.googleusercontent.com'
      buttonText='Login'
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  </App>,
  document.getElementById("root")
);
