import React, {useState} from "react";
// styling
import "./styles/message.scss";
// components
import ChatList from '../section/ChatList'
import VoidSection from "../section/VoidSection";
import MessageSection from "../section/MessageSection";

const Message = (e) => {
  const [message, setMessage] = useState(false)
  return (
    <section className="bg-1 grid-1-3">
      <ChatList
        openMessage={() => setMessage(true)}
      />
      {message
        ? <MessageSection />
        : <VoidSection />
      }
      
    </section>
  );
};

export default Message;
