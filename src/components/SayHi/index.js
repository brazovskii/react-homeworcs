import React, { useState } from "react";
import "./index.css";

const SayHi = () => {
  const [loading, setLoading] = useState(false);
  const [greeting, setGreeting] = useState("");
  const sayHi = () => {
    setGreeting("Hello User");
    setLoading();
  };

  return (
    <div className="header">
      <button
        onClick={() => {
          setTimeout(sayHi, 2000);
          setLoading(!loading);
        }}
      >
        Say Hi !
      </button>
      {loading === true ? (
        <div className="loader"></div>
      ) : (
        <span>{greeting}</span>
      )}
    </div>
  );
};

export default SayHi;
