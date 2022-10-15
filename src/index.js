import React from "react";
import ReactDOM from "react-dom/client";
import allReducers from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import "./App.css";

// const myStore = createStore(allReducers);
const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
