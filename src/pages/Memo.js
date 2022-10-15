import React from "react";
import FocusInput from "../components/FocusInput";
import HookTimer from "../components/HookTimer";
import PrevData from "../components/PrevData";

function Memo() {
  return (
    <div>
      <h1>useRef</h1>
      <h3>特性：</h3>
      <ul>
        <li>會回傳一個含有 current 的物件</li>
        <li>可以操作 DOM</li>
        <li>值被更新時，不會觸發元件重新渲染</li>
      </ul>
      <h3>操作 DOM</h3>
      <FocusInput />
      <h3>阻止無限迴圈</h3>
      <HookTimer />
      <h3>取得過去的值</h3>
      <PrevData />
    </div>
  );
}

export default Memo;
