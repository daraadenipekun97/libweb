import React, { useState, useEffect } from "react";
import "./singleblog.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Placeholder from "../../assets/images/placeholder.png";
import OkadaImage from "../../assets/images/Okada_Books_statement.jpg";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { fetchBlogById } from "../../Actions";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon
} from "react-share";

const SingleBlog = () => {


  const params = useParams();

  const dispatch = useDispatch();

  const { blogById } = useSelector((state) => state.blog);

  const [paragraph, setParagraph] = useState(
    [
      {
        splitText: 'Loading. Blog'
      }
    ]
  );


  useEffect(() => {

    dispatch(fetchBlogById(params.title));
  }, [dispatch]);

  useEffect(() => {
    callParagaraphs()
  }, [blogById])
  

 const callParagaraphs = () => {
  if (Object.keys(blogById).length !== 0) {

    let paragraphs = blogById?.content.split(/(?<=\.)\s+(?=[A-Z])/).map(text => ({ splitText: text }));
    setParagraph(paragraphs)
    
  }else{
    setParagraph(
      [
        {
          splitText: 'Loading. Blog'
        }
      ]
    )
  }
 }

 const currentPageUrl = window.location.href;

  return (
    <>
    <div className="blog-header-container">

        <div className="single-book-content blog-container">
          <a href="/blog" className="back-home">Back To Home</a>
          <h1 className="header-title">{blogById?.title}</h1>
          <img src={blogById.blog_image_data ? blogById?.blog_image_data : Placeholder} alt="placeholder" className="header-img" />

        </div>
      </div>

      <div className="blog-body-container blog-container">
          {/* <h2 className="blog-sub-heading">Hello</h2> */}

          {
            paragraph?.map((item) => (
              <p className="blog-post-text">
                {item.splitText}
              </p>
            ))
          }
         

          {/* <img src={OkadaImage} alt="Adebayo Jacobs-Amoo"  className="body-img" /> */}

          {/* <p className="blog-post-text">
          In these challenging times, it's important to remember the impact Okada Books had in shaping
        the Nigerian literacy community. Their dedication, hard work, and determination in the face
        of the unique challenges of the Nigerian business landscape have been nothing short of
        inspiring.
        <br />
        To Okechukwu Ofili, his wonderful team, and the entire literary community at Okada Books, we
        at MyLibri Books extend our deepest sympathies. Your loss is our loss, and while we mourn
        the end of this chapter, we also look forward with hope to the new beginnings it brings.
        Change, though difficult, opens doors to new opportunities. We eagerly await the next
        venture that the brilliant minds behind Okada Books will embark upon and wish them all the
        success they rightly deserve.
        <br />
        In times like these, we are reminded of the power of community and resilience. Let us
        continue to support and uplift each other, keeping the spirit of innovation and passion for
        literature alive. With heartfelt sympathy and anticipation for the future.
        <br />
        Adebayo Jacobs-Amoo
        <br />
        Founder/CEO, MyLibri Books
          </p> */}
          
      </div>

      <div className="blog-share blog-container">
          <span className="share-title">Share this blog post</span>
          <div className="social">

            <FacebookShareButton
            className="social-btn"
             url={currentPageUrl}
            //  quote="Please check out this recent blog post from MyLibriBooks"
            //  hashtag="#MyLibriBooks #blog"
            // url={`http://localhost:3000/blog/${blogById.title}`}
            >
              <FacebookIcon
                size={25}
                round
              />
            </FacebookShareButton>


            <TwitterShareButton
              className="social-btn"
             url={currentPageUrl}
            title="Please check out this recent blog post from MyLibriBooks"
            //  hashtag="#MyLibriBooks #blog"
            >
              <TwitterIcon
                size={25}
                round

              />
            </TwitterShareButton>

            <LinkedinShareButton
            className="social-btn"
             url={currentPageUrl}
            title="Please check out this recent blog post from MyLibriBooks"
             summary="A summary of the blog"
            >
              <LinkedinIcon
                size={25}
                round

              />
            </LinkedinShareButton>

            <WhatsappShareButton
             url={currentPageUrl}
            title="Please check out this recent blog post from MyLibriBooks"
             separator=" "
            >
              <WhatsappIcon
                size={25}
                round

              />
            </WhatsappShareButton>


          {/* <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook size={20} />
              </a> */}

              {/* <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={20} />
              </a> */}
              {/* <a href="#" target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle size={20} />
              </a> */}
          </div>
      </div>
      </>
  );
};

export default SingleBlog;
