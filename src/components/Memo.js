import React from "react";
import Booking from "./Booking";

function Memo() {
  return (
    <div>
      <h1>Functional Component 生命週期</h1>
      <h3>useEffect 介紹</h3>
      <h3>實際撰寫</h3>
      <Booking />
      <h3>生命週期</h3>
      <ul>
        <li>componentDidMount</li>
        <li>componentWillUnmount</li>
        <li>componentDidUpdate</li>
      </ul>
    </div>
  );
}

export default Memo;
