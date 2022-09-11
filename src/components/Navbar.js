import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="navbar">
      <li className="nav-item">
        <Link to="/">首頁</Link>
      </li>
      <li className="nav-item">
        <Link to="/menu-list">菜單</Link>
      </li>
    </ul>
  );
}

export default Navbar;
