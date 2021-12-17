import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useHistory, useParams, useLocation } from "react-router-dom";

const Figure = () => {
  const params = useParams();

  return (
    <div className="figure__head">
      <div
        className={`figure__body figure${params.id}`}
        style={{
          backgroundColor: params.color,
        }}
      ></div>
    </div>
  );
};

export default Figure;
