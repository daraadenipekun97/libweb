import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import WalletAccountDetails from "../../components/wallet/walletAccountDetails/WalletAccountDetails";
import WalletCards from "../../components/wallet/walletCards/WalletCards";
import WalletHeader from "../../components/wallet/walletHeader/WalletHeader";
import WalletWithdraw from "../../components/wallet/walletWithdraw/WalletWithdraw";

import "./wallet.css";

import { fetchWalletDetails, fetchAllBanks } from "../../Actions";
import Spinner from "../../components/spinner/Spinner";

const Wallet = () => {
  const dispatch = useDispatch();

  const { walletDetails } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchWalletDetails());
    dispatch(fetchAllBanks());
  }, [dispatch]);

  return (
    <>
      <UserNavbar />
      <div className="wallet-container">
        {Object.keys(walletDetails).length !== 0 ? (
          <>
            <WalletHeader data={walletDetails.user ? walletDetails.user.referral_code : {}} />
            <div className="wallet-header">
              <h4 className="wallet-earnings-heading">Your Earnings</h4>
              <p className="wallet-earnings-text">
                This is your earnings so far from successful referrals. You can withdraw cash to
                your bank account
              </p>
            </div>
            <div className="wallet-card-flex-wrapper">
              <WalletCards data={walletDetails.total_signups} text="Sign ups" />
              <WalletCards data={walletDetails.total_earnings} text="Total Earnings" />
            </div>

            <div className="wallet-card-flex-wrapper">
              <WalletCards data={walletDetails.total_withdrawn} text="Total Withdrawn" />
              <WalletCards data={walletDetails.current_balance} text="Current Balance" />
            </div>
            <div className="wallet-card-bottom-flex-wrapper">
              <WalletAccountDetails />
              <WalletWithdraw data={walletDetails} />
            </div>
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default Wallet;
