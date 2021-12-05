import React, { useState } from "react";
import "./index.css";

const SayHi = () => {
  const [loading, setLoading] = useState(false);
  const [greeting, setGreeting] = useState("");
  const sayHi = () => {
    setGreeting("Hello User");
    setLoading(loading);
  };

  return (
    <div className="header">
      <button
        onClick={() => {
          setTimeout(sayHi, 3000);
          setLoading(!loading);
        }}
      >
        Say Hi !
      </button>

      {loading && <div className="loader"></div>}
      {greeting && <span>{greeting}</span>}
    </div>
  );
};

export default SayHi;
