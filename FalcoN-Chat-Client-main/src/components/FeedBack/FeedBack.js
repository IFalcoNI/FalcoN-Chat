import React, { Component } from "react";
import "./Feedback.css";
class FeedBack extends Component {
  render() {
    return (
      <div className="FeedBack">
        <form className="FeedbackForm" action="">
          <h1>FeedBack</h1>
          <h2>Name</h2>
          <input className="FeedbackInput"   placeholder="Name" type="text" />
          <h2>Email</h2>
          <input placeholder="Email" type="email" />
          <h2>Message</h2>
          <textarea placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default FeedBack;
