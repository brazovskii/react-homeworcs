import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useHistory, useParams, useLocation } from "react-router-dom";

const Figure = () => {
  const params = useParams();

  return (
    <div className="figure">
      <div
        className="figure__body"
        style={{
          backgroundColor: params.color,
          borderRadius: params.id === "1" ? "0" : "10rem",
        }}
      >
        {console.log(params)}
      </div>
    </div>
  );
};

export default Figure;
