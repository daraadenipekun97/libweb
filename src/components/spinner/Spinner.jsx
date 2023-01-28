import React from "react";
import "./spinner.css";

const Spinner = ({ spinnerHide }) => {
  if (spinnerHide) {
    return <p>No data found</p>;
  }

  return <div id="loading"></div>;
};

export default Spinner;
