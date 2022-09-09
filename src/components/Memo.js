import React from 'react';
import Booking2 from "./Booking2";

function Memo() {
  return (
    <div>
      <h1>Class Component 生命週期</h1>
      <h3>生命週期是什麼</h3>
      <ul>
        <li>constructor</li>
        <li>render</li>
        <li>componentDidMount</li>
        <li>componentDidUpdate</li>
        <li>componentWillUnmount</li>
      </ul>
      <h3>實際撰寫</h3>
      <Booking2 />
    </div>
  )
}

export default Memo
