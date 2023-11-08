import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {useNavigate } from "react-router-dom";


// import {
//     fetchProfile,
//   } from "../../Actions";
  import Swal from "sweetalert2";
import UserNavbar from '../../components/userNavbar/UserNavbar';


const WritingPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { profileData } = useSelector(
        (state) => state.profile
      );

    useEffect(() => {
        if(profileData.subscription_status !== "active"){
            verifySubscriptionStatus()
          }
      }, [dispatch]);

      const verifySubscriptionStatus = () => {
    
        Swal.fire({
          title: 'Opps',
          text: "Your subscription has expired. Please subscribe and try again",
          icon: 'warning',
          allowOutsideClick: false,
          showCancelButton: false,
          confirmButtonColor: '#5e458b',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok',
          width: 400,
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/home/subscription")
          }
        })
    
      }

    

  return (
    <>
        <UserNavbar />
    </>
  )
}

export default WritingPage