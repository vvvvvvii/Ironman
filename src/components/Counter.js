import React, { useContext } from "react";
// 引入 CountContext
import { CountContext } from "../App";

function Counter() {
  // useContext 可接收並回傳 CountContext
  const countContext = useContext(CountContext);
  return (
    <div className="bg-wheat">
      <p>Counter component</p>
      {/* 在此做的變動會影響到全域的資料 */}
      <button onClick={() => countContext.countDispatch("add")}>+1</button>
      <p>counter: {countContext.countState}</p>
    </div>
  );
}
export default Counter;
