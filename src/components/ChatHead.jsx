import React from "react";
// styling
import "./styles/chat-head.scss"
// images
import pfp from "../images/pfp.jpg";
// icons
import search from "../icons/search2.svg";
import ellipsis from "../icons/ellipsis.svg";

const ChatListNav = (e) => {
  return (
    <div className="chat-head">
      <div class="chat-head-inner bg-1" onClick={() => e.openMessage()}>
        <div>
          <div
            class="pfp"
            style={{
              backgroundImage: `url(${pfp})`,
              backgroundSize: `cover`,
            }}
          ></div>
          <b class="color-white font-16">sugar mommy 🤑</b>
        </div>

        <div>
          <img src={search} alt="search" />
          <img src={ellipsis} alt="ellipsis" />
        </div>
      </div>
    </div>
  );
};

export default ChatListNav;
