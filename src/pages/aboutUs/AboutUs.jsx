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
            MyLibri Books is a subscription-based online library that affords users access to books
            all over the world covering ranges of different genres. It provides round-the-clock
            access to people and enables them to read books from the comfort of their homes without
            having to go to a physical space. MyLibri Books has a Web app, and it is also available
            on the Google Play Store and App Store. The application is compatible with all smart
            devices, including iPad and Android Tablets.
          </p>

          <h1 className="about-us-heading">How it Started</h1>
          <hr />

          <p className="about-us-subtext">
            We see and have experienced how difficult it is for people to access a physical library
            in this part of the world. Walk-in libraries are not evenly distributed across the
            country; hence, people are required to go long distances before they can access one.
            This experience has worsened the state of reading culture amongst Nigerians, and even
            Africa in general as people are gradually given up the quest to go ‘book hunting’, just
            to avoid the stress that comes with it.
          </p>

          <p className="about-us-subtext">
            Of a truth, we have few international e-commerce companies that have helped in the
            distribution of books worldwide, such as Amazon and E bay, however, the majority of
            Africans at large are unable to access or purchase books from them due to a whole range
            of difficulties and issues. Many don’t have an acceptable form of payment and even when
            they do, the cost of shipping costs an arm and a leg. In fact, many don’t even know how
            to go about it. Also, the attitude of vendors abroad to book buyers in Africa as a whole
            is not at all encouraging.
          </p>

          <p className="about-us-subtext">
            We looked at this pressing issue and sought to create a solution. We discovered that
            many are interested in reading, but they are looking for easier and more comfortable
            ways to read books without having to go through the stress of going to the library.
            MyLibri Books was birthed out of the need to bring this solution to people, thereby
            improving their reading culture, especially in this part of the world.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
