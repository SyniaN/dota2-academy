import React from "react";
import styled from "styled-components";

export default class Footer extends React.Component {
  render() {
    return <Wrapper>Footer</Wrapper>;
  }
}

const Wrapper = styled.div`
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: #1b1d1d;
  border-top: solid #272a2a 3px;
`;
