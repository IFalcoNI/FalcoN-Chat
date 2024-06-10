import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "../images/Message.png";
import "../Home/Home.css";
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home_Text">
          <p>Message Fast & Easy</p>
          <Link to="/join">Join</Link>
        </div>
        <img className="HomeImage" src={Message} alt="" />
      </div>
    );
  }
}

export default Home;
