import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";

const types = [1, 2];
const colors = ["red", "gray", "blue", "cyan", "yellow"];
const Navbar = () => {
  const [type, setType] = useState(1);
  const [color, setColor] = useState("red");

  const history = useHistory();

  const handleClickId = (key) => {
    setType(key);
    history.push(`/figure/${key}/${color}`);
  };

  const handleClickColor = (keys) => {
    setColor(keys);
    history.push(`/figure/${type}/${keys}`);
  };

  return (
    <div className="header">
      <div className="header__main">
        {types.map((item) => {
          return (
            <button
              className="button__top"
              key={item}
              onClick={() => handleClickId(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="header__footer">
        {colors.map((item) => {
          return (
            <button
              className="button__bottom"
              key={item}
              onClick={() => handleClickColor(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
