import React from "react";
import { Button } from "react-bootstrap";
import styled, { css } from "styled-components";

function Memo() {
  return (
    <div>
      <h1>在 React 中如何使用 Bootstrap</h1>
      <h3>實際撰寫</h3>
      {/* utils */}
      <Button className="mt-1">test1</Button>
      <p className="fz-1">example</p>
      <h3>theme 放在不同地方的差別</h3>
      <CustomButton2 theme={theme}>test1</CustomButton2>
    </div>
  );
}
const theme = {
  primary: "black",
  secondary: "red",
};

// const CustomButton = styled(Button)`
//   font-weight: bold;
//   font-size: 32px;
//   &:hover {
//     background: #000 !important;
//   }
// `;
const CustomButton2 = styled(Button)`
  background: ${(props) => props.theme.secondary};
`;
export default Memo;
