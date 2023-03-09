import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import { Footer } from "../../containers";
import "./subscription.css";
import SubImage from "../../assets/images/Subscription.png";
import { AiFillAlert } from "react-icons/ai";
import PaystackPop from "@paystack/inline-js";
import { useState, useEffect } from "react";
import { webPurchase, restoreWebPurchaseInitial, fetchSubscriptionDetails } from "../../Actions";

const Subscription = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { webPurchaseFailure, webPurchaseSuccess, subscriptionDetails } = useSelector(
    (state) => state.profile
  );

  const userDataRegister = JSON.parse(localStorage.getItem("userRegData"));
  const userDataLogin = JSON.parse(localStorage.getItem("userLoginData"));

  const userData =
    userDataRegister !== null ? userDataRegister : userDataLogin !== null ? userDataLogin : "";

  const spliteNameArray = userData.user.name.split(" ");
  const email = userData.user.email;

  const [firstName, setFirstName] = useState(spliteNameArray[0]);
  const [lastName, setLastName] = useState(spliteNameArray[1]);
  const [dashboardModalState, setDashboardModalState] = useState(true);
  // useEffect(() => {
  //   dispatch(fetchSubscriptionDetails());
  // }, [dispatch]);

  // let trialCheck = Object.keys(subscriptionDetails).length > 0 && subscriptionDetails.subscription.title !== null ?  subscriptionDetails.subscription.title : ""

  const payWithPaystackTrial = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_60d4c7d06e3db39fe54118b4800a0432c172fe43",
      amount: 100 * 100,
      email,
      firstName,
      lastName,
      onSuccess(transaction) {
        let message = `Payment Complete! Reference ${transaction.reference}`;
        alert(message);
        dispatch(
          webPurchase({
            trxref: transaction.trxref,
            reference: transaction.reference,
          })
        );

        setDashboardModalState(false);

        navigate("/home/dashboard", {
          state: {
            id: dashboardModalState,
          },
        });
      },
      onCancel() {
        alert("you have canceled the transaction");
      },
    });
  };

  const payWithPaystackMonthly = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_60d4c7d06e3db39fe54118b4800a0432c172fe43",
      amount: 1000 * 100,
      email,
      firstName,
      lastName,
      onSuccess(transaction) {
        let message = `Payment Complete! Reference ${transaction.reference}`;
        alert(message);
        dispatch(
          webPurchase({
            trxref: transaction.trxref,
            reference: transaction.reference,
          })
        );

        setDashboardModalState(false);

        navigate("/home/dashboard", {
          state: {
            id: dashboardModalState,
          },
        });
      },
      onCancel() {
        alert("you have canceled the transaction");
      },
    });
  };

  const payWithPaystackQuarterly = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_60d4c7d06e3db39fe54118b4800a0432c172fe43",
      amount: 2500 * 100,
      email,
      firstName,
      lastName,
      onSuccess(transaction) {
        let message = `Payment Complete! Reference ${transaction.reference}`;
        alert(message);
        dispatch(
          webPurchase({
            trxref: transaction.trxref,
            reference: transaction.reference,
          })
        );
        setDashboardModalState(false);

        navigate("/home/dashboard", {
          state: {
            id: dashboardModalState,
          },
        });
      },
      onCancel() {
        alert("you have canceled the transaction");
      },
    });
  };

  const payWithPaystackBiannual = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_60d4c7d06e3db39fe54118b4800a0432c172fe43",
      amount: 5500 * 100,
      email,
      firstName,
      lastName,
      onSuccess(transaction) {
        let message = `Payment Complete! Reference ${transaction.reference}`;
        alert(message);
        dispatch(
          webPurchase({
            trxref: transaction.trxref,
            reference: transaction.reference,
          })
        );

        setDashboardModalState(false);

        navigate("/home/dashboard", {
          state: {
            id: dashboardModalState,
          },
        });
      },
      onCancel() {
        alert("you have canceled the transaction");
      },
    });
  };

  const payWithPaystackAnnual = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_60d4c7d06e3db39fe54118b4800a0432c172fe43",
      amount: 11200 * 100,
      email,
      firstName,
      lastName,
      onSuccess(transaction) {
        let message = `Payment Complete! Reference ${transaction.reference}`;
        alert(message);
        dispatch(
          webPurchase({
            trxref: transaction.trxref,
            reference: transaction.reference,
          })
        );

        setDashboardModalState(false);

        navigate("/home/dashboard", {
          state: {
            id: dashboardModalState,
          },
        });
      },
      onCancel() {
        alert("you have canceled the transaction");
      },
    });
  };

  useEffect(() => {
    if (webPurchaseSuccess) {
      console.log("web purchase success");
    }

    return () => {
      dispatch(restoreWebPurchaseInitial());
    };
  }, [webPurchaseSuccess]);

  useEffect(() => {
    if (webPurchaseFailure) {
      console.log("web purchase failure");
    }

    return () => {
      dispatch(restoreWebPurchaseInitial());
    };
  }, [webPurchaseFailure]);

  return (
    <>
      <UserNavbar />
      <div className="subscription-page-container">
        <div className="subscription-top-contents">
          <div className="subscription-image-container">
            <img src={SubImage} alt="subscription_image" />
          </div>
          <button className="trial-btn" onClick={(e) => payWithPaystackTrial(e)}>
            Get 7 days access to the Trial period for ₦100{" "}
          </button>
          <p className="subscription-top-text">
            Please note that the sum of ₦100 will be deducted from your account, this is to validate
            your account.
          </p>
        </div>

        <div className="subscription-bottom-contents">
          <div className="card-heading-container">
            <h4 className="main-heading">Subscription Plans</h4>
            <p className="sub-heading">Find the Plans that suit you</p>
          </div>
          <div className="subscription-plan-card-wrapper">
            <div className="subscription-card">
              <div className="subcription-name">
                <p>LONE RANGER MONTHLY</p>
              </div>
              <p className="subscription-price">
                ₦1000/<span>1 month</span>
              </p>
              <p className="price-subtext">Great Reading Plan for Individual</p>
              <p className="features-list">
                <AiFillAlert color="green" /> Access to a vast repository of books
              </p>
              <p className="features-list">
                <AiFillAlert color="green" /> Sync reading accross all devices
              </p>
              <p className="features-list">
                <AiFillAlert color="green" /> Get the latest book releases
              </p>
              <p className="features-list">
                <AiFillAlert color="green" /> One (1) Number of Devices
              </p>

              <button className="trial-btn" onClick={(e) => payWithPaystackMonthly(e)}>
                Subscribe
              </button>
            </div>

            <div className="subscription-card">
              <div className="subcription-name">
                <p>LONE RANGER QUARTERLY</p>
              </div>
              <p className="subscription-price">
                ₦2,500/<span>3 month</span>
              </p>
              <p className="price-subtext">Great Reading Plan for Individual</p>
              <p className="features-list">
                <AiFillAlert color="green" /> Access to a vast repository of books
              </p>
              <p className="features-list">
                <AiFillAlert color="green" /> Sync reading accross all devices
              </p>
              <p className="features-list">
                <AiFillAlert color="green" /> Get the latest book releases
              </p>
              <p className="features-list">
                <AiFillAlert color="green" /> One (1) Number of Devices
              </p>

              <button className="trial-btn" onClick={(e) => payWithPaystackQuarterly(e)}>
                Subscribe
              </button>
            </div>

            <div className="subscription-card">
              <div className="subcription-name">
                <p>LONE RANGER BIANNUAL</p>
              </div>
              <p className="subscription-price">
                ₦5,500/<span>6 month</span>
              </p>
              <p className="price-subtext">Great Reading Plan for Individual</p>
              <p className="features-list">
                <AiFillAlert color="green" /> Access to a vast repository of books
              </p>
              <p className="features-list">
                <AiFillAlert color="green" /> Sync reading accross all devices
              </p>
              <p className="features-list">
                <AiFillAlert color="green" /> Get the latest book releases
              </p>
              <p className="features-list">
                <AiFillAlert color="green" /> One (1) Number of Devices
              </p>

              <button className="trial-btn" onClick={(e) => payWithPaystackBiannual(e)}>
                Subscribe
              </button>
            </div>

            <div className="subscription-card">
              <div className="subcription-name">
                <p>LONE RANGER ANNUAL</p>
              </div>
              <p className="subscription-price">
                ₦11,200/<span>12 month</span>
              </p>
              <p className="price-subtext">Great Reading Plan for Individual</p>
              <p className="features-list">
                <AiFillAlert color="green" /> Access to a vast repository of books
              </p>
              <p className="features-list">
                <AiFillAlert color="green" /> Sync reading accross all devices
              </p>
              <p className="features-list">
                <AiFillAlert color="green" /> Get the latest book releases
              </p>
              <p className="features-list">
                <AiFillAlert color="green" /> One (1) Number of Devices
              </p>

              <button className="trial-btn" onClick={(e) => payWithPaystackAnnual(e)}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Subscription;
