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
import {  useLocation } from "react-router-dom";

const Library = () => {

  // const [prompt, setDirty, setPristine] =  useUpdateProfileWarning();
  const dispatch = useDispatch();
  const location = useLocation();



  const {
    profileData,
  } = useSelector((state) => state.profile);
  const [showRedirectModal, setShowRedirectModal] = useState(false)


    
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);


  useEffect(() => {
    if(profileData){

      if(profileData.dob === null || profileData.country_id === null && (location.pathname !== "/home/profile") ){
        setShowRedirectModal(true)
      }else {

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
