import React from "react";
// styling
import "./styles/message-list.scss";
// icons
import searchIcon from "../icons/search.svg";

const MessageList = (e) => {
  return (
    <div class="message-list bg-3">
      <div class="search-item">
        <div className="search bg-1">
          <img src={searchIcon} alt="search" />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div class="item" onClick={e.openMessage}>
        <div class="image bg-1"></div>
        <div class="text">
          <div class="text-inner name font-17">
            <div>sugar mommy</div>
            <div class="color-4 font-12">yesterday</div>
          </div>
          <div class="text-inner message">
            <div>Alright</div>
            <div class="bg-4 color-3 font-12">1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageList;
