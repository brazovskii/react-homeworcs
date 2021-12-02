import React, { useState } from "react";
import "./index.css";

const ButtonMusic = () => {
  const [title, setTitle] = useState("🔄");
  const onButtonClick = () => {
    setTitle(title === "🔄" ? "🔁" : title === "🔁" ? "🔂" : "🔄");
  };

  return (
    <div className="button">
      <button onClick={onButtonClick}>{title}</button>
    </div>
  );
};

export default ButtonMusic;
