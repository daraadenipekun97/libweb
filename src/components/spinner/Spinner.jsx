import React from "react";
import "./spinner.css";

const Spinner = ({ spinnerHide }) => {
  if (spinnerHide) {
    return <p className="no-data-text">Oops! Nothing here yet.</p>;
  }

  return <div id="loading"></div>;
};

export default Spinner;
