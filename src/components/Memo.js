import React, { useState, useMemo } from "react";

const Memo = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const incrementA = () => {
    setA(a + 1);
  };
  const incrementB = () => {
    setB(b + 1);
  };
  const isEven = useMemo(() => {
    console.log("check if a is odd or not");
    return a % 2 === 0;
  }, [a]);
  // const isEven = () => {
  //   // for (let i = 0; i < 9999999999; i++) {}
  //   console.log("check if a is odd or not");
  //   return a % 2 === 0;
  // };
  return (
    <div className="item">
      <h3>use function to handle</h3>
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
export default Memo;
