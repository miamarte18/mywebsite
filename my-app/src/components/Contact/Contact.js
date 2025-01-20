import React from "react";
import mailicon from "../../assets/mailicon.svg";

import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contactus-info-wrapper">
        <div className="contactus-info">
          <div className="title-contact">
            <p className="text-wrapper">Where you can find me:</p>
          </div>
          <div className="icons-contact">
            <div className="github" />
            <div className="linkedln" />
            <img className="mailicon" alt="Mailicon" src={mailicon} />
          </div>
          <div className="created">
            <div className="div">Created by Mia Marte</div>
          </div>
        </div>
      </div>
    </div>
  );
};
