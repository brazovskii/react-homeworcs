import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Dropdown from "./components/Dropdown";
import Login from "./components/Login";
import SayHi from "./components/SayHi";

ReactDOM.render(
  <React.StrictMode>
    <Dropdown />
    <Login />
    <SayHi />
  </React.StrictMode>,
  document.getElementById("root")
);
