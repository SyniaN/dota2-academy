import React, { Component } from "react";
import TopNav from "./components/TopNav";
import FlashCardContainer from "./components/FlashCardContainer";
import Footer from "./components/Footer";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <TopNav />
        <ContentWrapper>
          <FlashCardContainer />
        </ContentWrapper>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const ContentWrapper = styled.div`
  height: 100%;
  box-sizing: border-box;
  margin-top: 80px;
  padding: 56px;
  background-color: #2f363d;
  min-height: calc(100vh - 180px);
`;
