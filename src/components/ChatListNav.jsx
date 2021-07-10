import React from "react";
// styling
import "./styles/chat-list-nav.scss";
// images
import pfp from '../images/pfp.jpg'
// icons
import status from '../icons/status.svg'
import message from '../icons/message.svg'
import ellipsis from '../icons/ellipsis.svg'

const ChatListNav = (e) => {
    return (
      <div className="chat-list-nav bg-1">
        <div
          class="pfp"
          style={{
            backgroundImage: `url(${pfp})`,
            backgroundSize: `cover`,
          }}
        ></div>
        <div>
          <img src={status} alt="status" />
          <img src={message} alt="message" />
          <img src={ellipsis} alt="ellipsis" />
        </div>
      </div>
    );
};

export default ChatListNav;
