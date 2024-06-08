import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "../SideBar/SideBar.css";

const SideBar = ({ users }) => {
  return (
    <Menu>
      <h2>Users</h2>
      <div id="users"></div>
      <div id="SideInfo">
        <Link id="subscribe" className="menu-item" to="/buy">
          Subscribe
        </Link>
        <Link id="feedback" className="menu-item" to="/feedback">
          Feedback
        </Link>
      </div>
    </Menu>
  );
};

export default SideBar;
