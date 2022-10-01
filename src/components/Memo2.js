import React, { useEffect, useState, useMemo } from "react";

const Memo2 = () => {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(true);

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: "#FFE66F",
    };
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setIsEven(count % 2 === 0);
  }, [isEven, count]);
  useEffect(() => {
    console.log("run useMemo");
  }, [themeStyle]);

  return (
    <div className="item" style={themeStyle}>
      <h3>with useMemo</h3>
      <button className="button" onClick={() => increment()}>
        +a: {count}
      </button>
      <p>a is {isEven ? "even" : "odd"}</p>
    </div>
  );
};
export default Memo2;
