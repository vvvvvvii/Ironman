import React from "react";
import { createStore } from "redux";

const increment = () => {
  return {
    type: "INCREMENT", // action 的名字
  };
};
const decrement = () => {
  return {
    type: "DECREMENT", // action 的名字
  };
};

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));
store.dispatch(decrement());

function Memo() {
  return (
    <div>
      <h1>Redux ：傳參數、拆資料夾、 Redux DevTools</h1>
      <h3>拆分資料夾</h3>
      <h3>action 傳參數</h3>
      <h3>兩個以上的 reducer</h3>
      <p>
        錯誤寫法：const store = createStore(counterReducer, isLoggedReducer);
      </p>
      <p>正確寫法：搭配 combineReducers </p>
      <h3>useSelector & useDispatch</h3>
      <h3>Redux DevTools</h3>
      <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=zh-TW">
        連結
      </a>
      <p>src / index.js 要改寫為：</p>
      <p>
        const myStore = createStore( allReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__() );
      </p>
    </div>
  );
}

export default Memo;
