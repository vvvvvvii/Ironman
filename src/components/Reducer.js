import { useReducer } from "react";
// 設定預設值
const initialState = 0;
// 改變 State 的函式
const reducer = (state, action) => {
  // 根據傳入的值判斷對應行為
  switch (action) {
    case "add":
      return state + 1;
    default:
      return state;
  }
};
function Reducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>count: {count}</p>
      {/* 按按鈕時傳入 add 到 reducer 中，藉以改變 count 的值 */}
      <button onClick={() => dispatch("add")}> + </button>
    </div>
  );
}
export default Reducer;
