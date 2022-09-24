import React from "react";
// import ComponentA from "../components/componentA";
// import ComponentB from "../components/componentB";

function Memo() {
  // const condition = true;
  const condition = false;

  return (
    <div>
      <h1>引入 CSS ： 外部引入</h1>
      <h2>使用與限制</h2>
      <h3>實際撰寫</h3>
      <ul>
        <li>用習慣的方式撰寫 CSS</li>
        <li>屬性不用改小駝峰寫法</li>
        <li>可以實現 hover 、 media-query</li>
        <li>在要用的元件 import ，並搭配 className 套用</li>
        <li>搭配三元運算子判斷條件，再套用樣式</li>
        <p>example 1</p>
        <p>example 2</p>
      </ul>
      <h3>注意</h3>
      <ul>
        <li>CSS 不會只對應到引入的元件</li>
        {/* <ComponentB />
        <ComponentA /> */}
        <li>CSS 載入的順序依照被 import 的順序，不是元件使用的順序</li>
      </ul>
    </div>
  );
}

export default Memo;
