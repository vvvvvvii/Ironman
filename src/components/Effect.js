import React, { useEffect, useState } from "react";

const Effect = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [isEven, setIsEven] = useState();

  const incrementA = () => {
    setA(a + 1);
  };
  const incrementB = () => {
    setB(b + 1);
  };
  useEffect(() => {
    // setIsEven(!isEven);
    setIsEven(a % 2 === 0);
    // console.log("check a");
  }, [a]); // 這裡需要監聽 isEven 但如果監聽 isEven 又會導致無限迴圈

  return (
    <div className="item">
      <h3>with useEffect</h3>
      <button className="button" onClick={() => incrementA()}>
        +a: {a}
      </button>
      <button className="button" onClick={() => incrementB()}>
        +b: {b}
      </button>
      <p>a is {isEven ? "even" : "odd"}</p>
    </div>
  );
};
export default Effect;
