import React from "react";

function Memo() {
  return (
    <div>
      <h1>Hook</h1>
      <h2>方便開發的好朋友</h2>
      <h3>注意</h3>
      <ul>
        <li>用 use 開頭</li>
        <li>除了自製的 Hook ，其他都只能在 React Function 中呼叫</li>
        <li>不要在迴圈、條件式、巢狀函式中呼叫</li>
      </ul>
      <h3>優點</h3>
      <ul>
        <li>同個邏輯放在一起，易理解，增加元件重用性</li>
        <li>no more this</li>
        <li>重用 stateful 邏輯</li>
      </ul>
    </div>
  );
}

export default Memo;
