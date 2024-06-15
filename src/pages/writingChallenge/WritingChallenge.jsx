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
    debugger;
    if (!termsCheckBox && articleByUser?.article_topic_id === undefined) {
      setCheckedError(true);
    }

    if (topic === null && articleByUser?.article_topic_id === undefined) {
      setTopicError(true);
    }

    if (termsCheckBox && topic !== null && profileData.subscription_status === "active") {
      navigate(`/home/article/${topic?.value}`);
    } else if (
      termsCheckBox &&
      topic !== null &&
      (profileData.subscription_status === null || profileData.subscription_status === "inactive")
    ) {
      verifySubscriptionStatus();
    }

    if (
      !termsCheckBox &&
      articleByUser?.article_topic_id !== undefined &&
      profileData.subscription_status === "active"
    ) {
      navigate(`/home/article/${articleByUser?.article_topic_id}`);
    } else if (
      !termsCheckBox &&
      articleByUser?.article_topic_id !== undefined &&
      (profileData.subscription_status === null || profileData.subscription_status === "inactive")
    ) {
      // setCheckedError(true);
      verifySubscriptionStatus();
    } else if (
      !termsCheckBox &&
      articleByUser?.article_topic_id === undefined &&
      (profileData.subscription_status === null || profileData.subscription_status === "inactive")
    ) {
      // setCheckedError(true);
      verifySubscriptionStatus();
    } else {
    }
  };

  return (
    <>
      <UserNavbar />
      <div className="about-challenge-wrapper">
        <h1 className="about-challenge-heading">About Challenge</h1>
        <hr />
        <p className="challenge-text">
          Writing competitions are an excellent platform for writers to showcase their creativity,
          skills, and storytelling prowess. This challenge is an opportunity for writers to test
          their abilities, push their creative boundaries, and gain recognition for their work. By
          participating, writers can produce content within a specific word limit, theme, or genre,
          with the chance to win prizes, gain recognition, and have their work read by a wider
          audience.
        </p>
        <h1 className="about-challenge-heading">Rules of the Challenge</h1>
        <hr />
        <ul className="rules-list">
          <li>
            <p className="challenge-text-header">Participation: </p>
            <p className="challenge-text">
              • Writers must have an active subscription, specifically any of the Lone Ranger Plans.{" "}
              <br />• Voters need at least a Trial Subscription.
            </p>
          </li>
          <li>
            <p className="challenge-text-header">Word Limit: </p>
            <p className="challenge-text">
              • The article should not exceed 500 words. Submissions over this limit may be
              penalized or disqualified.
            </p>
          </li>
          <li>
            <p className="challenge-text-header">Theme or Topic: </p>
            <p className="challenge-text">
              • The challenge focuses on fiction. Ensure your article revolves around this genre.
              Straying from the theme may lead to disqualification.
            </p>
          </li>
          <li>
            <p className="challenge-text-header">Submission Deadline: </p>
            <p className="challenge-text">
              • Adhere to the specified deadline. Late submissions will not be considered. Plan and
              submit your entry well before the deadline to avoid last-minute issues.
            </p>
          </li>
          <li>
            <p className="challenge-text-header">Originality:</p>
            <p className="challenge-text">
              • Submissions must be original. Plagiarism, including copying or paraphrasing from
              other sources without proper attribution, is strictly prohibited.
            </p>
          </li>
          <li>
            <p className="challenge-text-header">Language and Grammar:</p>
            <p className="challenge-text">
              • Proper grammar, spelling, and punctuation are crucial. Review and edit your article
              before submission to avoid errors that could detract from your work’s quality.
            </p>
          </li>
        </ul>

        <h1 className="about-challenge-heading">Tips for Creating a Winning Article</h1>
        <hr />
        <ul className="rules-list">
          <li>
            <p className="challenge-text-header">Plan Your Writing:</p>
            <p className="challenge-text">
              • Brainstorm ideas related to the theme and outline your article. This helps maintain
              focus and organization.{" "}
            </p>
          </li>
          <li>
            <p className="challenge-text-header">Revise and Edit:</p>
            <p className="challenge-text">
              • After drafting, revise and edit for clarity, consistency, and readability. Remove
              unnecessary words and refine your prose.{" "}
            </p>
          </li>
          <li>
            <p className="challenge-text-header">Seek Feedback:</p>
            <p className="challenge-text">
              • Share your work with peers or writing groups for constructive feedback. Another
              perspective can highlight areas for improvement.{" "}
            </p>
          </li>
          <li>
            <p className="challenge-text-header">Stay True to the Theme:</p>
            <p className="challenge-text">
              • Ensure your article is closely connected to the challenge theme. Creativity is
              encouraged, but relevance to the theme is crucial.{" "}
            </p>
          </li>
          <li>
            <p className="challenge-text-header">Proofread:</p>
            <p className="challenge-text">
              • Proofreading involves correcting typos and refining your writing. Consider
              professional editing assistance if possible.{" "}
            </p>
          </li>
          <li>
            <p className="challenge-text-header">Respect the Word Limit:</p>
            <p className="challenge-text">
              • Stick to the 500-word limit. Being concise and effective with word usage is a
              valuable skill.
            </p>
          </li>
          <li>
            <p className="challenge-text-header">Submit Early:</p>
            <p className="challenge-text">
              • Avoid last-minute submissions. Submit early to account for any technical issues or
              last-minute changes{" "}
            </p>
          </li>
        </ul>

        <h1 className="about-challenge-heading">Judging Criteria and Prizes</h1>
        <hr />

        <ul className="rules-list">
          <li>
            <p className="challenge-text-header">Judging Criteria:</p>
            <p className="challenge-text">
              • Articles will be evaluated based on creativity, originality, adherence to the theme,
              writing style, overall impact, comments, and likes (votes). Articles with the most
              likes (votes) have a higher chance of winning the 1st prize.
            </p>
          </li>

          <li>
            <p className="challenge-text-header">Prizes:</p>
            <p className="challenge-text">
              • 1st Place: $150 + 1 Year MyLibri Books subscription <br />
              • 2nd Place: $100 + 1 Year MyLibri Books subscription <br />
              • 3rd Place: $50 + 1 Year MyLibri Books subscription <br />
              • 4th Place: 1 Year MyLibri Books subscription <br />
              • 5th Place: 1 Year MyLibri Books subscription <br />
            </p>
          </li>

          <li>
            <p className="challenge-text-header">Submission Details:</p>
            <p className="challenge-text">
              • Write and submit your article using the provided text area. <br />• Upon submission,
              you can share your article with your family and friends to garner votes.
            </p>
          </li>

          <li>
            <p className="challenge-text-bottom">
              Note: If errors are noticed after submission, you can edit or delete your article
              before any comments or likes are made. Once comments or likes are present, the article
              cannot be edited or deleted. Ensure thorough proofreading before submission.
            </p>
          </li>
        </ul>
        {articleByUser?.article_topic_id ? (
          <></>
        ) : (
          <>
            <p className="select-label">Select Category*</p>
            <Select
              options={theTopics}
              styles={customStyles}
              value={topic}
              placeholder={"Article Category*"}
              // isClearable={true}
              onChange={(e) => selectTopicHandler(e)}
            />
            {topicError ? (
              <p className="terms-validation-text">Please choose a Category/Genre</p>
            ) : (
              ""
            )}
            <div className="terms-checkbox">
              <input type="checkbox" class="writing-terms" onChange={(e) => termsHandler(e)} />{" "}
              &nbsp;
              <label htmlFor="remember" className="terms-label">
                I agree to the terms and conditions of the writing challenge and will like to
                participate in it
                {checkedError ? (
                  <p className="terms-validation-text">
                    Accept the terms and condition to continue
                  </p>
                ) : (
                  ""
                )}
              </label>
            </div>
          </>
        )}

        <PurpleButton
          text={articleByUser?.article_topic_id ? "Continue" : "Start Challenge"}
          onClickFunction={handleStartChallenge}
        />
      </div>
    </>
  );
};

export default WritingChallenge;
