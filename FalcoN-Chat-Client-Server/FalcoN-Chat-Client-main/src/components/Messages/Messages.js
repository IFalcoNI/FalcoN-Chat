import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../Message/Message";
import "../Messages/Messages.css"
const Messages = ({ messages, name }) => {
    return(
  <ScrollToBottom className="Chat">
    {messages.map((message, i) => (<div key={i}><Message message={message} name={name} /></div>))}
  </ScrollToBottom>
  )
};

export default Messages;
