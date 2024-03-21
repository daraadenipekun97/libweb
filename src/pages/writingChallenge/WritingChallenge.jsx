import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import "./writingchallenge.css";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

import { PurpleButton } from "../../components/button/Button";
import { fetchProfile, fetchAllArticleTopics, fetchArticleByUser } from "../../Actions";
import Swal from "sweetalert2";

const WritingChallenge = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { profileData } = useSelector((state) => state.profile);

  const { allTopics, articleByUser } = useSelector((state) => state.challenge);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "#fff",
      border: "2px solid #e9eaee",
      minHeight: "30px",
      height: "50px",
      boxShadow: state.isFocused ? null : null,
      marginBottom: "1rem",
      marginTop: "1rem",
      fontSize: "15px",

      "&:hover": {
        border: "1px solid #5e458b",
        cursor: "pointer",
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

  const [checkedError, setCheckedError] = useState(false);
  const [topicError, setTopicError] = useState(false);
  const [termsCheckBox, setTermsCheckBox] = useState(false);
  const [theTopics, setTheTopics] = useState([]);
  const [topic, setTopic] = useState(null);

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchAllArticleTopics());
    dispatch(fetchArticleByUser());
    // setTopic(articleByUser)
  }, [dispatch]);

  useEffect(() => {
    const createTopicSelect = () => {
      let topicsData = [];
      allTopics.map((allTopics) => {
        let option = { label: allTopics.name, value: allTopics.id };
        topicsData.push(option);
      });

      setTheTopics(topicsData);
    };

    allTopics.length !== 0 && createTopicSelect();
  }, [allTopics]);

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

  const termsHandler = (e) => {
    setTermsCheckBox(e.target.checked);
    setCheckedError(false);
  };

  const selectTopicHandler = (e) => {
    if (e) {
      setTopic(e);
      setTopicError(false);
    }
  };

  const handleStartChallenge = () => {
    if (!termsCheckBox && articleByUser?.article_topic_id === undefined) {
      setCheckedError(true);
    }

    if (Object.keys(articleByUser).length === 0 && articleByUser?.article_topic_id === undefined) {
      setTopicError(true);
    }


    if (termsCheckBox && Object.keys(articleByUser).length !== 0 && (profileData.subscription_status === 'active') ) {
      navigate(`/home/article/${topic.value}`);
    } else if (termsCheckBox && Object.keys(articleByUser).length !== 0 && (profileData.subscription_status === null || profileData.subscription_status === 'inactive')) {
      verifySubscriptionStatus();
    }

    if (!termsCheckBox && articleByUser?.article_topic_id !== undefined && (profileData.subscription_status === 'active')) {
      navigate(`/home/article/${articleByUser?.article_topic_id}`);
    }
    else if (!termsCheckBox && articleByUser?.article_topic_id !== undefined && (profileData.subscription_status === null || profileData.subscription_status === 'inactive')){
      // setCheckedError(true);
      verifySubscriptionStatus();
    }
    else if (!termsCheckBox && articleByUser?.article_topic_id === undefined && (profileData.subscription_status === null || profileData.subscription_status === 'inactive')){
      // setCheckedError(true);
      verifySubscriptionStatus();
    }else{
      
    }
  };

  return (
    <>
      <UserNavbar />
      <div className="about-challenge-wrapper">
        <h1 className="about-challenge-heading">About Challenge</h1>
        <hr />
        <p className="challenge-text">
          Writing competitions provide a unique platform for writers to showcase their creativity,
          skills, and storytelling prowess. If you're considering entering this writing challenge,
          it's essential to familiarize yourself with the rules and guidelines to increase your
          chances of success. The writing challenge is an opportunity for writers to test their
          abilities, push their creative boundaries, and gain recognition for their work. It offers
          a structured platform for writers to produce content within a specific word limit, theme,
          or genre. The challenge comes with prizes, recognition, and the chance to have your work
          read by a wider audience.
        </p>
        <h1 className="about-challenge-heading">Rules of the Challenge</h1>
        <hr />
        <ul className="rules-list">
          <li>
            <p className="challenge-text">
              <b>Participation: </b>
              To participate in this challenge, you must have an active subscription
            </p>
          </li>
          <li>
            <p className="challenge-text">
              <b>Word Limit: </b>
              Typically, a writing competition will specify a word limit, and it's essential to
              adhere to this limit. For the purpose of this article, let's consider a 1500-word
              limit. You may be penalized or disqualified if your article exceeds this limit. Be
              concise, and make every word count.
            </p>
          </li>
          <li>
            <p className="challenge-text">
              <b>Theme or Topic: </b>
              The competition will specify a theme, topic, or genre that your article should revolve
              around. It's crucial to stay on topic and explore the theme creatively. Deviating from
              the theme may result in disqualification.{" "}
            </p>
          </li>
          <li>
            <p className="challenge-text">
              <b>Submission Deadline: </b>
              The competition will have a clear deadline for submitting your article. Missing this
              deadline may result in disqualification. To avoid any last-minute rushes, plan your
              writing process and aim to submit your entry well before the deadline.{" "}
            </p>
          </li>
          <li>
            <p className="challenge-text">
              <b>Originality: </b>
              Plagiarism is strictly prohibited in writing competitions. Your submission must be
              entirely your own work, and you should avoid copying, imitating, or paraphrasing
              content from other sources without proper attribution.
            </p>
          </li>
          <li>
            <p className="challenge-text">
              <b>Language and Grammar: </b>
              Proper grammar, spelling, and punctuation are crucial. Review and edit your article
              for errors before submitting. Sloppy writing can detract from the quality of your work
              and affect your chances of winning.
            </p>
          </li>
        </ul>

        <h1 className="about-challenge-heading">Tips for Creating a Winning Article</h1>
        <hr />
        <ul className="rules-list">
          <li>
            <p className="challenge-text">
              <b>Plan Your Writing: </b>
              Careful planning is essential. Start by brainstorming ideas related to the competition
              theme and outline your article. This will help you stay focused and organized
              throughout the writing process.{" "}
            </p>
          </li>
          <li>
            <p className="challenge-text">
              <b>Revise and Edit: </b>
              After completing your initial draft, take the time to revise and edit your work. Check
              for clarity, consistency, and readability. Eliminate unnecessary words and refine your
              prose.{" "}
            </p>
          </li>
          <li>
            <p className="challenge-text">
              <b>Seek Feedback: </b>
              Share your work with peers or writing groups for constructive feedback. Another
              perspective can help you identify areas for improvement and make your article
              stronger.{" "}
            </p>
          </li>
          <li>
            <p className="challenge-text">
              <b>Stay True to the Theme: </b>
              Ensure that your article remains closely connected to the competition theme.
              Creativity is encouraged, but don't lose sight of the theme's relevance.{" "}
            </p>
          </li>
          <li>
            <p className="challenge-text">
              <b>Proofread: </b>
              Proofreading is not just about correcting typos but also about refining your writing
              to its best form. Consider enlisting the help of a professional editor if possible
            </p>
          </li>
          <li>
            <p className="challenge-text">
              <b>Respect the Word Limit: </b>
              Stick to the word limit without exceeding it. Being concise and making every word
              count is a valuable skill in writing competitions{" "}
            </p>
          </li>
          <li>
            <p className="challenge-text">
              <b>Submit Early: </b>
              Avoid last-minute submissions. Submit your article well in advance of the deadline to
              account for any technical issues or last-minute changes.{" "}
            </p>
          </li>
        </ul>

        <h1 className="about-challenge-heading">Winner / Judging Criteria</h1>
        <hr />
        <p className="challenge-text">
          Understanding how your work will be evaluated is vital. These competition judging
          criteria, which may include creativity, originality, adherence to the theme, writing
          style, and overall impact, comments and Like (Vote).{" "}
          <b>
            {" "}
            It is also important to note that the more likes (votes) you have propels you to be the
            winner of the 1st price.
          </b>{" "}
          Tailor your article to meet these criteria to the best of your ability.
          <br />
          <b>Prices to be won</b> <br />
          Positions <br />
          <b>1st.</b> 150 $ dollars <br />
          <b>2nd.</b> 100 $ dollars <br />
          <b>3rd.</b> 50 $ dollars <br />
          <b> 4th.</b> One year mylibri books subscription <br />
          <b>5th.</b> One year mylibri books subscription <br />
          <b>6th.</b> One year mylibri books subscription <br />
          <b>7th.</b> One year mylibri books subscription <br />
          <b>8th.</b> One year mylibri books subscription <br />
          <b>9th.</b> One month mylibri books subscription <br />
          <b>10th.</b> One month mylibri books subscription <br />
          <b>11th.</b> One month mylibri books subscription <br />
          <b>12th.</b> One month mylibri books subscription <br />
          <b>13th.</b> One month mylibri books subscription <br />
          <b>14th.</b> One month mylibri books subscription <br />
          <b>15th.</b> One month mylibri books subscription <br />
          The above are the prices to be won.
          <br />
          The contestant will pick any topic from the 5 dropdown menu topics and write an article on
          it with the text area provided.
          <br />
          During Submission a link will be auto generated that the contestant can share with their
          family and friends to come and vote for their published articles on our platform to win
          any of the above price
          <br />
          <b>WARNING:</b> During the submission of the article, if you notice an error in your
          article, you can either delete or edit to make the correction on your article before
          anyone comments or likes the article, once there is a comment or like on the article, you
          cannot delete or edit the article anymore
        </p>
       {
        articleByUser?.article_topic_id ? <></> : (
          <>
        <p className="select-label">Select a Category of Article*</p>
      <Select
          options={theTopics}
          styles={customStyles}
          value={topic}
          placeholder={"Select a Topic*"}
          // isClearable={true}
          onChange={(e) => selectTopicHandler(e)}
        />
        {topicError ? <p className="terms-validation-text">Please choose a Category/Genre</p> : ""}
        <div className="terms-checkbox">
          <input type="checkbox" class="writing-terms" onChange={(e) => termsHandler(e)} /> &nbsp;
          <label htmlFor="remember" className="terms-label">
            I agree to the terms and conditions of the writing competition and will like to
            participate in it
            {checkedError ? (
              <p className="terms-validation-text">Accept the terms and condition to continue</p>
            ) : (
              ""
            )}
          </label>
        </div>

          </>
        )
       }

        <PurpleButton text={articleByUser?.article_topic_id ? "Continue" : "Start Challenge"} onClickFunction={handleStartChallenge} />
      </div>
    </>
  );
};

export default WritingChallenge;
