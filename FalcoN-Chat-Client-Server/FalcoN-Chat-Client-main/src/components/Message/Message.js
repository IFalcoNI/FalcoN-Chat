import React from "react";
import "../Message/Message.css";
const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className="MessageContainer_END">
      <div className="MessageBox">
        <p className="MessageText">{text}</p>
      </div>
    </div>
  ) : (
    <div className="MessageContainer_START">
      <div className="MessageBox">
        <p className="MessageText">{text}</p>
        <p className="SentText">{user}</p>
      </div>
    </div>
  );
};
export default Message;
