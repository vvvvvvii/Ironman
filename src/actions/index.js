export const increment = (nr) => {
  return {
    type: "INCREMENT", // action 的名字
    payload: nr, // action 參數
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT", // action 的名字
  };
};
