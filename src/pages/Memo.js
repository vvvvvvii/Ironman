import React from "react";

// store.subscribe(() => console.log(store.getState()));
// store.dispatch(decrement());

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
        const myStore = createStore( allReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__() );
      </p>
    </div>
  );
}

export default Memo;
