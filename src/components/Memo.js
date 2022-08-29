import React from 'react'
import Booking from "./Booking";
import Example from "./Example";

function Memo() {
  return (
    <div>
      <h1>State</h1>
      <h3>useState 原理</h3>
      <Example/>
      <Booking/>
      <h3>setState 非同步問題</h3>
    </div>
  )
}

export default Memo
