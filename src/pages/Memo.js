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
      <h1>Redux ：介紹、安裝與使用</h1>
      <h3>官網</h3>
      <a href="https://react-redux.js.org/introduction/getting-started#an-existing-react-app">
        連結
      </a>
      <h3>安裝</h3>
      <p>npm install redux react-redux</p>
      <h3>撰寫</h3>
    </div>
  );
}

export default Memo;
