import React from "react";

const NavListItem = ({ item }) => {
  return (
    <li>
      <a href="a">
        <i className={`bi ${item.icon}`}></i>
        <span className="navName">{item.name}</span>
      </a>
    </li>
  );
};

export default NavListItem;
