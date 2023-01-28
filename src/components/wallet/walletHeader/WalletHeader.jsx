import React from "react";
import "./walletHeader.css";
import { AiFillCopy } from "react-icons/ai";

const WalletHeader = ({ data }) => {
  const handleCopyReferral = () => {
    /* Get the text field */
    let copyText = document.getElementById("referral-code");

    /* Copy the text inside the h4 tag */
    navigator.clipboard.writeText(copyText.innerHTML);

    /* Alert the copied text */
    alert("Copied the referral code: " + copyText.innerHTML);
  };

  return (
    <div className="wallet-wrapper">
      <h4 className="wallet-text">Send Invite</h4>
      <p className="invite-text">
        This is your earnings so far from successful referrals. You can withdraw cash to your bank
        account
      </p>
      <div className="refferal-code-button">
        <div className="code" onClick={() => handleCopyReferral()}>
          <span id="referral-code">{data ? data : "-"}</span>
          <AiFillCopy color="#5e458b" />
        </div>
      </div>
    </div>
  );
};

export default WalletHeader;
