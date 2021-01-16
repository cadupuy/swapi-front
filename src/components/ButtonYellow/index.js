import React from "react";
import "./index.css";

const ButtonYellow = ({ title, func }) => {
  return (
    <button onClick={func} className="yellowButton">
      {title}
    </button>
  );
};

export default ButtonYellow;
