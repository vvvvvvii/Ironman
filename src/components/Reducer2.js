import { useReducer } from "react";

// 有兩個以上的 State 這樣寫
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  // 傳入的 action 變為物件了，所以改成用 action.type 來判斷 action 的名稱
  switch (action.type) {
    case "add":
      return {
        ...state,
        firstCounter: state.firstCounter + action.value,
      };
    case "add2":
      return {
        ...state,
        secondCounter: state.secondCounter + 1,
      };
    default:
      return state;
  }
};
function Reducer2() {
  // 因為在同一物件裡，宣告一次就好
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {/* firstCounter 和 secondCounter 是獨立的不會互相影響 */}
      <p>firstCounter: {count.firstCounter}</p>
      <p>secondCounter: {count.secondCounter}</p>
      {/* dispatch 傳入物件，並用 type 代表行動名稱、 value 代表傳入的參數 */}
      <button onClick={() => dispatch({ type: "add", value: 10 })}>
        + firstCounter
      </button>
      <button onClick={() => dispatch({ type: "add2" })}>
        + secondCounter
      </button>
    </div>
  );
}
export default Reducer2;
