import React, { useEffect, useState } from "react";
import "./style.css";
import names from "./names.json";

const Names = () => {
  const [people, setState] = useState(["Aleks", "Ann", "Leo"]);

  const oneMoreName = names[Math.floor(Math.random() * names.length)];
  const onBtn = () => {
    setState([...people, oneMoreName]);
  };

  return (
    <div>
      {people.map((el) => {
        return (
          <div key={el}>
            <div>{el}</div>
          </div>
        );
      })}
      <button onClick={() => onBtn()}>Add Name</button>
    </div>
  );
};

export default Names;
