import React from "react";
import sendIcon from "../icons/sendIcon.png";
import "../input/Input.css";
const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form className="form">
      <input
        placeholder="Type a message..."
        value={message}
        maxLength="500"
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
        className="input"
        type="text"
      />
      <button className="sendButton" onClick={(event) => sendMessage(event)}>
        <img class="sendIcon" src={sendIcon} alt="" />
      </button>
    </form>
  );
};
export default Input;
