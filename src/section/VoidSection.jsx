import React from "react";
// styling
import "./styles/void.scss";
// icons
import computer from "../icons/computer.svg";

const VoidSection = (e) => {
  return (
    <div className="void-section bg-1">
      <div class="void-inner-container">
        <div class="void-inner-content">
          <div
            class="image"
            style={{
              backgroundImage: `url(https://web.whatsapp.com/img/intro-connection-hq-dark_f8cb12a6fc73afaf9d5903b7849bebd6.jpg)`,
              backgroundSize: `cover`,
            }}
          ></div>
          <div class="font-36">Keep your phone connected</div>
          <div class="color-5">
            WhatsApp connects to your phone to sync messages. To reduce data
            usage, connect your phone to Wi-Fi.
          </div>
          <div class="color-5 bottom">
            <img src={computer} alt="computer" /> WhatsApp is available for Windows. <span class="color-4">Get it here.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoidSection;
