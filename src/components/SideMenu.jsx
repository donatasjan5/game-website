import React, { useState } from "react";
import "./sideMenu.css";
import NavListData from "../data/navListData";
import NavListItem from "./NavListItem";

const SideMenu = () => {
  const [navData, setNavData] = useState(NavListData);
  return (
    <div className="sideMenu">
      <a href="a" className="logo">
        <i className="bi bi-joystick"></i>
        <span className="brand">Play</span>
      </a>
      <ul className="nav">
        {navData.map((item) => (
          <NavListItem key={item._id} item={item} />
        ))}
      </ul>
      
    </div>
  );
};

export default SideMenu;
