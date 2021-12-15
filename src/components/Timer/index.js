import React, { useEffect, useState } from "react";
import "./style.css";

const Timer = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    if (count1 < 0) {
      setCount1(23);
    }
    if (count1 > 23) {
      setCount1(0);
    }
    if (count2 > 59) {
      setCount2(0);
      setCount1(count1 + 1);
    }
    if (count2 < 0) {
      if (count1 <= 23) {
        setCount2(59);
        setCount1(count1 - 1);
      } else {
        setCount2(59);
        setCount1(23);
      }
    }
  }, [count1, count2]);

  const onBtn = () => {
    setCount1(0);
    setCount2(0);
  };

  return (
    <div className="header">
      <div className="header__main">
        <p className="header__parag--right">
          {count1 >= 0 && count1 <= 9 ? "0" + count1 : count1}
        </p>
        <div className="header__body">
          <button
            className="header__button right"
            onClick={() => setCount1(count1 - 1)}
          >
            ➖
          </button>
          <button
            className="header__button right"
            onClick={() => setCount1(count1 + 1)}
          >
            ➕
          </button>
        </div>
        <span className="header__span">:</span>
        <p className="header__parag--left">
          {count2 >= 0 && count2 <= 9 ? "0" + count2 : count2}
        </p>
        <div className="header__footer">
          <button
            className="header__button left"
            onClick={() => setCount2(count2 - 1)}
          >
            ➖
          </button>
          <button
            className="header__button left"
            onClick={() => setCount2(count2 + 1)}
          >
            ➕
          </button>
        </div>
        <button className="header__button reset" onClick={() => onBtn()}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
