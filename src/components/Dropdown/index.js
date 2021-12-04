import React, { useState } from "react";
import "./index.css";

const Dropdown = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="header">
      <button onClick={() => setVisible(!visible)}>
        Ингредиенты {visible ? "🔽" : `🔼`}
      </button>
      {visible && (
        <div>
          <ul> Text какой-то Персик</ul>
          <ul> Text какой-то Ананас</ul>
          <ul> Text какой-то Укроп</ul>
          <ul> Text какой-то Петрушка</ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
