import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./writingpage.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { PurpleButton, WhiteButton } from "../../components/button/Button";

import {
  createArticle,
  restoreCreateArticleInitial,
  editArticle,
  restoreEditArticleInitial,
  fetchArticleByUser,
  sendArticleLink,
} from "../../Actions";
import Swal from "sweetalert2";
import UserNavbar from "../../components/userNavbar/UserNavbar";

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

const WritingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { profileData } = useSelector((state) => state.profile);

  const {
    createArticleSuccess,
    createArticleFailure,
    editArticleSuccess,
    editArticleFailure,
    articleById,
    voteArticleSuccess,
    voteArticleFailure,
    articleByUser,
  } = useSelector((state) => state.challenge);

  const [editor, setEditor] = useState(null);
  const [wordCount, setWordCount] = useState(0);
  const [articleText, setArticleText] = useState("");
  const [wordLimitValidation, setWordLimitValidation] = useState(false);

  // useEffect(() => {
  //     if(profileData.subscription_status !== "active"){
  //         verifySubscriptionStatus()
  //       }
  //   }, [dispatch]);

  useEffect(() => {
    dispatch(fetchArticleByUser());
  }, [dispatch]);

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

  function generateRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
  }

  const verifySubmitArticle = () => {
    Swal.fire({
      title: "Verify",
      text: "Are you sure you want to submit your article. Please note once you submit an article, it can be read by the public",
      icon: "warning",
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonColor: "#5e458b",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok",
      width: 400,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          createArticle({
            article_topic_id: Number(params.id),
            article_body: articleText,
          })
        );
        // console.log(articleText)
      }
    });
  };

  const verifyEditArticle = () => {
    Swal.fire({
      title: "Verify",
      text: "Are you sure you want to edit your article. Please note you won't be able to edit you article after it has been voted for",
      icon: "warning",
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonColor: "#5e458b",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok",
      width: 400,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          editArticle({
            article_topic_id: articleByUser?.article_topic_id,
            article_body: articleText,
            article_id: articleByUser?.id,
          })
        );
        // console.log(articleText)
      }
    });
  };

  useEffect(() => {
    if (editor) {
      const updateWordCount = () => {
        const data = editor.getData();
        const words = data
          .replace(/<[^>]*>/g, " ") // Remove HTML tags
          .split(/\s+/)
          .filter((word) => word !== "").length;

        setWordCount(words);
      };

      editor.model.document.on("change", updateWordCount);

      // Initial word count
      updateWordCount();
    }
  }, [editor]);

  const handleSubmitArticle = () => {
    if (wordCount <= 500) {
      verifySubmitArticle();
    } else {
      setWordLimitValidation(true);
    }
  };

  const handleEditArticle = () => {
    if (wordCount <= 500) {
      verifyEditArticle();
    } else {
      setWordLimitValidation(true);
    }
  };

  useEffect(() => {
    if (createArticleSuccess) {
      // console.log("article created successfully");
      dispatch(fetchArticleByUser());
      // setTimeout(() => {
      //   dispatch(sendArticleLink({
      //     article_id: articleByUser?.id,
      //     link: `https://${window.location.hostname}/home/articlecategory/${articleByUser?.id}`
      //   }))
      // }, 2000);
    }

    return () => {
      dispatch(restoreCreateArticleInitial());
    };
  }, [createArticleSuccess]);

  // useEffect(() => {
  //   if (createArticleFailure) {
  //     console.log("article created successfully");
  //     dispatch(fetchArticleByUser())
  //     setTimeout(() => {
  //       dispatch(sendArticleLink({
  //         article_id: articleByUser?.id,
  //         link: `${window.location.hostname}/home/articlecategory/${articleByUser?.id}`
  //       }))
  //     }, 2000);
  //   }

  //   return () => {
  //     dispatch(restoreCreateArticleInitial());
  //   };
  // }, [createArticleFailure]);

  useEffect(() => {
    if (editArticleSuccess) {
      // console.log("article edited successfully");
      dispatch(fetchArticleByUser());
    }

    return () => {
      dispatch(restoreEditArticleInitial());
    };
  }, [editArticleSuccess]);

  return (
    <>
      <UserNavbar />
      <div className="article-wrapper">
        <div className="backbtn">
          <a href="javascript:history.back()" className="back-to-challenge">
            Back To Home
          </a>
        </div>
        <CKEditor
          editor={ClassicEditor}
          data={articleByUser?.content}
          onReady={(editor) => {
            // console.log("CKEditor5 React Component is ready to use!", editor);
            setEditor(editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            // console.log({ event, editor, data });
            setWordLimitValidation(false);
            setArticleText(data);
          }}
          style={{ height: "500px" }} // Adjust the height value as needed
        />
        <div className="word-count-wrapper">
          <p className="article-text">Word Count: {wordCount}</p>
          {wordLimitValidation ? (
            <p className="word-limit">You have exceeding the maximum word limit of 500 words</p>
          ) : (
            ""
          )}
        </div>
        {articleByUser?.created_at ? (
          <></>
        ) : (
          <PurpleButton text="Submit" onClickFunction={handleSubmitArticle} />
        )}
        &nbsp;
        {articleByUser?.votes && articleByUser?.votes.length > 0 ? (
          <></>
        ) : (
          <WhiteButton text="Edit Article" onClickFunction={handleEditArticle} />
        )}
        {articleByUser?.created_at ? (
          <div className="social">
            <span className="share-title">share this article</span>
            <div>
              <FacebookShareButton
                className="social-btn"
                url={`https://${window.location.hostname}/home/articlecategory/${articleByUser?.id}`}
                //  quote="Please check out this recent blog post from MyLibriBooks"
                //  hashtag="#MyLibriBooks #blog"
                // url={`http://localhost:3000/blog/${blogById.title}`}
              >
                <FacebookIcon size={20} round />
              </FacebookShareButton>

              <TwitterShareButton
                className="social-btn"
                url={`https://${window.location.hostname}/home/articlecategory/${articleByUser?.id}`}
                title="Please check out my article on MyLibriBooks"
                //  hashtag="#MyLibriBooks #blog"
              >
                <TwitterIcon size={20} round />
              </TwitterShareButton>

              <LinkedinShareButton
                className="social-btn"
                url={`https://${window.location.hostname}/home/articlecategory/${articleByUser?.id}`}
                title="Please check out my article on MyLibriBooks"
                summary=""
              >
                <LinkedinIcon size={20} round />
              </LinkedinShareButton>

              <WhatsappShareButton
                url={`https://${window.location.hostname}/home/articlecategory/${articleByUser?.id}`}
                title="Please check out my article on MyLibriBooks"
                separator=" "
              >
                <WhatsappIcon size={20} round />
              </WhatsappShareButton>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default WritingPage;
