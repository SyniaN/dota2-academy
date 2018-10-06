import React from "react";
import styled from "styled-components";

export default class TopNav extends React.Component {
  render() {
    return (
      <Wrapper>
        <h2>DOTA 2 Academy</h2>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 80px;
  background-color: #1b1e21;
  position: fixed;
  width: 100%;
  box-shadow: 0 4px 3px #111111;
  display: flex;
  align-items: center;
  justify-content: center;
`;
