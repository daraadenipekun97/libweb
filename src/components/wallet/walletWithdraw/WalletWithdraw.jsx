import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { restoreWithdrawFundsInitial, withdrawFunds } from "../../../Actions";
import Spinner from "../../spinner/Spinner";
import { toastr } from "react-redux-toastr";
import "./walletWithdraw.css";

const WalletWithdraw = ({ data }) => {
  const dispatch = useDispatch();

  const { withdrawFundsSuccess, withdrawFundsFailure } = useSelector((state) => state.profile);

  const initialFormState = {
    buttonState: false,
    buttonText: "Submit",
    spinner: false,
  };

  const [formState, setFormState] = useState({ ...initialFormState });

  const initialFormValues = {
    amount: "",
  };

  const [formValues, setFormValues] = useState({ ...initialFormValues });

  const amountHandler = (e) => {
    if (e) {
      let amountValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        amount: amountValue,
      });
    } else {
      setFormValues({
        ...formValues,
        amount: "",
      });
    }
  };

  const [valid, setValid] = useState(false);

  const handleSubmit = () => {
    if (formValues.amount !== "") {
      setFormState({
        ...formState,
        buttonState: true,
        buttonText: "Submit",
        spinner: true,
      });

      setValid(true);
    } else {
      toastr.warning("Please fill all fields", "Amount is missing");
    }
  };

  useEffect(() => {
    if (valid) {
      dispatch(
        withdrawFunds({
          amount: formValues.amount,
        })
      );
    }

    return () => {
      setValid(false);
    };
  }, [valid]);

  useEffect(() => {
    if (withdrawFundsSuccess || withdrawFundsFailure) {
      setFormState({ ...initialFormState });
      setFormValues({ ...initialFormValues });
    }

    return () => {
      dispatch(restoreWithdrawFundsInitial());
    };
  }, [withdrawFundsSuccess, withdrawFundsFailure]);

  return (
    <div className="wallet-withdraw-container">
      <h4>Withdraw Funds</h4>
      <p>Please Add your Account details to withdraw funds.</p>
      <p>
        Minimum Withdrawal Amount : <b>₦{data.min_withdrawal_amount}</b>
      </p>
      <p>
        Maximum Withdrawal Amount : <b>₦{data.max_withdrawal_amount}</b>
      </p>
      <p>Please note that every withdrawal request may take between 24 - 48 hours.</p>

      <input
        name="amount"
        type="number"
        className="amount-input"
        placeholder="Amount*"
        value={formValues.amount}
        required
        onChange={(e) => amountHandler(e)}
      />

      <button
        disabled={formState.buttonState}
        onClick={() => handleSubmit()}
        className="submit-amount-btn"
      >
        {formState.spinner === true ? <Spinner /> : formState.buttonText}
      </button>
    </div>
  );
};

export default WalletWithdraw;
