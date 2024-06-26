import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./css/bio.css";
import Select from "react-select";
import Swal from "sweetalert2";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import Avatar from "../../assets/images/avatar.png";
import {
  fetchAllCountries,
  fetchProfile,
  restoreUpdateProfileInitial,
  updateProfile,
  deleteAccount,
  restoredeleteAccountInitial,
  uploadProfileImage,
  restoreUploadProfileImageInitial,
} from "../../Actions";
import Spinner from "../spinner/Spinner";

const Bio = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { countries } = useSelector((state) => state.getAll);
  const {
    profileData,
    updateProfileSuccess,
    updateProfileFailure,
    deleteAccountSuccess,
    deleteAccountFailure,
    uploadProfImagSuccess,
    uploadProfImagFailure,
  } = useSelector((state) => state.profile);

  const [theCountry, setTheCountry] = useState([]);
  const [disabledState, setDisabledState] = useState(true);
  const [btnDisabledState, setBtnDisabledState] = useState(false);

  const initialFormState = {
    buttonState: false,
    buttonText: "Edit",
    spinner: false,
  };
  const [formState, setFormState] = useState({ ...initialFormState });
  const [displayPicture, setDisplayPicture] = useState(null);
  const [fileSizeError, setFileSizeError] = useState(false);
  const [profileImageSpinner, setProfileImageSpinner] = useState(false);
  const initialFormValues = {
    firstname: "",
    lastname: "",
    phone: "",
    dob: "",
    country_id: 0,
    gender: "",

    //not being sent to API
    email: "",
    profile_image: null,
  };

  const [formValues, setFormValues] = useState({ ...initialFormValues });

  const [formType, setFormType] = useState("view");

  const [valid, setValid] = useState(false);
  const [genderValidation, setGenderValidation] = useState(false);
  const [disableField, setDisableField] = useState(true);

  const verifyCheckHandler = () => {
    Swal.fire({
      title: "Account Verification",
      text: "Please verify you account before proceeding!",
      icon: "warning",
      allowOutsideClick: false,
      showCancelButton: false,
      confirmButtonColor: "#5e458b",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok",
      width: 400,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/verify");
      }
    });
  };
  useEffect(() => {
    dispatch(fetchAllCountries());
    dispatch(fetchProfile());
  }, [dispatch]);

  useEffect(() => {
    if (profileData.email_verified_at === null) {
      verifyCheckHandler();
    }
  }, [profileData]);

  const firstnameHandler = (e) => {
    if (e) {
      let nameValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        firstname: nameValue,
      });
    } else {
      setFormValues({
        ...formValues,
        firstname: "",
      });
    }
  };

  const lastnameHandler = (e) => {
    if (e) {
      let nameValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        lastname: nameValue,
      });
    } else {
      setFormValues({
        ...formValues,
        lastname: "",
      });
    }
  };

  const dobHandler = (e) => {
    if (e) {
      let dobValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        dob: dobValue,
      });
    } else {
      setFormValues({
        ...formValues,
        dob: "",
      });
    }
  };

  const countryHandler = (e) => {
    if (e) {
      let countryValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        country_id: countryValue,
      });
    } else {
      setFormValues({
        ...formValues,
        country_id: 0,
      });
    }
  };

  const genderHandler = (e) => {
    setGenderValidation(false);
    if (e) {
      let genderValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        gender: genderValue,
      });
    } else {
      setFormValues({
        ...formValues,
        gender: "",
      });
    }
  };

  const phoneHandler = (e) => {
    if (e) {
      let phoneValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        phone: phoneValue,
      });
    } else {
      setFormValues({
        ...formValues,
        phone: "",
      });
    }
  };

  const [focused, setFocused] = useState({
    firstname: false,
    lastname: false,
    phone: false,
    dob: false,
  });

  const handleFocus = (e) => {
    if (e.target.name === "firstname") {
      setFocused({ ...focused, firstname: true });
    } else if (e.target.name === "lastname") {
      setFocused({ ...focused, lastname: true });
    } else if (e.target.name === "phone") {
      setFocused({ ...focused, phone: true });
    }
  };

  const handleSubmit = () => {
    if (formType === "view") {
      setFormType("update");
      setDisabledState(false);
      if (
        profileData.dob === null ||
        profileData.country_id === null ||
        profileData.phone === null
      ) {
        setDisableField(false);
      }
      setFormState({
        ...formState,
        buttonState: false,
        buttonText: "Update Profile",
        spinner: false,
      });
    }
    if (formType === "update") {
      if (
        formValues.firstname !== "" &&
        formValues.lastname !== "" &&
        formValues.phone !== "" &&
        formValues.gender !== "No Gender" &&
        /[A-Z'][a-zA-Z'-]+/.test(formValues.firstname) &&
        /[A-Z'][a-zA-Z'-]+/.test(formValues.lastname)
      ) {
        setFormState({
          ...formState,
          buttonState: true,
          buttonText: "Register",
          spinner: true,
        });

        setValid(true);
      } else {
        setFocused({
          ...focused,
          firstname: true,
          lastname: true,
          phone: true,
        });

        setGenderValidation(true);
      }
    }
  };

  useEffect(() => {
    if (valid) {
      dispatch(
        updateProfile({
          fullname: `${formValues.firstname} ${formValues.lastname}`,
          phone: formValues.phone,
          dob: formValues.dob,
          country_id: profileData.country_id,
          gender: formValues.gender,
        })
      );
    }

    return () => {
      setValid(false);
    };
  }, [valid]);

  useEffect(() => {
    if (updateProfileFailure) {
      setFormState({ ...initialFormState });
      setFormType("view");
      dispatch(fetchProfile());
    }

    return () => {
      dispatch(restoreUpdateProfileInitial());
    };
  }, [updateProfileFailure]);

  useEffect(() => {
    if (updateProfileSuccess) {
      setFormState({ ...initialFormState });
      setDisabledState(true);
      setDisableField(true);
      setFormType("view");
      dispatch(fetchProfile());
    }

    return () => {
      dispatch(restoreUpdateProfileInitial());
    };
  }, [updateProfileSuccess]);

  useEffect(() => {
    if (Object.keys(profileData).length !== 0) {
      const spliteNameArray = profileData.name !== null ? profileData.name.split(" ") : "";

      setFormValues({
        ...formValues,
        firstname: spliteNameArray !== "" ? spliteNameArray[0] : "",
        lastname: spliteNameArray !== "" ? spliteNameArray[1] : "",
        phone:
          profileData.phone !== null
            ? profileData.phone[0] === "+"
              ? profileData.phone.slice(1)
              : profileData.phone
            : "",
        dob: profileData.dob !== null ? profileData.dob : "",
        country_id: profileData.country_id !== null ? profileData.country_id : "No Country",
        gender: profileData.gender !== null ? profileData.gender : "No Gender",
        email: profileData.email !== null ? profileData.email : "",
        profile_image: profileData.image_data !== null ? profileData.image_data : "",
      });
    }
  }, [profileData]);

  const handleKeyPress = (e) => {
    let keyCode = e.keyCode ? e.keyCode : e.which;
    if (
      (keyCode > 47 && keyCode < 58) ||
      keyCode == 32 ||
      e.shiftKey ||
      keyCode == 106 ||
      keyCode == 107 ||
      keyCode == 110 ||
      keyCode == 111 ||
      keyCode == 186 ||
      keyCode == 187 ||
      keyCode == 188 ||
      (keyCode >= 190 && keyCode < 222) ||
      (keyCode >= 96 && keyCode <= 105) ||
      keyCode == 144
    ) {
      e.preventDefault();
    }
  };

  const deleteAccountHandler = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete Account!",
    }).then((result) => {
      if (result.isConfirmed) {
        setBtnDisabledState(true);
        dispatch(deleteAccount(email));
      }
    });
  };

  const handleLogout = () => {
    googleLogout();
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    if (deleteAccountFailure) {
      setBtnDisabledState(false);
    }

    return () => {
      dispatch(restoredeleteAccountInitial());
    };
  }, [deleteAccountFailure]);

  useEffect(() => {
    if (deleteAccountSuccess) {
      handleLogout();
    }

    return () => {
      dispatch(restoredeleteAccountInitial());
    };
  }, [deleteAccountSuccess]);

  const onInputChange = (e) => {
    console.log(e.target.files);
    let uploadedFile = e.target.files[0];

    const maxSizeInBytes = 2 * 1024 * 1024; // 2MB in bytes

    if (uploadedFile && uploadedFile.size > maxSizeInBytes) {
      setFileSizeError(true);
    } else {
      setFileSizeError(false);
      setDisplayPicture(URL.createObjectURL(uploadedFile));
      setFormValues({
        ...formValues,
        profile_image: uploadedFile,
      });
    }

    // setFile(uploadedFile);
  };

  const uploadProfImage = () => {
    if (typeof formValues.profile_image === "object") {
      setProfileImageSpinner(true);
      let formData = new FormData();
      formData.append("image", formValues.profile_image);

      dispatch(uploadProfileImage(formData));
    } else {
      setFileSizeError(true);
    }
  };

  useEffect(() => {
    if (uploadProfImagSuccess || uploadProfImagFailure) {
      setProfileImageSpinner(false);
    }

    return () => {
      dispatch(restoreUploadProfileImageInitial());
    };
  }, [uploadProfImagSuccess, uploadProfImagFailure]);

  return (
    <>
      <div className="bio-wrapper">
        <p className="bio-wrapper-text">You Can Modify Your Name And Gender</p>
        <div className="bio-form">
          {formType === "view" ? (
            <input
              name="email"
              type="email"
              placeholder="Email*"
              value={formValues.email}
              disabled
              className="email-input"
            />
          ) : (
            ""
          )}

          <div className="input-group">
            <div className="input-group-wrapper-left">
              <input
                name="firstname"
                type="text"
                placeholder="Firstname*"
                value={formValues.firstname}
                required
                disabled={disabledState}
                onChange={(e) => firstnameHandler(e)}
                onBlur={(e) => handleFocus(e)}
                focused={focused.firstname.toString()}
                onKeyDown={(e) => handleKeyPress(e)}
                onKeyUp={(e) => handleKeyPress(e)}
                pattern="[A-Z'][a-zA-Z'-]+"
              />
              <p className="profile-validation-error-text">
                firstname is required (Uppercase first)
              </p>
            </div>

            <div className="input-group-wrapper-right">
              <input
                name="lastname"
                type="text"
                placeholder="Lastname*"
                value={formValues.lastname}
                required
                disabled={disabledState}
                onChange={(e) => lastnameHandler(e)}
                onBlur={(e) => handleFocus(e)}
                focused={focused.lastname.toString()}
                onKeyDown={(e) => handleKeyPress(e)}
                onKeyUp={(e) => handleKeyPress(e)}
                pattern="[A-Z'][a-zA-Z'-]+"
              />
              <p className="profile-validation-error-text">
                lastname is required (Uppercase first)
              </p>
            </div>
          </div>
          <div className="input-group">
            <div className="input-group-wrapper-left">
              <input
                name="dob"
                type="date"
                placeholder="Date of Birth*"
                value={formValues.dob}
                required
                disabled={disableField}
                onChange={(e) => dobHandler(e)}
              />
            </div>

            <div className="input-group-wrapper-right">
              <input
                name="phone"
                type="number"
                placeholder="Phone Number*"
                value={formValues.phone}
                required
                disabled={disabledState}
                onChange={(e) => phoneHandler(e)}
                onBlur={(e) => handleFocus(e)}
                focused={focused.phone.toString()}
              />
              <p className="profile-validation-error-text">phone number is required</p>
            </div>
          </div>

          <div className="input-group">
            <div className="input-group-wrapper-left">
              <select
                className="gender-select"
                onChange={(e) => countryHandler(e)}
                disabled={disableField}
                value={formValues.country_id}
              >
                <option value="No Country" disabled>
                  No Country
                </option>
                {countries.map((country) => {
                  return (
                    <option value={country.id} key={country.id}>
                      {country.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="input-group-wrapper-right">
              {formType === "view" ? (
                <input
                  name="Gender"
                  type="text"
                  placeholder="Gender*"
                  value={formValues.gender}
                  required
                  disabled
                />
              ) : (
                <>
                  <select
                    className="gender-select"
                    disabled={disabledState}
                    onChange={(e) => genderHandler(e)}
                    value={formValues.gender}
                  >
                    <option value="No Gender" disabled>
                      No Gender Selected
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>

                  {genderValidation === true ? (
                    <p className="select-validation-error-text">Select your Gender</p>
                  ) : (
                    ""
                  )}
                </>
              )}
            </div>
          </div>

          <button
            className="bio-button"
            disabled={formState.buttonState}
            onClick={() => handleSubmit()}
          >
            {formState.spinner === true ? <Spinner /> : formState.buttonText}
          </button>
        </div>
      </div>
      <div className="profile-picture-wrapper">
        <p className="bio-wrapper-text">Upload a head shot</p>
        <div className="upload-profile-image-wrapper">
          <div class="user-profile-img">
            <img src={displayPicture === null ? formValues.profile_image : displayPicture} alt="" />
          </div>
          <input
            id="fileInput"
            hidden
            accept="image/*"
            type="file"
            onChange={(e) => onInputChange(e)}
          />
          <label for="fileInput" class="custom-file-input">
            <span>Choose an image</span>
          </label>
          <button className="upload-image" onClick={() => uploadProfImage()}>
            {profileImageSpinner === true ? <Spinner /> : "Upload"}
          </button>
        </div>

        {fileSizeError ? (
          <small className="size-error-text">Please upload an image not more than 2MB</small>
        ) : (
          ""
        )}
      </div>
      <div className="delete-wrapper">
        <p className="bio-wrapper-text">You can delete your account</p>
        <button
          className="delete-button"
          onClick={() => deleteAccountHandler(formValues.email)}
          disabled={btnDisabledState}
        >
          Delete Account
        </button>
      </div>
    </>
  );
};

export default Bio;
