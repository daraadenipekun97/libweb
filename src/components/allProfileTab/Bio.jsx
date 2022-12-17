import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import "./css/bio.css";
import Select from "react-select";
import { fetchAllCountries, fetchProfile, restoreUpdateProfileInitial, updateProfile } from '../../Actions';
import Spinner from '../spinner/Spinner';



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

const Bio = () => {

  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.getAll);
  const {profileData, updateProfileSuccess, updateProfileFailure} = useSelector((state) => state.profile);


  const [theCountry, setTheCountry] = useState([]);
  const [disabledState, setDisabledState] = useState(true);


  const initialFormState = {
    buttonState: false,
    buttonText: "Edit",
    spinner: false,
  };
  const [formState, setFormState] = useState({ ...initialFormState });




  const initialFormValues = {
    firstname: "",
    lastname: "",
    phone: "",
    dob: "",
    country_id: 0,
    gender: "",

    //not being sent to API
    email:""
  };

  const [formValues, setFormValues] = useState({ ...initialFormValues });



  const [formType, setFormType] = useState("view");

  const [valid, setValid] = useState(false);
  const [genderValidation, setGenderValidation] = useState(false);

useEffect(() => {
  dispatch(fetchAllCountries()); 
  dispatch(fetchProfile())


}, [dispatch])


useEffect(() => {


  if(Object.keys(profileData).length !==0){

    
  
    const spliteNameArray = profileData.name.split(' ');
    
    setFormValues({
      ...formValues,
      firstname: spliteNameArray[0],
      lastname: spliteNameArray[1],
      phone: profileData.phone !== null ? profileData.phone : "",
      dob: profileData.dob !== null ? profileData.dob : "",
      country_id: profileData.country.id !== null ? profileData.country.id : "No Country" ,
      gender: profileData.gender !== null ? profileData.gender :"No Gender",
      email: profileData.email !==null ? profileData.email : ""
    })

  

  }

  

}, [profileData])




 

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
    }  
  };



  const handleSubmit = () => {

    if(formType === "view"){
      setFormType('update')
      setDisabledState(false)
      setFormState({
        ...formState,
        buttonState: false,
        buttonText: "Update Profile",
        spinner: false,
      });
    }
    if(formType === "update"){

        if(
         
            formValues.firstname !== "" &&
            formValues.lastname !== "" &&
            formValues.gender !== "No Gender"
        ){

          setFormState({
            ...formState,
            buttonState: true,
            buttonText: "Register",
            spinner: true,
          });

          setValid(true);


        }
        else{

          setFocused({
            ...focused,
            firstname:true,
            lastname:true
          })

          setGenderValidation(true)
        }
    }
  }


  useEffect(() => {
  
    if (valid) {

      dispatch(updateProfile({
        firstname:formValues.firstname,
        lastname:formValues.lastname,
        phone: formValues.phone,
        dob:formValues.dob,
        country_id:formValues.country_id,
        gender:formValues.gender,
      }))

     
      
    }
  
    return () => {
      setValid(false);
    }
  }, [valid])


  useEffect(() => {
    if (updateProfileFailure) {

      setFormState({...initialFormState})
      setFormType("view")
      dispatch(fetchProfile())

      
    }
  
    return () => {
      dispatch(restoreUpdateProfileInitial())
    }
  }, [updateProfileFailure])

  useEffect(() => {
    if (updateProfileSuccess) {

      setFormState({...initialFormState})
      setDisabledState(true)
      setFormType("view")
      dispatch(fetchProfile())

      
    }
  
    return () => {
      dispatch(restoreUpdateProfileInitial())
    }
  }, [updateProfileSuccess])
  
  
  

  return (
    <div className='bio-wrapper'>
      <p className='bio-wrapper-text'>You Can Modify Your Name And Gender</p>
      <div className="bio-form">
        {
          formType === "view" ? (

            <input
            name="email"
            type="email"
            placeholder="Email*"
            value={formValues.email}
            disabled
            className='email-input'
              />

          ): ""
        }

        <div className="input-group">
              <div className="input-group-wrapper-left">
                <input
                  name="firstname"
                  type="text"
                  placeholder="Firstname*"
                  value={formValues.firstname}
                  required
                  disabled = {disabledState}
                  onChange={(e) => firstnameHandler(e)}
                  onBlur={(e) => handleFocus(e)}
                  focused={focused.firstname.toString()}
                />
                <p className="profile-validation-error-text">firstname is required</p>
              </div>

              <div className="input-group-wrapper-right">
                <input
                  name="lastname"
                  type="text"
                  placeholder="Lastname*"
                  value={formValues.lastname}
                  required
                  disabled = {disabledState}
                  onChange={(e) => lastnameHandler(e)}
                  onBlur={(e) => handleFocus(e)}
                  focused={focused.lastname.toString()}
                  
                />
                <p className="profile-validation-error-text">lastname is required</p>
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
                  disabled
                />
              </div>

              <div className="input-group-wrapper-right">
                <input
                  name="phone"
                  type="number"
                  placeholder="Phone Number*"
                  value={formValues.phone}
                  required
                  disabled
                
                />
                <p className="profile-validation-error-text">lastname is required</p>
              </div>
        </div>


        <div className="input-group">
              <div className="input-group-wrapper-left">
              <select  
                    className='gender-select' 
                    disabled
                    value = {formValues.country_id}

                    
                    >
                    <option value="No Country" disabled><em>No Country</em></option>
                    {
                      countries.map((country) => {
                        return <option value={country.id}>{country.name}</option>
                      } )
                    }
                  </select>
              </div>

              <div className="input-group-wrapper-right">
                {
                  formType === "view"? (

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
                    className='gender-select' 
                    disabled = {disabledState}
                    onChange={(e) => genderHandler(e)}
                    value = {formValues.gender}

                    
                    >
                    <option value="No Gender" disabled><em>No Gender Selected</em> </option>
                    <option value="male" >Male</option>
                    <option value="female">Female</option>
                  </select>

                  {genderValidation === true ? (
                  <p className="select-validation-error-text">Select your Gender</p>
                ) : (
                  ""
                )}

                  </>

                  )
                }
             
              </div>
        </div>


        <button className='bio-button'  disabled={formState.buttonState} onClick={() => handleSubmit()}>
            {formState.spinner === true ? <Spinner /> : formState.buttonText}
        </button>

      </div>
    </div>
  )
}

export default Bio