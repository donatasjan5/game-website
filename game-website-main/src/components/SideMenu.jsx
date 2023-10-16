import React, { useState } from "react";
import "./sideMenu.css";
import NavListData from "../data/navListData";
import NavListItem from "./NavListItem";
import SocialListData from "../data/socialListData";
import SocialListItem from "./SocialListItem";

const SideMenu = ({ active, sectionActive }) => {
  const [navData, setNavData] = useState(NavListData);
  const [socialData, setSocialData] = useState(SocialListData);

  const handleNavOnClick = (id, target) => {
    const newNavData = navData.map((nav) => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });
    setNavData(newNavData);
    sectionActive(target)
  };

  return (
    <div className={`sideMenu ${active ? "active" : undefined}`}>
      <a href="a" className="logo">
        <i className="bi bi-joystick"></i>
        <span className="brand">Play</span>
      </a>

      <ul className="nav">
        {navData.map((item) => (
          <NavListItem
            key={item._id}
            item={item}
            navOnClick={handleNavOnClick}
          />
        ))}
      </ul>

      <ul className="social">
        {socialData.map((item) => (
          <SocialListItem key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
