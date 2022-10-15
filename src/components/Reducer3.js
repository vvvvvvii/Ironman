import { useReducer } from "react";

// 設定一樣的初始值和一樣的 reducer
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    default:
      return state;
  }
};
function Reducer3() {
  // 用不同名稱宣告
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* count 和 count2 不會互相影響，但用的都是一樣的 reducer */}
      <p>firstCounter: {count}</p>
      <button onClick={() => dispatch("add")}> + firstCounter </button>
    </div>
  );
}
export default Reducer3;
