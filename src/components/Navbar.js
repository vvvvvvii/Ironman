import React from "react";

function Navbar() {
  return (
    <ul className="navbar">
      <li className="nav-item">
        <a href="/">首頁</a>
      </li>
      <li className="nav-item">
        <a href="/menu-list">菜單</a>
      </li>
    </ul>
  );
}

export default Navbar;
