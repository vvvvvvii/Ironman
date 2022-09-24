import React from "react";
import styled from "styled-components";

function Memo() {
  return (
    <div>
      <h1>Styled Components 與 props 、 extend 、共用元件</h1>
      <h3>props ：設定會不斷用到的主題色等</h3>
      <Button>example 1</Button>
      <Button>example 2</Button>
      <Button>example 3</Button>
      <h3>extend ：套用他人已寫好的樣式，再客製化</h3>
      <Button>example</Button>
    </div>
  );
}

const Button = styled.button`
  background: transparent;
  border: 1px solid #369;
  color: #369;
  font-size: 10px;
  &:hover {
    background: #369;
    color: #fff;
  }
`;
export default Memo;
