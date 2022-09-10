import React from "react";
import { useState } from "react";

function Menu() {
  const [menu, setMenu] = useState([
    {
      id: 1,
      title: "大麥克",
      price: 50,
      img: "https://images.unsplash.com/photo-1548946522-4a313e8972a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80",
      intro: "經典不敗漢堡",
    },
    {
      id: 2,
      title: "小包薯條",
      price: 20,
      img: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      intro: "現炸薯條，可選擇加鹽、不加鹽",
    },
    {
      id: 3,
      title: "可口可樂",
      price: 25,
      img: "https://images.unsplash.com/photo-1535588926957-dc13fb410d88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      intro: "快樂水讓你快樂似神仙",
    },
  ]);
  return (
    <div className="box">
      <h2>菜單</h2>
      <div className="menu-container">
        {menu.map((item) => (
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
