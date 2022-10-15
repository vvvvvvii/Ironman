import React, { useEffect, useRef } from "react";
function FocusInput() {
  // １．宣告 ref 並初始化

  useEffect(() => {
    // ３．載入頁面時 input 就自動被 focus
    // useRef 會回傳一個含有 current 這個屬性的物件
  }, []);
  return (
    <div>
      {/* ２．連接宣告好的 ref */}
      <div>
        <label for="account">帳號 </label>
        <input type="text" id="account" placeholder="example@email.com" />
      </div>
      <div>
        <label for="password">密碼 </label>
        <input type="text" id="password" placeholder="********" />
      </div>
    </div>
  );
}
export default FocusInput;
