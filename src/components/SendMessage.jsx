import React from "react";
// styling
import "./styles/send-message.scss";
// icons
import emoji from "../icons/emoji.svg";
import attach from "../icons/attach.svg";
import record from "../icons/record.svg";

const Input = (e) => {
  return (
    <div className="send-message">
      <div class="send-message-inner bg-7">
        <img src={emoji} alt="emoji" />
        <img src={attach} alt="attach" />
        <input type="text" class="bg-6" />
        <img src={record} alt="record" />
      </div>
    </div>
  );
};

export default Input;
