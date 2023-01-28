import React from "react";
import "./walletCard.css";

const WalletCards = ({ data, text }) => {
  return (
    <div className="card-wrapper">
      <p>{text}</p>
      <h4>{data !== null ? data : "-"}</h4>
    </div>
  );
};

export default WalletCards;
