import React, { Component } from "react";
import TopNav from "./components/TopNav";
import QuizContainer from "./components/QuizContainer";
import Footer from "./components/Footer";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <TopNav />
        <ContentWrapper>
          <QuizContainer />
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
`;

const ContentWrapper = styled.div`
  height: 100%;
  box-sizing: border-box;
  margin-top: 80px;
  padding: 56px;
  background-color: #2f363d;
  min-height: calc(100vh - 180px);
`;
