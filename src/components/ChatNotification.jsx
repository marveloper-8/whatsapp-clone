import React from "react";
// styling
import "./styles/chat-notification.scss";
// icons
import notification from "../icons/notification.svg";

const ChatNotification = (e) => {
  return (
    <div className="chat-notification bg-2">
        <img src={notification} alt="notification" />
        <div>
          <div class="font-16">Get notified of new messages</div>  
          <div>Turn on desktop notifications {">"}</div>
        </div>
    </div>
  );
};

export default ChatNotification;
