import React, { useState } from "react";
import "./index.css";

const Login = () => {
  const [isSignedIn, setSignedIn] = useState(false);

  return (
    <div className="header">
      {isSignedIn === true ? (
        <p>Hello user</p>
      ) : (
        <button onClick={() => setTimeout(setSignedIn, 3000, !isSignedIn)}>
          Sign In
        </button>
      )}
    </div>
  );
};

export default Login;
