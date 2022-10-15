import React, { useState, useEffect, useRef } from "react";
function PrevData() {
  const [input, setInput] = useState("");
  useEffect(() => {
    // 當 input 改變時紀錄到 useRef 中（因為 useRef 值改變不會造成重新渲染）
  }, [input]);
  return (
    <div>
      {/* functional component 每次更改資料都會重新渲染元件，導致無法知道之前的值是什麼 */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>剛剛輸入的是：</p>
    </div>
  );
}
export default PrevData;
