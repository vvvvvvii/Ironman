import React from "react";
import styled from "styled-components";

function componentA() {
  return <Same>A</Same>;
}
const Same = styled.div.attrs({ className: "sameA" })`
  padding: 1rem;
  background-color: #3dd;
`;
export default componentA;
