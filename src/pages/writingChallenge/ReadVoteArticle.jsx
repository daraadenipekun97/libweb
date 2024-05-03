import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Avatar from "../../assets/images/avatar.png"
import UserNavbar from "../../components/userNavbar/UserNavbar";
import './readvotearticle.css'
import Swal from "sweetalert2";
import {fetchArticleById, voteArticle, restoreVoteArticleInitial, fetchProfile } from "../../Actions";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";

const ReadVoteArticle = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();


    const { profileData } = useSelector((state) => state.profile);



    const { articleById, voteArticleSuccess, voteArticleFailure } = useSelector((state) => state.challenge);

    const [articleVoted, setArticleVoted] = useState(false);

    const [paragraph, setParagraph] = useState(
        [
          {
            splitText: 'Loading article...'
          }
        ]
      );

    useEffect(() => {
         dispatch(fetchProfile());
        dispatch(fetchArticleById(params.id));



       

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

        console.log(articleById.votes)
        console.log("profile", profileData.id)
        let articlevoted = articleById?.votes?.find(item => item.voter_id === profileData?.id);
        console.log('articlevoted ', articlevoted)
        setArticleVoted(articlevoted !== undefined ? true : false);



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

            <div className="profile">
            <div class="profile-img">
                  <img src={articleById?.user?.image_data?.includes("avatar.png") ? Avatar : articleById?.user?.image_data} alt="" />
              </div>
              <span class="name">{articleById?.user?.name}</span>
            </div>


            <div className="article-vote-share">
               {
                articleVoted? (
                  <div className="article-vote" 
                  // onClick={() => handleVote()}
  
                  >
                  <AiFillHeart
                      size={25}
                      color="red"
                      />
                      <small>Article Voted</small>

                  </div>
                ) :(
                  <div className="article-vote" 
                  onClick={() => handleVote()}
  
                  >
                  <AiOutlineHeart
                      size={25}
                      color="red"
                      />
                      <small>Vote this article</small>
                  </div>
                )
               }
                <small style={{color:"brown"}}>*you can only vote once throughout the challenge</small>
            </div>


        <div className="social">
          <span className="share-title">share this article</span>
          <div>
            <FacebookShareButton
              className="social-btn"
              url={`${window.location.href}`}
            >
              <FacebookIcon
                size={20}
                round
              />
            </FacebookShareButton>


            <TwitterShareButton
              className="social-btn"
              url={`${window.location.href}`}
              title="Please check out this article on mylibribooks and vote"
            //  hashtag="#MyLibriBooks #blog"
            >
              <TwitterIcon
                size={20}
                round

              />
            </TwitterShareButton>

            <LinkedinShareButton
              className="social-btn"
              url={`${window.location.href}`}
              title="Please check out this article on mylibribooks and vote"
              summary=""
            >
              <LinkedinIcon
                size={20}
                round

              />
            </LinkedinShareButton>

            <WhatsappShareButton
              url={`${window.location.href}`}
              title="Please check out this article on mylibribooks and vote"
              separator=" "
            >
              <WhatsappIcon
                size={20}
                round

              />
            </WhatsappShareButton>
          </div>
        </div>

        </div>

    </>
  )
}

export default ReadVoteArticle