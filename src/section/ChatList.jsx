import React from "react";
// styling
import "./styles/chat.scss";
// components
import ChatListNav from '../components/ChatListNav'
import ChatNotification from "../components/ChatNotification";
import MessageList from "../components/MessageList";

const ChatList = (e) => {
  return <div className="chat-section bg-1">
    <ChatListNav />
    <ChatNotification />
    <MessageList
      openMessage={e.openMessage}
    />
  </div>;
};

export default ChatList;
