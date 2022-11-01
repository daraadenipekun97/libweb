import React from "react";
import "./button.css";

const PurpleButton = ({ text, onClickFunction }) => {
  return (
    <button className="btn-wrapper-purple" onClick={() => onClickFunction()}>
      {text}
    </button>
  );
};

const WhiteButton = ({ text, onClickFunction }) => {
  return (
    <button className="btn-wrapper-white" onClick={() => onClickFunction()}>
      {text}
    </button>
  );
};

export { PurpleButton, WhiteButton };
