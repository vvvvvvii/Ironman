import { useState, useEffect } from "react";

const Booking = () => {
  const [num, setNum] = useState(0);
  const handleNum = (type) => {
    if (type === "minus") {
      setNum(num - 1);
    } else {
      setNum(num + 1);
    }
  };
  useEffect(() => {
    console.log("useEffect:", num);
  }, [num]);
  useEffect(() => {
    console.log("first render");
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <div>
      <p>創始店訂位人數</p>
      <button onClick={() => handleNum("minus")}>-</button>
      {num}
      <button onClick={() => handleNum("plus")}>+</button>
    </div>
  );
};
export default Booking;
