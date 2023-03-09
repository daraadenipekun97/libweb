import React from "react";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import { Footer, Navbar } from "../../containers";
import "./termsOfUser.css";
const TermsOfUse = ({ user }) => {
  return (
    <>
      {user ? <UserNavbar /> : <Navbar />}

      <div className="terms-container">
        <h1 className="terms-heading">TERM OF USE - MyLibriBooks</h1>
        <p className="terms-subtext">
          This Agreement is a binding agreement between the individual identified in your MyLibri
          Books account ("you”, “Licensee”, “User”) and The Libri Limited (“we”, “us”). This
          Agreement provides the terms and conditions of your License to use MyLibri Books or ‘the
          Product’.
        </p>
        <p className="terms-subheadings">1. Concept</p>
        <hr />
        <p className="terms-subtext">
          MyLibri Books is an online Library that provides seamless online access to varieties of
          books, fiction, non- fiction, academic and professional books. MyLibri Books is available
          across mobile and web platforms for a monthly subscription fee. Where a book is not
          available, there is a support mechanism for you to contact MyLibri Books support and you
          will be notified when the book is available.
        </p>

        <p className="terms-subheadings">2. License to Access</p>
        <hr />

        <p className="terms-subtext">
          To access MyLibri Books, a User must have an account and agree to be bound by the terms of
          this Agreement. You agree to be bound by either downloading the MyLibri Books application
          from Google Play Store and App Store, or by clicking accept or otherwise by using the
          Product. In addition to the foregoing, if you have obtained access to MyLibri Books
          commercial content by subscription, except for any limited time promotions, your continued
          access is conditioned upon timely payment and maintenance of your account; and you will
          not have access to MyLibri Books commercial content if your Account is cancelled, allowed
          to lapse, or terminated for non-payment or other reasons. Your membership entitles you to
          access all of the books and audiobooks (if available) on MyLibri Books. MyLibri Books
          reserves and shall have the right in its sole discretion to add, modify, withdraw or delay
          at any time any commercial content from access by you for any reason including, without
          limitation, based on the costs generated to MyLibri Books by such content or the nature of
          your use of the Product. MyLibri Books makes no guarantee as to the availability of
          specific titles or the timing of their availability.
        </p>

        <p className="terms-subheadings">3. Scope of License</p>
        <hr />
        <p className="terms-subtext">
          This license, granted to you to use MyLibri Books, is a limited, non-transferable,
          non-exclusive, revocable personal license for your personal non-commercial use. You are
          not to distribute or make the license available over a network where it could be used by
          additional parties (except as expressly permitted by this license for multiple persons to
          use). Personal account information may not be shared to allow others access your account.
          The sharing of personal account information is a breach of the license and MyLibri Books
          reserves the right to terminate your license upon any such misuse of your personal account
          information to and with any third party without refunding your subscription fee. You must
          not Printout, sell, lend, redistribute, or sublicense the access given to you on any of
          MyLibri Books’ commercial content. You must not attempt to derive the source code of,
          modify, or create derivative works of the MyLibri Books application, its content, any
          updates, or any part thereof, reverse engineer, disassemble, decompile, decode, or remove,
          delete, alter, or obscure any trademarks or any copyright, trademark, patent, or other
          intellectual property or proprietary rights from your use. Any attempt to do so is a
          violation of the rights of The Libri Limited and If you breach this restriction, you may
          be subject to refund, prosecution, and damages. You may not exceed usage limitations set
          by content providers (participating publisher/book owners/license-holders). You must not
          make copies of all or any portion of any MyLibri Books commercial content. You are
          prohibited from making any public display or public performance of MyLibri Books
          commercial content.
        </p>

        <p className="terms-subheadings">4. Subscription:</p>
        <hr />
        <p className="terms-subtext">
          Subscription to MyLibri Books currently attracts a monthly subscription fee of 1000 Naira
          for the Lone Ranger lan, this is for 30 calendar days and will be automatically renewed
          until otherwise canceled. We may ask you to supply information relevant to your
          transaction, including, without limitation, your debit/credit card (‘card’) number, the
          expiration date of your card, and your billing address (such information, “Payment
          Information”). You represent and warrant that you have the legal right to use all payment
          method(s) represented by any such Payment Information. When you initiate a transaction,
          you authorize us to provide your Information to a third party payment application, to
          complete your transaction. Please note that we may require you to provide additional
          information to verify your identity before completing your transaction and send you SMS or
          a mail to confirm that you are the authorized holder of the card or payment information.
          <br />
          1. There are three kinds of monthly subscription: Lone Ranger, Prides, and Squad which
          subscription fee is set by MyLibri Books and is subject to change at any The monthly
          subscription fee is for 30 calendar days. We will automatically charge you each month, on
          the calendar day corresponding to the commencement of your last payment, using the Payment
          Information you have provided. Your subscription will be renewed every 30 days at the time
          of successful payment. We may continue to automatically renew your subscription unless you
          or MyLibri Books cancel it. MyLibri Books does not owe any user a right to be allowed to
          subscribe or to continually renew the subscription and is at complete discretion to either
          renew or not.
          <br />
          1. If you do cancel your subscription, your access to the service shall continue until the
          expiration of the period of subscription. Canceling your subscription does not
          automatically restrict your access to the service, the canceling will be effective on the
          day of your next
          <br />
          • By accepting to be bound by this Agreement and electing to purchase a monthly
          subscription, you acknowledge that you will be charged on a recurring basis and you accept
          responsibility for all recurring payment obligations prior to the cancellation of your
          subscription by you or MyLibri Books for any reason whatsoever.
          <br />
          1. Upon your signing up, MyLibri Books may offer you a free trial period for a specified
          If you cancel your Free Trial before the expiration of the Free Trial Term, you may be
          eligible to use any unused portion of such Free Trial Term the next time you signup to
          MyLibri Books, provided that MyLibri Books keeps the offer open to you. Free Trials are
          only available to users who have not previously completed a Free Trial period on MyLibri
          Books. Unless You cancel Your membership prior to the end of Your Free Trial, we (or our
          third-party payment processor) will begin charging you for your monthly subscription (plus
          any applicable taxes and other charges) until it is canceled. Instructions for canceling
          Your Membership are stated below under the Section titled “Cancellation of Subscription”.
          Please note that we will not notify you that your Free Trial has ended or that your paid
          subscription has begun. We reserve the right to modify or terminate Free Trials at any
          time, without notice and in our sole discretion.
        </p>

        <p className="terms-subheadings">5. Subscription Plan:</p>
        <hr />
        <p className="terms-subtext">
          The subscription plan comprises of either a single user or a multi-user plan. The
          multi-user plan shall consist of 4 or 6 persons with joint subscribe and each has access
          to the same account and the MyLibri Books application at the same time or at different
          times. MyLibri Books shall have absolute discretion to initiate extra charges as it may
          decide for the multi-user plan.
        </p>

        <p className="terms-subheadings">6. Refunds and Replacements:</p>
        <hr />
        <p className="terms-subtext">
          All fees and charges are non-refundable and there is no credit. If there is a defect in
          any MyLibri Books commercial content, you may receive a replacement rather than a refund.
        </p>
        <p className="terms-subheadings">7. Cancellation of Subscription:</p>
        <hr />
        <p className="terms-subtext">
          You may cancel Your Subscription at any time. If your subscription is canceled, MyLibri
          Books will not refund Subscription Fees. You can cancel your subscription by logging into
          your MyLibri Books account, navigate to ‘settings’ and click on ‘Cancel Subscription’. You
          may also email us at{" "}
          <a href="mailto:subscriptions@mylibribooks.com">subscriptions@mylibribooks.com</a> for any
          assistance with the cancellation of your subscription. Your cancellation of subscription
          becomes effective immediately upon cancellation, but you shall have access to MyLibri
          Books account until the subscription paid for that particular month has expired after
          which you will then have access to only your account and any book which you previously
          purchased.
        </p>

        <p className="terms-subheadings">8. Termination:</p>
        <hr />
        <p className="terms-subtext">
          This Agreement and the license granted hereunder will remain in effect so long as
          applicable licensing fees have been paid except terminated as set forth in this Agreement.
          MyLibri Books may terminate or suspend your account at any time for whatever reason
          without recourse to you. When you open an account with MyLibri Books and subscribe, the
          license is effective until terminated by you or MyLibri Books by deleting your account.
          Your rights under this license will be terminated automatically without notice from
          MyLibri Books if you fail to comply with any of the term(s) of this Agreement. Upon
          termination of your license, your hall cease to have further access to MyLibri Book’s
          commercial content to which you have purchased access via the MyLibri Books Platform. When
          your account is terminated or canceled either by you or MyLibri Books, there shall be no
          refund of fees paid. MyLibri Books has the absolute discretion to refund any fee or not
          when the account is terminated.
        </p>
        <p className="terms-subheadings">9. Removal of Content:</p>
        <hr />
        <p className="terms-subtext">
          MyLibri Books reserves the right to modify or withdraw at any time any MyLibri Books
          commercial content from access by you at the request of its publisher or for any other
          reason. If MyLibri Books removes or deletes a particular piece of MyLibri Books commercial
          content to which you have purchased access, MyLibri Books reserves the right to revoke
          your access. If MyLibri Books revokes your access, MyLibri Books may provide a refund to
          you or offer you another form of compensation at MyLibri Book’s sole discretion.
        </p>

        <p className="terms-subheadings">10. Indemnification:</p>
        <hr />
        <p className="terms-subtext">
          Licensee agrees to indemnify, hold harmless, and defend MyLibri Books and its officers,
          directors, employees, customers, agents, from and against any and all damages, costs and
          expenses, including reasonable attorneys’ fees, incurred in connection with any
          third-party action arising out of or relating to Licensee’s use of MyLibri Books beyond
          the scope of the license in this Agreement or any of its modification.{" "}
        </p>

        <p className="terms-subheadings">11. NO WARRANTY:</p>
        <hr />
        <p className="terms-subtext">
          USER EXPRESSLY ACKNOWLEDGES AND AGREES THAT USE OF THE LICENSED APPLICATION IS AT USERS
          SOLE RISK AND THAT THE ENTIRE RISK AS TO SATISFACTORY QUALITY, PERFORMANCE, ACCURACY AND
          EFFORT IS WITH USER. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MYLIBRI BOOKS AND
          ANY SERVICES PERFORMED OR PROVIDED BY MYLIBRI BOOKS ARE PROVIDED "AS IS" AND "AS
          AVAILABLE", WITH ALL FAULTS AND WITHOUT WARRANTY OR GUARRANTEE OF ANY KIND, AND MYLIBRI
          BOOKS HEREBY DISCLAIMS ALL WARRANTIES AND CONDITIONS WITH RESPECT TO THE APPLICATION AND
          ANY SERVICES, EITHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, THE
          IMPLIED WARRANTIES AND/OR CONDITIONS OF MERCHANTABILITY, OF SATISFACTORY QUALITY, OF
          FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY, OF QUIET ENJOYMENT, AND NON-INFRINGEMENT OF
          THIRD PARTY RIGHTS. MYLIBRI BOOKS DOES NOT WARRANT AGAINST INTERFERENCE WITH USERS
          ENJOYMENT OF THE APPLICATION, THAT THE FUNCTIONS CONTAINED IN, OR SERVICES PERFORMED OR
          PROVIDED BY THE APPLICATION WILL MEET USERS REQUIREMENTS. THAT THE OPERATION OF THE
          APPLICATION OR SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, OR THAT DEFECTS IN THE
          APPLICATION OR SERVICES WILL BE CORRECTED. NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN
          BY MYLIBRI BOOKS OR ITS AUTHORISED REPRESENTATIVE SHALL CREATE A WARRANTY.
        </p>

        <p className="terms-subheadings">12. LIMITATION OF LIABILITY:</p>
        <hr />
        <p className="terms-subtext">
          TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT SHALL MYLIBRI BOOKS BE LIABLE FOR
          PERSONAL INJURY, OR ANY INCIDENTAL, SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES WHATSOEVER,
          INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, BUSINESS
          INTERRUPTION OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO USERS
          USE OR INABILITY TO USE THE APPLICATION, HOWEVER CAUSED, REGARDLESS OF THE THEORY OF
          LIABILITY (CONTRACT, TORT OR OTHERWISE) AND EVEN IF MYLIBRI BOOKS HAS BEEN ADVISED OF THE
          POSSIBILITY OF SUCH DAMAGES.
        </p>

        <p className="terms-subheadings">13. Applicable Law:</p>
        <hr />
        <p className="terms-subtext">
          The applicable law is that of the Federal Republic of Nigeria.
        </p>

        <p className="terms-subheadings">14. Miscellaneous:</p>
        <hr />
        <p className="terms-subtext">
          This Agreement, together with any attachments, constitutes the complete and exclusive
          agreement between you and MyLibri Books with respect to this subject matter, subject to
          modifications or amendment by MyLibri Books of the provisions of this Agreement. The
          waiver by MyLibri Books of any breach of this Agreement by you will not waive subsequent
          defaults by you of the same or a different kind. If any provision of this Agreement is
          held to be unenforceable for any reason, such provision will be reformed only to the
          extent necessary to make it enforceable, and such a decision will not affect the
          enforceability of such provision under other circumstances, or of the remaining provisions
          this Agreement.
          <br />
          Last updated: 26 September 2020
        </p>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfUse;
