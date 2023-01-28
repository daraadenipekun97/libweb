import React, { useEffect } from "react";

function MessengerChat() {
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
    console.log("facebook sdk loaded");
  });
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
