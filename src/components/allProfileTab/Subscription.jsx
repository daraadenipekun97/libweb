import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  fetchProfile,
  fetchSubscriptionDetails,
  cancelTrial,
  restoreCancelTrialInitial,
  cancelSubscription,
  restoreCancelSubscriptionInitial,
  reactivateSubscription,
  reactivateTrial,
  restoreReactivateSubscriptionInitial,
  restoreReactivateTrialInitial
} from "../../Actions";
import Preloader from "../preloader/Preloader";
import "./css/subscription.css";
import moment from "moment";
import Spinner from "../spinner/Spinner";

const Subscription = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    profileData,
    subscriptionDetails,
    cancelTrialSuccess,
    cancelTrailFailure,
    cancelSubscriptionSuccess,
    cancelSubscriptionFailure,
    reactivateTrialSuccess,
    reactivateTrailFailure,
    reactivateSubscriptionSuccess,
    reactivateSubscriptionFailure
  } = useSelector((state) => state.profile);

  const [spinnerStatus, setSpinnerStatus] = useState(false);

  useEffect(() => {
    dispatch(fetchSubscriptionDetails());
  }, [dispatch]);

  const handleCancelTrial = () => {
    setSpinnerStatus(true);
    dispatch(cancelTrial());
  };

  const handleCancelSubscription = () => {
    setSpinnerStatus(true);
    dispatch(cancelSubscription());
  };

  const handleReactivateTrial = () => {
    setSpinnerStatus(true);
    dispatch(reactivateTrial())
  }

  const handleReactivateSub = () => {
    setSpinnerStatus(true);
    dispatch(reactivateSubscription())
  }

  useEffect(() => {
    if (cancelTrialSuccess || cancelTrailFailure) {
      setSpinnerStatus(false);
      dispatch(fetchProfile());
    }

    return () => {
      dispatch(restoreCancelTrialInitial());
    };
  }, [cancelTrialSuccess, cancelTrailFailure]);

  useEffect(() => {
    if (cancelSubscriptionSuccess || cancelSubscriptionFailure) {
      setSpinnerStatus(false);
      dispatch(fetchProfile());
    }

    return () => {
      dispatch(restoreCancelSubscriptionInitial());
    };
  }, [cancelSubscriptionSuccess, cancelSubscriptionFailure]);


  useEffect(() => {
    if (reactivateTrialSuccess || reactivateTrailFailure) {
      setSpinnerStatus(false);
      dispatch(fetchProfile());
    }

    return () => {
      dispatch(restoreReactivateTrialInitial());
    };
  }, [reactivateTrialSuccess, reactivateTrailFailure]);


  useEffect(() => {
    if (reactivateSubscriptionSuccess || reactivateSubscriptionFailure) {
      setSpinnerStatus(false);
      dispatch(fetchProfile());
    }

    return () => {
      dispatch(restoreReactivateSubscriptionInitial());
    };
  }, [reactivateSubscriptionSuccess, reactivateSubscriptionFailure]);



  const handleSelectNavigate = () => {
    navigate("/home/subscription");
  };

  let expiryDate =
    subscriptionDetails.expiry_date !== null
      ? new Date(new Date(subscriptionDetails.expiry_date).toDateString())
      : "";

  let todaysDate = new Date();

  return (
    <div className="subscription-container">
      <p className="subscription-title">Profile/ Subscription Packages</p>
      <hr />
      {Object.keys(subscriptionDetails).length > 0 && subscriptionDetails.subscription !== null ? (
        <>
          {subscriptionDetails.subscription.title === "Trial" &&
          profileData.cancel_trial === 0 &&
          todaysDate.valueOf() < expiryDate.valueOf() ? (
            <h3 className="subscription-status-green">{`You're subscribed to ${subscriptionDetails.subscription.title} Plan`}</h3>
          ) : subscriptionDetails.subscription.title === "Trial" &&
            profileData.cancel_trial === 1 &&
            todaysDate.valueOf() < expiryDate.valueOf() ? (
            <h3 className="subscription-status">{`You have canceled your ${subscriptionDetails.subscription.title} Plan`}</h3>
          ) : subscriptionDetails.subscription.title === "Trial" &&
            profileData.cancel_trial === 0 &&
            todaysDate.valueOf() > expiryDate.valueOf() ? (
            <h3 className="subscription-status">{`Your ${subscriptionDetails.subscription.title} Plan has expired`}</h3>
          ) : subscriptionDetails.subscription.title === "Trial" &&
            profileData.cancel_trial === 1 &&
            todaysDate.valueOf() > expiryDate.valueOf() ? (
            <h3 className="subscription-status">{`You have canceled your ${subscriptionDetails.subscription.title} Plan.`}</h3>
          ) : (
            ""
          )}

          {subscriptionDetails.subscription.title !== "Trial" &&
          profileData.cancel_subscription === 0 &&
          todaysDate.valueOf() < expiryDate.valueOf() ? (
            <h3 className="subscription-status-green">{`You're subscribed to ${subscriptionDetails.subscription.title} Plan`}</h3>
          ) : subscriptionDetails.subscription.title !== "Trial" &&
            profileData.cancel_subscription === 1 &&
            todaysDate.valueOf() < expiryDate.valueOf() ? (
            <h3 className="subscription-status">{`You have canceled your ${subscriptionDetails.subscription.title} Plan`}</h3>
          ) : subscriptionDetails.subscription.title !== "Trial" &&
            profileData.cancel_subscription === 0 &&
            todaysDate.valueOf() > expiryDate.valueOf() ? (
            <h3 className="subscription-status">{`Your ${subscriptionDetails.subscription.title} Plan has expired`}</h3>
          ) : subscriptionDetails.subscription.title !== "Trial" &&
            profileData.cancel_subscription === 1 &&
            todaysDate.valueOf() > expiryDate.valueOf() ? (
            <h3 className="subscription-status">{`You have canceled your ${subscriptionDetails.subscription.title} Plan.`}</h3>
          ) : (
            ""
          )}

          {/* {
              subscriptionDetails.status?<p className='sub-note'>{`Status: ${subscriptionDetails.status}`}</p>
              : <></>
            } */}
          {subscriptionDetails.last_payment ? (
            <p className="sub-note">{`Subscription Start Date: ${moment(
              subscriptionDetails.last_payment
            ).format("MMM Do YYYY")}`}</p>
          ) : (
            <></>
          )}
          {subscriptionDetails.expiry_date ? (
            <p className="sub-note">{`Subscription End Date: ${moment(
              subscriptionDetails.expiry_date
            ).format("MMM Do YYYY")}`}</p>
          ) : (
            <></>
          )}

          {profileData.cancel_trial === 0 &&
          subscriptionDetails.subscription.title === "Trial" &&
          todaysDate.valueOf() < expiryDate.valueOf() ? (
            <button className="button-24" role="button" onClick={() => handleCancelTrial()}>
              {spinnerStatus === true ? <Spinner /> : "Cancel Trial Plan"}
            </button>
          ) : profileData.cancel_trial === 1 &&
            subscriptionDetails.subscription.title === "Trial" &&
            todaysDate.valueOf() < expiryDate.valueOf() ? (
            <button
              className="btn-reactivate"
              role="button"
              onClick={()=>handleReactivateTrial()}
            >
              {spinnerStatus === true ? <Spinner /> : "Reactivate Trial Plan"}
            </button>
          ) : (
            <></>
          )}

          {subscriptionDetails.subscription.title !== "Trial" &&
          profileData.cancel_subscription === 0 &&
          todaysDate.valueOf() < expiryDate.valueOf() ? (
            <button className="button-24" role="button" onClick={() => handleCancelSubscription()}>
              {spinnerStatus === true ? <Spinner /> : "Cancel Subscription"}
            </button>
          ) : subscriptionDetails.subscription.title !== "Trial" &&
            profileData.cancel_subscription === 1 &&
            todaysDate.valueOf() < expiryDate.valueOf() ? (
            <button
              className="btn-reactivate"
              role="button"
               onClick={()=>handleReactivateSub()}
            >
              {spinnerStatus === true ? <Spinner /> : "Reactivate Subscription"}
            </button>
          ) : (
            <></>
          )}
        </>
      ) : (
        <h3 className="subscription-status">You're yet to Subscribe</h3>
      )}

      <div className="card">
        <p className="card-title">Lone Ranger Monthly</p>
        <hr />
        <p className="card-top-text">Great reading plan for individuals</p>
        <p className="card-middle-text">
          Access to a vast repository of books, Sync reading accross all devices, Get the latest
          book releases, One (1) Number of Devices
        </p>
        <h3 className="card-bottom-text">N1,000/ 1 Month</h3>
        {Object.keys(subscriptionDetails).length > 0 &&
        todaysDate.valueOf() < expiryDate.valueOf() ? (
          <></>
        ) : (
          <div className="select-btn" onClick={handleSelectNavigate}>
            Select
          </div>
        )}
      </div>

      <div className="card">
        <p className="card-title">Lone Ranger Quartely</p>
        <hr />
        <p className="card-top-text">Great reading plan for individuals</p>
        <p className="card-middle-text">
          Access to a vast repository of books, Sync reading accross all devices, Get the latest
          book releases, One (1) Number of Devices
        </p>
        <h3 className="card-bottom-text">N2,500/ 3 Months</h3>
        {Object.keys(subscriptionDetails).length > 0 &&
        todaysDate.valueOf() < expiryDate.valueOf() ? (
          <></>
        ) : (
          <div className="select-btn" onClick={handleSelectNavigate}>
            Select
          </div>
        )}
      </div>

      <div className="card">
        <p className="card-title">Lone Ranger Biannual</p>
        <hr />
        <p className="card-top-text">Great reading plan for individuals</p>
        <p className="card-middle-text">
          Access to a vast repository of books, Sync reading accross all devices, Get the latest
          book releases, One (1) Number of Devices
        </p>
        <h3 className="card-bottom-text">N5,500/ 6 Months</h3>
        {Object.keys(subscriptionDetails).length > 0 &&
        todaysDate.valueOf() < expiryDate.valueOf() ? (
          <></>
        ) : (
          <div className="select-btn" onClick={handleSelectNavigate}>
            Select
          </div>
        )}
      </div>

      <div className="card">
        <p className="card-title">Lone Ranger Annual</p>
        <hr />
        <p className="card-top-text">Great reading plan for individuals</p>
        <p className="card-middle-text">
          Access to a vast repository of books, Sync reading accross all devices, Get the latest
          book releases, One (1) Number of Devices
        </p>
        <h3 className="card-bottom-text">N11,200/ 12 Months</h3>
        {Object.keys(subscriptionDetails).length > 0 &&
        todaysDate.valueOf() < expiryDate.valueOf() ? (
          <></>
        ) : (
          <div className="select-btn" onClick={handleSelectNavigate}>
            Select
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscription;
