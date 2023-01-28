import React from "react";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import { Footer, Navbar } from "../../containers";
import "./privacyPolicy.css";
const PrivacyPolicy = ({ user }) => {
  return (
    <>
      {user ? <UserNavbar /> : <Navbar />}

      <div className="policy-container">
        <h1 className="policy-heading">PRIVACY STATEMENT - MyLibriBooks</h1>
        <p className="policy-subheadings">WHAT DO WE DO WITH YOUR INFORMATION?</p>
        <hr />
        <p className="policy-subtext">
          When you borrow or purchase a book in our library, as part of the buying and selling
          process, we collect the personal information you give us such as your name, address, and
          email address. When you browse our library, we also automatically receive your computer’s
          internet protocol (IP) address to provide us with information that helps us learn about
          your browser and operating system. Email marketing (if applicable): With your permission,
          we may send you emails about our store, new products, and other updates.
        </p>

        <p className="policy-subheadings">CONSENT</p>
        <hr />

        <p className="policy-subtext">
          How do you get my consent?
          <br />
          When you provide us with personal information to complete a transaction, verify your
          credit card, place an order, arrange for a delivery or return a purchase, we imply that
          you consent to our collecting it and using it for that specific reason only. If we ask for
          your personal information for a secondary reason, like marketing, we will either ask you
          directly for your expressed consent, or provide you with an opportunity to say no.
          <br />
          How do I withdraw my consent?
          <br />
          If after you opt-in, you change your mind, you may withdraw your consent for us to contact
          you, for the continued collection, use or disclosure of your information, at any time, by
          contacting us at <a href="mailto: support@mylibribooks.com">support@mylibribooks.com</a>
        </p>

        <p className="policy-subheadings">DISCLOSURE</p>
        <hr />
        <p className="policy-subtext">
          We may disclose your personal information if we are required by law to do so or if you
          violate our Terms of Service.
        </p>

        <p className="policy-subheadings">THIRD-PARTY SERVICES</p>
        <hr />
        <p className="policy-subtext">
          In general, the third-party providers used by us will only collect, use, and disclose your
          information to the extent necessary to allow them to perform the services they provide to
          us. However, certain third-party service providers, such as payment gateways and other
          payment transaction processors, have their own privacy policies in respect to the
          information we are required to provide to them for your purchase-related transactions. For
          these providers, we recommend that you read their privacy policies so you can understand
          the way your personal information will be handled by these providers. Remember that
          certain providers may be located in or have facilities that are located a different
          jurisdiction than either you or us. So if you elect to proceed with a transaction that
          involves the services of a third-party service provider, then your information may become
          subject to the laws of the jurisdiction(s) in which that service provider or its
          facilities are located. Once you leave our store’s website or are redirected to a
          third-party website or application, you are no longer governed by this Privacy Policy or
          our website’s Terms of Service.
        </p>

        <p className="policy-subheadings">LINKS</p>
        <hr />
        <p className="policy-subtext">
          When you click on links on our store, they may direct you away from our site. We are not
          responsible for the privacy practices of other sites and encourage you to read their
          privacy statements.
        </p>

        <p className="policy-subheadings">SECURITY</p>
        <hr />
        <p className="policy-subtext">
          To protect your personal information, we take reasonable precautions and follow industry
          best practices to make sure it is not inappropriately lost, misused, accessed, disclosed,
          altered, or destroyed. If you provide us with your credit card information, the
          information is encrypted using secure socket layer technology <b>(SSL)</b> and stored with
          an <b>AES-256 encryption</b> . Although no method of transmission over the Internet or
          electronic storage is 100% secure, we follow all PCI-DSS requirements and implement
          additional generally accepted industry standards.
        </p>
        <p className="policy-subheadings">AGE OF CONSENT</p>
        <hr />
        <p className="policy-subtext">
          By using this site, you represent that you are at least the age of majority in your state
          or province of residence, or that you are the age of majority in your state or province of
          residence and you have given us your consent to allow any of your minor dependents to use
          this site.
        </p>

        <p className="policy-subheadings">CHANGES TO THIS PRIVACY POLICY</p>
        <hr />
        <p className="policy-subtext">
          We reserve the right to modify this privacy policy at any time, so please review it
          frequently. Changes and clarifications will take effect immediately upon their posting on
          the website. If we make material changes to this policy, we will notify you here that it
          has been updated, so that you are aware of what information we collect, how we use it, and
          under what circumstances, if any, we use and/or disclose it. If our library is acquired or
          merged with another company, your information may be transferred to the new owners so that
          we may continue to sell products to you.{" "}
        </p>
        <p className="policy-subheadings">QUESTIONS AND CONTACT INFORMATION</p>
        <hr />
        <p className="policy-subtext">
          If you would like to: access, correct, amend or delete any personal information we have
          about you, register a complaint or simply want more information, contact our Privacy
          Compliance Officer at{" "}
          <a href="mailto: support@mylibribooks.com">support@mylibribooks.com</a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
