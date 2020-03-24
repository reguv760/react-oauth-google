import React from "react";
import GoogleLogin from "react-google-login";

const responseGoogle = response => {
  console.log(response);
};

function App() {
  return (
    <div className='App'>
      <GoogleLogin
        clientId='45511987383-6l84afniuqc2aoegdjgqm6l9kjrknfeb.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default App;
