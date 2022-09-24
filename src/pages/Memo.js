import React, { useState } from "react";

function Memo() {
  const condition = true;
  // const condition = false;
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>引入 CSS ： inline-style</h1>
      <h2>使用與限制</h2>
      <div>
        <h3>實際撰寫</h3>
        <ul>
          <li>外層包大括號＋大括號</li>
          <li>屬性有 dash 的改小駝峰寫法</li>
          <li>以數字或字串傳遞值</li>
          <li>搭配三元運算子判斷條件，再套用樣式</li>
          <p>example 1</p>
          <p>example 2</p>
          <p>example 3</p>
          <li>樣式物件也能抽出單獨撰寫</li>
        </ul>
        <h3>注意</h3>
        <ul>
          <li>能不渲染就不渲染</li>
          {/* 比較差的做法：網頁需要做好幾件事（渲染、判斷、加樣式）才能達成目的 */}
          <p style={{ display: show ? "inline" : "none" }}>Hello</p>
          {/* 比較好的做法：不符合條件的話一開始就不渲染 */}
          <li>無法實現 hover 、 media-query</li>
        </ul>
      </div>
    </div>
  );
}

export default Memo;
