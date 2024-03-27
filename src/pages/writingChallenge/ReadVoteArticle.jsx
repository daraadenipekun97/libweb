import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import UserNavbar from "../../components/userNavbar/UserNavbar";
import './readvotearticle.css'
import Swal from "sweetalert2";
import {fetchArticleById, voteArticle, restoreVoteArticleInitial, fetchProfile } from "../../Actions";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";


const ReadVoteArticle = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();


    const { profileData } = useSelector((state) => state.profile);



    const { articleById, voteArticleSuccess, voteArticleFailure } = useSelector((state) => state.challenge);

    const [paragraph, setParagraph] = useState(
        [
          {
            splitText: 'Loading article...'
          }
        ]
      );

    useEffect(() => {
        dispatch(fetchArticleById(params.id));
        dispatch(fetchProfile());

      }, [dispatch]);

      const voteVerify = (id) => {

        Swal.fire({
            title: "Verify",
            text: "Are you sure you want to vote this article",
            icon: "warning",
            allowOutsideClick: false,
            showCancelButton: true,
            confirmButtonColor: "#5e458b",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok",
            width: 400,
          }).then((result) => {
            if (result.isConfirmed) {
            //   navigate("/home/subscription");
                dispatch(voteArticle(id));
            }
          });

      }

      const verifySubscriptionStatus = () => {
        Swal.fire({
          title: "Opps",
          text: "Your subscription has expired. Please subscribe and try again",
          icon: "warning",
          allowOutsideClick: false,
          showCancelButton: false,
          confirmButtonColor: "#5e458b",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ok",
          width: 400,
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/home/subscription");
          }
        });
      };


      useEffect(() => {
        if (voteArticleSuccess) {
          console.log("article voted successfully");
          dispatch(fetchArticleById(params.id));
        }
    
        return () => {
          dispatch(restoreVoteArticleInitial());
        };
      }, [voteArticleSuccess]);

      useEffect(() => {
        if (voteArticleFailure) {
          console.log("article voting failed");
          dispatch(fetchArticleById(params.id));
        }
    
        return () => {
          dispatch(restoreVoteArticleInitial());
        };
      }, [voteArticleFailure]);

      useEffect(() => {
        callParagaraphs()
      }, [articleById])


      const callParagaraphs = () => {
        if (Object.keys(articleById).length !== 0) {
      
          let paragraphs = articleById?.content.split(/(?<=\.)\s+(?=[A-Z])/).map(text => ({ splitText: text }));
          setParagraph(paragraphs)
          
        }else{
          setParagraph(
            [
              {
                splitText: 'Loading article...'
              }
            ]
          )
        }
       }

       const handleVote = () => {
          if(profileData.subscription_status === null || profileData.subscription_status === 'inactive'){
            verifySubscriptionStatus();
          }
          else{
            voteVerify(params.id)
          }
       }


  return (
    <>
        <UserNavbar />

        <div className="article-writeup-wrapper">
        <div className="backbtn">
          <a href="javascript:history.back()" className="back-to-category">Back To Category</a>
        </div>
            <div className="article-writeup">
            {
            paragraph?.map((item) => (
              <p className="article-text">
                {item.splitText.replace(/(<([^>]+)>|&\w+;)/gi, '')}
              </p>
            ))
          }
            </div>
            <div className="article-vote-share">
                <div className="article-vote" 
                onClick={() => handleVote()}

                >
                <AiOutlineHeart
                    size={25}
                    color="red"
                    />
                    <small>Vote this article</small>
                </div>
               

            </div>

        </div>

    </>
  )
}

export default ReadVoteArticle