import React, { useState } from "react";
import "./index.css";

const Loader = () => {
  const [visible, setVisible] = useState(false);
  let timerId = setTimeout(function tick() {
    setVisible(!visible);
    timerId = setTimeout(tick); // (*)
  }, 2000);
  return (
    <div>
      <button onClick={() => timerId}>Sy Hi</button>
      {visible && <div className="loader"></div>}
    </div>
  );
};

export default Loader;
