import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {useNavigate, useParams } from "react-router-dom";
import "./writingpage.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PurpleButton, WhiteButton } from '../../components/button/Button';

import {
    createArticle,
    restoreCreateArticleInitial,
    editArticle,
    restoreEditArticleInitial,

  } from "../../Actions";
  import Swal from "sweetalert2";
import UserNavbar from '../../components/userNavbar/UserNavbar';


const WritingPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();



    const { profileData } = useSelector(
        (state) => state.profile
      );

      const { createArticleSuccess, createArticleFailure , editArticleSuccess, editArticleFailure, articleById, voteArticleSuccess, voteArticleFailure } = useSelector(
        (state) => state.challenge
      );

      const [editor, setEditor] = useState(null);
      const [wordCount, setWordCount] = useState(0);
      const [articleText, setArticleText] = useState("");
      const [wordLimitValidation, setWordLimitValidation] = useState(false);

    // useEffect(() => {
    //     if(profileData.subscription_status !== "active"){
    //         verifySubscriptionStatus()
    //       }
    //   }, [dispatch]);

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

      function generateRandomNumber() {
        return Math.floor(Math.random() * 1000) + 1;
      }

      const  verifySubmitArticle = () => {
    
        Swal.fire({
          title: 'Verify',
          text: "Are you sure you want to submit your article",
          icon: 'warning',
          allowOutsideClick: false,
          showCancelButton: true,
          confirmButtonColor: '#5e458b',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok',
          width: 400,
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(createArticle(
              {
                article_id: params.id,
                article_body: articleText
              }
            ));
            // console.log(articleText)
          }
        })
    
      }


      useEffect(() => {
        if (editor) {
          const updateWordCount = () => {
            const data = editor.getData();
            const words = data
              .replace(/<[^>]*>/g, ' ') // Remove HTML tags
              .split(/\s+/)
              .filter((word) => word !== '')
              .length;
    
            setWordCount(words);
          };
    
          editor.model.document.on('change', updateWordCount);
    
          // Initial word count
          updateWordCount();
        }
      }, [editor]);

      const handleSubmitArticle = () =>{
        if(wordCount <= 1000){
          verifySubmitArticle();
        }
        else{
          setWordLimitValidation(true);
        }
      }
    
      useEffect(() => {
        
        if (createArticleSuccess) {
          console.log('article created successfully')

        }

      
        return () => {
          dispatch(restoreCreateArticleInitial())
        }
      }, [createArticleSuccess])
      

  return (
    <>
        <UserNavbar />
        <div className="article-wrapper">
        <CKEditor
        editor={ ClassicEditor }
        data="<p>Start Typing Here</p>"
        onReady={ ( editor ) => {
          console.log( "CKEditor5 React Component is ready to use!", editor );
          setEditor(editor);
        } }
        onChange={ ( event, editor ) => {
          const data = editor.getData();
          console.log( { event, editor, data } );
          setWordLimitValidation(false)
          setArticleText(data);
        } }
      />
      <div className="word-count-wrapper">
      <p className='article-text'>Word Count: {wordCount}</p>
    {
      wordLimitValidation ? <p className='word-limit'>You have exceeding the maximum word limit of 1000 words</p> : ""
    }
      </div>
  
   
      <PurpleButton text="Submit Article"  onClickFunction={handleSubmitArticle}  />
      &nbsp;
      <WhiteButton text="Edit Article"  onClickFunction={handleSubmitArticle}  />

        </div>
    </>
  )
}

export default WritingPage