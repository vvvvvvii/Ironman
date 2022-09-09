import React from 'react';
import Booking from "./Booking";
import Booking2 from "./Booking2";

function Memo() {
  return (
    <div>
      <h1>Functional Component & Class Component</h1>
      <h3>講古</h3>
      <ul>
        <li>沒有 hooks 以前</li>
        <li>React 16.8 以後</li>
      </ul>
      <h3>實際撰寫</h3>
      <Booking />
      <Booking2 />
      <h3>注意</h3>
      <ul>
        <li>State 統一放在 state 物件，取用要加上 this.state </li>
        <li>改值要使用 this.setState ，只會替換掉有改變的內容</li>
        <li>只要有調用 this.setState 就重新渲染</li>
        <li>用 props 傳改變 State 的函式需搭配 .bind(this) </li>
      </ul>
      <h3>比較</h3>
      <ul>
        <li>Functional Component 比較簡潔</li>
        <li>Functional Component 可避免不必要渲染</li>
        <li>Functional Component 可避免 this 問題</li>
      </ul>
    </div>
  )
}

export default Memo
