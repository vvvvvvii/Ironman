import Memo from "./pages/Memo";
import Counter from "./components/Counter";
import ComponentA from "./components/ComponentA";
import React, { useReducer } from "react";

export const CountContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    default:
      return state;
  }
};
export default function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app-container">
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <Memo />
        <Counter />
        <ComponentA />
      </CountContext.Provider>
    </div>
  );
}
