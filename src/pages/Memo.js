import React from "react";
import Reducer from "../components/Reducer";
import Reducer2 from "../components/Reducer2";
import Reducer3 from "../components/Reducer3";

function Memo() {
  return (
    <div>
      <h1>useReducer & useContext</h1>
      <h2>用 useReducer 來管理 State / useContext 傳遞全域 State </h2>
      <h3>useReducer</h3>
      <ul>
        <li>提供初始值，與改變 State 的函式</li>
        <li>能依據傳入不同的 action 值，用不同方式改變 State</li>
      </ul>
      <h3>寫法</h3>
      <Reducer />
      <h3>傳參數與共用 reducer</h3>
      <Reducer2 />
      <h3>重複使用 reducer</h3>
      <Reducer3 />
      <h3>搭配 useContext 傳遞全域 State </h3>
    </div>
  );
}

export default Memo;
