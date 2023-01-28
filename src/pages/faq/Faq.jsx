import React, { useState } from "react";
import "./faq.css";
import { Footer, Navbar } from "../../containers";
import UserNavbar from "../../components/userNavbar/UserNavbar";

const Faq = ({ user }) => {
  const [showOne, setShowOne] = useState(false);

  const handleShowOne = () => {
    setShowOne(!showOne);
  };

  const [showTwo, setShowTwo] = useState(false);

  const handleShowTwo = () => {
    setShowTwo(!showTwo);
  };

  const [showThree, setShowThree] = useState(false);

  const handleShowThree = () => {
    setShowThree(!showThree);
  };

  const [showFour, setShowFour] = useState(false);

  const handleShowFour = () => {
    setShowFour(!showFour);
  };
  const [showFive, setShowFive] = useState(false);

  const handleShowFive = () => {
    setShowFive(!showFive);
  };
  const [showSix, setShowSix] = useState(false);

  const handleShowSix = () => {
    setShowSix(!showSix);
  };
  const [showSeven, setShowSeven] = useState(false);

  const handleShowSeven = () => {
    setShowSeven(!showSeven);
  };
  const [showEight, setShowEight] = useState(false);

  const handleShowEight = () => {
    setShowEight(!showEight);
  };
  const [showNine, setShowNine] = useState(false);

  const handleShowNine = () => {
    setShowNine(!showNine);
  };

  return (
    <>
      {user ? <UserNavbar /> : <Navbar />}

      <div className="faq-container">
        <h1 className="faq-heading">Frequently Asked Questions</h1>

        <div className="faq-list">
          <ul>
            <li>
              <a className="collapsed" onClick={handleShowOne}>
                How can I get MyLibri Books app{" "}
                {showOne ? (
                  <i className="fa fa-chevron-up icon-close"></i>
                ) : (
                  <i className="fa fa-chevron-down icon-show"></i>
                )}
              </a>
              {showOne ? (
                <div className="collapse show">
                  <p>
                    You can download MyLibri Books app from either Google Play Store or App Store,
                    simply search for “MyLibri Books on any of these stores.
                  </p>
                </div>
              ) : (
                ""
              )}
            </li>

            <li>
              <a className="collapsed" onClick={handleShowTwo}>
                How do I register/sign up on MyLibri Books?{" "}
                {showTwo ? (
                  <i className="fa fa-chevron-up icon-close"></i>
                ) : (
                  <i className="fa fa-chevron-down icon-show"></i>
                )}
              </a>
              {showTwo ? (
                <div className="collapse">
                  <p>
                    To sign up on the mobile app simply click on the “Create account” button while
                    on the web app, click on the “Get started” button. Ensure to fill all the
                    compulsory fields.
                  </p>
                </div>
              ) : (
                ""
              )}
            </li>

            <li>
              <a className="collapsed" onClick={handleShowThree}>
                Do I need a Referral Code to sign up? How do I generate my own Referral Code?{" "}
                {showThree ? (
                  <i className="fa fa-chevron-up icon-close"></i>
                ) : (
                  <i className="fa fa-chevron-down icon-show"></i>
                )}
              </a>
              {showThree ? (
                <div className="collapse">
                  <p>
                    The Referral Code field is optional and you can sign up without it. Every user
                    after signing up on the MyLibri Books App can generate their own Referral Code
                    which can be shared with friends.{" "}
                  </p>
                  <hr className="faq-hr" />
                  <h6>How To get your Referral Code</h6>
                  <p>• Launch the MyLibriBooks App</p>
                  <p>• Go to "Settings" on the app and scroll to "Bio Data".</p>
                  <p>
                    • Click on "Refer a Friend" and your Referral Code is automatically copied to
                    your clipboard
                  </p>
                  <hr className="faq-hr" />
                  You can share your referral code to as many people as possible. You might just get
                  a gift from us when you refer as much people as possible.
                </div>
              ) : (
                ""
              )}
            </li>

            <li>
              <a className="collapsed" onClick={handleShowFour}>
                How do I subscribe on MyLibri Books?
                {showFour ? (
                  <i className="fa fa-chevron-up icon-close"></i>
                ) : (
                  <i className="fa fa-chevron-down icon-show"></i>
                )}
              </a>
              {showFour ? (
                <div className="collapse">
                  <p>
                    To subscribe on MyLibri Books app, click on subscription on the settings page
                    and select any of the plans and then proceed to make payment. By doing this, you
                    will have an active subscription and can access all the books on the app. If you
                    are having issues with linking your card on the mobile app, simply visit the
                    website at{" "}
                    <a
                      href="https://www.mylibribooks.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="subs-link"
                    >
                      https://www.mylibribooks.com
                    </a>{" "}
                    to subscribe.
                    <hr className="faq-hr" />
                    Alternatively on the website, click on the profile at the top of the page, click
                    on your name and then go to “Subscription” simply select any of the plans you’d
                    like to subscribe for and proceed to make payment seamlessly.
                  </p>
                </div>
              ) : (
                ""
              )}
            </li>

            <li>
              <a className="collapsed" onClick={handleShowFive}>
                How do I join MyLibri Book’s Bookclub on Facebook?{" "}
                {showFive ? (
                  <i className="fa fa-chevron-up icon-close"></i>
                ) : (
                  <i className="fa fa-chevron-down icon-show"></i>
                )}
              </a>
              {showFive ? (
                <div id="faq-list-5" className="collapse" data-parent=".faq-list">
                  <p>
                    To join our book club on Facebook, simply search for MyLibri Book Club on
                    Facebook and click on join. Once we receive your request to join, we will accept
                    your request and you can participate in the various activities we have going on
                    the Book club.{" "}
                  </p>
                </div>
              ) : (
                ""
              )}
            </li>

            <li>
              <a className="collapsed" onClick={handleShowSix}>
                How do I find books to read?
                {showSix ? (
                  <i className="fa fa-chevron-up icon-close"></i>
                ) : (
                  <i className="fa fa-chevron-down icon-show"></i>
                )}
              </a>
              {showSix ? (
                <div className="collapse">
                  <p>
                    To find specific books, simply click on the search modal at the top of the page
                    and type in the book title you would like to find. It is the same process if you
                    want to search for a specific author or genre.
                  </p>
                </div>
              ) : (
                ""
              )}
            </li>

            <li>
              <a className="collapsed" onClick={handleShowSeven}>
                How much does the subscription fee cost
                {showSeven ? (
                  <i className="fa fa-chevron-up icon-close"></i>
                ) : (
                  <i className="fa fa-chevron-down icon-show"></i>
                )}
              </a>
              {showSeven ? (
                <div className="collapse">
                  <p>
                    MyLibri Books currently has the Lone Ranger subscription bundles and they are as
                    follows.
                    <p>• Monthly Lone Ranger costs N1,000</p>
                    <p>• Quarterly Lone Ranger costs N2,500</p>
                    <p>• Biannual Lone Ranger costs N5,500</p>
                    <p>• Annual Lone Ranger costs N11,200</p>
                  </p>
                </div>
              ) : (
                ""
              )}
            </li>

            <li>
              <a className="collapsed" onClick={handleShowEight}>
                Can I download books?
                {showEight ? (
                  <i className="fa fa-chevron-up icon-close"></i>
                ) : (
                  <i className="fa fa-chevron-down icon-show"></i>
                )}
              </a>
              {showEight ? (
                <div id="faq-list-8" className="collapse" data-parent=".faq-list">
                  <p>
                    You can only download books in-app for offline reading on the mobile application
                    but not on the web application
                  </p>
                </div>
              ) : (
                ""
              )}
            </li>

            <li>
              <a className="collapsed" onClick={handleShowNine}>
                Can I publish my books on MyLibri Books?
                {showNine ? (
                  <i className="fa fa-chevron-up icon-close"></i>
                ) : (
                  <i className="fa fa-chevron-down icon-show"></i>
                )}
              </a>
              {showNine ? (
                <div id="faq-list-9" className="collapse" data-parent=".faq-list">
                  <p>
                    No, you can not publish your books on the platform. The books we upload on the
                    app are books that have already been published
                  </p>
                </div>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
