import React from "react";
import onlineIcon from "../icons/onlineIcon.png";
import closeIcon from "../icons/closeIcon.png";
import SideBar from "../SideBar/SideBar";
import "../Info/Info.css";
const Info = ({ room, users }) => {
  return (
    <div className="InfoBar">
        <SideBar users={users} pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="close" />
        </a>
      </div>
    </div>
  );
};

export default Info;
