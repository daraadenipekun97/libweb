import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import Preloader from "../../components/preloader/Preloader";
import "./library.css";
import { Footer } from "../../containers";
import Tab from "../../components/tab/Tab";
import useUpdateProfileWarning from "../../Hooks/useUpdateProfileWarning";
import { fetchProfile } from "../../Actions";
import ModalRedirect from "../../components/modal/ModalRedirect";
import {  useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Library = () => {

  // const [prompt, setDirty, setPristine] =  useUpdateProfileWarning();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();




  const {
    profileData,
  } = useSelector((state) => state.profile);
  const [showRedirectModal, setShowRedirectModal] = useState(false)


    
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);


  const verifyCheckHandler = () => {

    Swal.fire({
      title: 'Account Verification',
      text: "Please verify you account before proceeding!",
      icon: 'warning',
      allowOutsideClick: false,
      showCancelButton: false,
      confirmButtonColor: '#5e458b',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok',
      width: 400,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/verify")
      }
    })

  }


  useEffect(() => {
    if(profileData){

      if(profileData.dob === null || profileData.country_id === null && (location.pathname !== "/home/profile") ){
        setShowRedirectModal(true)
      }else {

      }

      if (profileData.email_verified_at === null) {
        verifyCheckHandler();
      }

    }else{

    }

  },[profileData])

 
   


  return (
    <>
      <UserNavbar />
      <Tab tabName="library" />
      <Footer />
      <ModalRedirect  showRedirectModal={showRedirectModal}  />

    </>
  );
};

export default Library;
