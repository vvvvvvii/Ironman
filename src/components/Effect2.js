import React, { useEffect, useState } from "react";

const Effect2 = () => {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(true);

  const themeStyle = {
    backgroundColor: "#FFE66F",
  };

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setIsEven(count % 2 === 0);
  }, [isEven, count]);
  useEffect(() => {
    console.log("run useEffect");
  }, [themeStyle]);

  return (
    <div className="item" style={themeStyle}>
      <h3>with useEffect</h3>
      <button className="button" onClick={() => increment()}>
        +a: {count}
      </button>
      <p>a is {isEven ? "even" : "odd"}</p>
    </div>
  );
};
export default Effect2;
