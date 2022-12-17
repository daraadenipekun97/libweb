import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./css/wallet.css";
import { AiFillCopy } from "react-icons/ai";
import { fetchWalletDetails } from "../../Actions";



const WalletTab = () => {

  const dispatch = useDispatch();

    const { walletDetails } = useSelector((state) => state.profile);


  useEffect(() => {
    dispatch(fetchWalletDetails()) 
  }, [dispatch])
  

  const handleCopyReferral = () => {

     /* Get the text field */
     let copyText = document.getElementById("referral-code");

     /* Copy the text inside the h4 tag */
     navigator.clipboard.writeText(copyText.innerHTML);

     /* Alert the copied text */
     alert("Copied the referral code: " + copyText.innerHTML);

  }


  return (
    <div className='wallet-wrapper'>
        <h4 className='wallet-text'>Send Invite</h4>
        <p className='invite-text'>Invite your friends and family to MyLibri Books by copying the referral code below and sending it to them</p>
        <div className="refferal-code-button">
          <div className="code">
            {
              Object.keys(walletDetails).length !==0 ?   
              <>
                <span onClick={() => handleCopyReferral()} id="referral-code">{walletDetails !== null ? walletDetails.user.referral_code : "-"}</span><AiFillCopy color="#5e458b"/>
              </>
              : "-"
            }
          </div>
           <a href='/home/wallet' className='view-wallet'>View Wallet</a>
          
        </div>
    </div>
  )
}

export default WalletTab