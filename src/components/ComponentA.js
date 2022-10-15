import React, { useContext } from "react";
import { CountContext } from "../App";
function ComponentA() {
  const countContext = useContext(CountContext);
  return <p>ComponentA 的資料也被改變了: {countContext.countState}</p>;
}
export default ComponentA;
