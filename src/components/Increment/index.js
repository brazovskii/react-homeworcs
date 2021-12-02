import React, { useState } from "react";
import "./index.css";

function ButtonIncrement() {
  const [count, setCount] = useState(0);

  return (
    <div className="header">
      <button className="header__button" onClick={() => setCount(count + 1)}>
        ➕
      </button>
      <h1> {count}</h1>
      <button className="header__button" onClick={() => setCount(count - 1)}>
        ➖
      </button>
    </div>
  );
}

export default ButtonIncrement;
