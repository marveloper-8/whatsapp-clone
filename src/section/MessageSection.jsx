import React from "react";
// styling
import "./styles/message.scss";
// components
import ChatHead from '../components/ChatHead'
import SendMessage from "../components/SendMessage";

const MessageSection = (e) => {
  return (
    <div className="message-section chat-bg-1">
      <div
        class="background"
        data-asset-chat-background-dark="true"
      ></div>
      <ChatHead />
      <div class="message-inner-container">
      </div>
      <SendMessage />
    </div>
  );
};

export default MessageSection;
