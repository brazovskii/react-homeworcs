import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Text from "./Text";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Text text="GO" colors="red" size={60} underline={false} />
    <Text text="OG" colors="blue" size={40} underline={false} />
    <Text text="LE" colors="green" size={70} underline={true} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
