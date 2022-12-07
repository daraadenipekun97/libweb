import React from 'react';
import "./css/wallet.css";
import { AiFillCopy } from "react-icons/ai";

const Wallet = () => {
  return (
    <div className='wallet-wrapper'>
        <h4 className='wallet-text'>Send Invite</h4>
        <p className='invite-text'>Invite your friends and family to MyLibri Books by copying the referral code below and sending it to them</p>
        <div className="refferal-code-button">
          <div className="code">
            <span>XAYZUENE <AiFillCopy/></span>
          </div>
          <a href='/home/wallet' className='view-wallet'>View Wallet</a>
        </div>
    </div>
  )
}

export default Wallet