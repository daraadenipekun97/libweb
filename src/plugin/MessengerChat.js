import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./messengerChat.css";
function MessengerChat() {

  const {
    facebookIconHidden,
  } = useSelector((state) => state.getAll)

   const [show, setShow] = useState(false);


  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v14.0",
      });
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
    // console.log("facebook sdk loaded");
  });

  useEffect(() => {
     if (facebookIconHidden) {
         setShow(true);
         console.log("show is true")
         window.FB.CustomerChat.hide();
     }
     else{
      setShow(false)
      console.log("show is false")
      window.setTimeout(() => {
        window.FB.CustomerChat.showDialog()        
        console.log("Delayed function called after 5 seconds");
      }, 5000);
     }
  
  }, [facebookIconHidden])
  


  return (
    <>
      <div id="fb-root"></div>
      <div
        class="fb-customerchat"
        attribution="install_email"
        attribution_version="biz_inbox"
        page_id="101688624658632"
        theme_color="#5e458b"
        greeting_dialog_display="hide"
      ></div>
    </>
  );
}

export default MessengerChat;
