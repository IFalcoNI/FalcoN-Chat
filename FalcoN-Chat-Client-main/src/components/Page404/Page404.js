import React, { Component } from "react";
import "../Page404/Page404.css";
import sample from "../video/BackgroundVideo.mp4";
import { Link } from "react-router-dom";
class Page404 extends Component {
  render() {
    return (
      <div className="Background404">
        <video className="BackgroundVideo" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
          Video is not supported
        </video>
        <div className="PageNotFound">
          <h1 className="PageNotFoundText">ERROR 404</h1>
          <Link className="GoHome" to="/">Go Back Home</Link>
        </div>
      </div>
    );
  }
}

export default Page404;
