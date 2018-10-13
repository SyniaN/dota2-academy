import React from "react";
import styled from "styled-components";
import ContentContainer from "./ContentContainer";

export default class TopNav extends React.Component {
  render() {
    return (
      <Wrapper>
        <ContentContainer>
          <img
            src="http://cdn.dota2.com/apps/dota2/images/nav/logo.png"
            alt="Dota2 Logo"
          />
        </ContentContainer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 70px;
  background: linear-gradient(to top, #171717, #111111, #040404, #010101);
  position: fixed;
  width: 100%;
  box-shadow: 0 -5px 25px 15px #171717;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1.5px solid #282828;
`;
