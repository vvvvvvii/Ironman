import React from "react";
import { useState } from "react";

function Booking() {
  const [num, setNum] = useState(0);
  const handleNum = (type) => {
    if (type === "minus") {
      setNum(num - 1);
    } else {
      setNum(num + 1);
    }
  };
  return (
    <div className="box">
      <h2>立即訂位</h2>
      <div className="booking-container">
        <button onClick={() => handleNum("minus")} style={{ width: "10%" }}>
          -
        </button>
        <p style={{ marginLeft: "8px" }}>{num}</p>
        <button
          onClick={() => handleNum("plus")}
          style={{ width: "10%", marginLeft: "8px" }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Booking;
