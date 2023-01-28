import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./walletAccountDetails.css";
import Select from "react-select";
import Spinner from "../../spinner/Spinner";
import { addBank, fetchWalletDetails, restoreAddBankInitial } from "../../../Actions";
import { toastr } from "react-redux-toastr";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: "#fff",
    border: "2px solid #e9eaee",
    minHeight: "30px",
    height: "50px",
    boxShadow: state.isFocused ? null : null,
    marginBottom: "0.5rem",
    fontSize: "15px",

    "&:hover": {
      border: "1px solid #5e458b",
    },
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: "50px",
    padding: "0 6px",
  }),

  input: (provided, state) => ({
    ...provided,
    margin: "0px",
  }),
  indicatorSeparator: (state) => ({
    display: "none",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: "50px",
  }),
};

const WalletAccountDetails = () => {
  const dispatch = useDispatch();

  const { allBanks, addBankSuccess, addBankFailure, walletDetails } = useSelector(
    (state) => state.profile
  );

  const [theBank, setTheBank] = useState([]);

  const initialFormState = {
    buttonState: false,
    buttonText: "Submit",
    spinner: false,
  };

  const [formState, setFormState] = useState({ ...initialFormState });

  const initialFormValues = {
    bank_code: "",
    account_number: "",
  };

  const [formValues, setFormValues] = useState({ ...initialFormValues });

  const accountNumberHandler = (e) => {
    if (e) {
      let account = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        account_number: account,
      });
    } else {
      setFormValues({
        ...formValues,
        account_number: "",
      });
    }
  };

  const [bankId, setBankId] = useState({});

  const bankHandler = (e) => {
    if (e) {
      setBankId(e);
    }
  };

  const [valid, setValid] = useState(false);

  const handleSubmit = () => {
    if (Object.keys(bankId).length !== 0 && formValues.account_number !== "") {
      setFormState({
        ...formState,
        buttonState: true,
        buttonText: "Submit",
        spinner: true,
      });

      setValid(true);
    } else {
      toastr.warning("Please fill all fields", "Bank or Account number is missing");
    }
  };

  useEffect(() => {
    if (valid) {
      dispatch(
        addBank({
          bank_code: bankId.value,
          account_number: formValues.account_number,
        })
      );
    }

    return () => {
      setValid(false);
    };
  }, [valid]);

  useEffect(() => {
    const createBankSelect = () => {
      let allBankData = [];
      allBanks.map((bank) => {
        let option = { value: bank.bank_code, label: bank.bank_name };
        allBankData.push(option);
      });

      setTheBank(allBankData);
    };

    allBanks.length !== 0 && createBankSelect();
  }, [allBanks]);

  useEffect(() => {
    if (addBankSuccess) {
      setFormState({ ...initialFormState });
      setFormValues({ ...initialFormValues });
      dispatch(fetchWalletDetails());
    }

    return () => {
      dispatch(restoreAddBankInitial());
    };
  }, [addBankSuccess]);

  useEffect(() => {
    if (addBankFailure) {
      setFormState({ ...initialFormState });
      setFormValues({ ...initialFormValues });
    }

    return () => {
      dispatch(restoreAddBankInitial());
    };
  }, [addBankFailure]);

  return (
    <div className="wallet-account-container">
      <h4 className="wallet-account-heading">Add/Update your account details</h4>
      <Select
        options={theBank}
        styles={customStyles}
        placeholder={"---Select Bank---"}
        onChange={(e) => bankHandler(e)}
      />

      <input
        name="accountNumber"
        type="number"
        className="account-number-input"
        placeholder="Account Number*"
        value={formValues.account_number}
        required
        onChange={(e) => accountNumberHandler(e)}
      />

      <button
        disabled={formState.buttonState}
        onClick={() => handleSubmit()}
        className="submit-account-btn"
      >
        {formState.spinner === true ? <Spinner /> : formState.buttonText}
      </button>

      <hr />

      {walletDetails.account_detail !== null ? (
        <>
          <p>Account Name</p>
          <h4 className="account-details">{walletDetails.account_detail.account_name}</h4>
          <p>Account Number</p>
          <h4 className="account-details">{walletDetails.account_detail.bank_number}</h4>
          <p>Bank</p>
          <h4 className="account-details">{walletDetails.account_detail.bank_name}</h4>
        </>
      ) : (
        <p style={{ textAlign: "center" }}>No Account details added</p>
      )}
    </div>
  );
};

export default WalletAccountDetails;
