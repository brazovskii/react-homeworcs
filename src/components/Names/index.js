import React, { useEffect, useState } from "react";
import "./style.css";
import names from "./names.json";

const Names = () => {
  const [people, setState] = useState(["Aleks", "Ann", "Leo"]);

  const onBtn = () => {
    const oneMoreName = names[Math.floor(Math.random() * names.length)];
    const newPeople = [...people, oneMoreName];
    setState([people, oneMoreName]);
  };

  return (
    <div>
      {people.map((el, it) => {
        return (
          <div key={it}>
            <h2>{el}</h2>
          </div>
        );
      })}
      <button onClick={() => onBtn()}>Add Name</button>
    </div>
  );
};

export default Names;
