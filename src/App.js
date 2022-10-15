import Memo from "./pages/Memo";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

export default function App() {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div className="app-container">
      <Memo />
      <p>counter: {counter}</p>
      <button onClick={() => dispatch(increment(5))}>+5</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  );
}
