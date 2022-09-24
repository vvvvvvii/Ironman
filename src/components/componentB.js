import React from "react";
import styled from "styled-components";

function componentB() {
  return <Same>B</Same>;
}
const Same = styled.div`
  padding: 1rem;
  color: #fff;
  background-color: #333;
`;
export default componentB;
