import React from "react";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import { Footer, Navbar } from "../../containers";
import "./aboutUs.css";

const AboutUs = ({ user }) => {
  return (
    <>
      {user ? <UserNavbar /> : <Navbar />}

      <div className="about-us-container">
        <div className="about-us-text">
          <h1 className="about-us-heading">About Us</h1>
          <hr />
          <p className="about-us-subtext">
            MyLibri Books is a subscription-based online library that affords users access to books all over the world covering ranges of different genres. It provides affordable, dependable, and uninterrupted access to books and enables people to read books from the comfort of their homes without having to go to a physical space. MyLibri Books has a Web app, and it is also available on the Google Play Store and App Store. The application is compatible with all smart devices, including iPad and Android Tablets.
          </p>
          <p className="about-us-subtext">We are a team of partial geeks, using our experiences and skills to resolve one problem we feel passionate about. </p>

          <h1 className="about-us-heading">How it Started</h1>
          <hr />

          <p className="about-us-subtext">
            We see and have experienced how difficult it is for people to access a physical library in this part of the world. Walk-in libraries are not evenly distributed across the country; hence, people are required to go long distances before they can access one. This experience has worsened the state of reading culture amongst Nigerians, and even Africa in general as people are gradually given up the quest to go ‘book hunting’, just to avoid the stress that comes with it.
          </p>

          <p className="about-us-subtext">
          All of us at MyLibri Books shared an experience, one that we are not entirely proud of, one that we are pushing to ensure future generations do not have to experience. The cost of school books is one of the major reasons a lot of pupils cannot attend school; reason a lot of families cannot send all their wards to school. Sometimes, pupils have to share books or wait for their sibling to use the books before being handed down to them. Often, by the time the books travels from one hand to another, a few pages would have gone missing from the book. This is one of our core visions; to ensure that school books is cheap and affordable to all thereby removing one of the major obstacles from parents sending their children to school.
          </p>

          <p className="about-us-subtext">
          Another of our vision is to ensure that we take ownership of the history of our school books. Most of the books our founder read (in elementary and secondary school) are no longer in the market, we have lost that history and that is something we want to ensure does not happen again. We shall document and keep our history for future generations to benefit from. Paper books go out of print, digital books exists forever. We work with publishers and authors from Nigeria, Africa and the rest of the world, the books on our platform are all licensed to us via formal agreements with the publishers and authors, to protect and reward them for their intellectual property. 
          </p>

          <p className="about-us-subtext">Of a truth, we have few international e-commerce companies that have helped in the distribution of books worldwide, such as Amazon and eBay, however, the majority of Africans at large are unable to access or purchase books from them due to an entire range of difficulties and issues. Many do not have an acceptable form of payment and even when they do, the cost of shipping costs a lot. In fact, many do not even know how to go about it. Also, the attitude of vendors abroad to book buyers in Africa as a whole is not at all encouraging. And the cost! The books are not affordable to most Africans, hence the need to localise the service and price at an affordable price to the populace we are serving.</p>
          <p className="about-us-subtext">We looked at this pressing issue and sought to create a solution. We discovered that many are interested in reading, but they are looking for easier and more comfortable ways to read books without having to go through the stress of going to the library. MyLibri Books was birthed out of the need to bring this solution to people, thereby improving their reading culture, especially in this part of the world.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
