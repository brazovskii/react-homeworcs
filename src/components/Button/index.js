import React, { useState } from "react";
import "./index.css";


const ButtonFC = () => {
  const [title, setTitle] = useState("👦🏾");
  const onButtonClick = () => {
    setTitle(title === "👦🏾" ? "🧑🏼" : "👦🏾");
  };

  return (
    <checkBox className="niga" onClick={onButtonClick}>
      {title}
    </checkBox>
  );
};

export default ButtonFC;
