import React from "react";
import { useState, useEffect } from "react";

function Menu() {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/menu")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMenu(data);
      });
  }, []);
  return (
    <div className="box">
      <h2>菜單</h2>
      <div className="menu-container">
        {menu &&
          menu.map((item) => (
            <div key={item.title}>
              <img src={item.img} alt={item.title} className="menu-img" />
              <div className="menu-content">
                <p className="menu-title">{item.title}</p>
                <p className="menu-text">NT {item.price || "時價"}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Menu;
