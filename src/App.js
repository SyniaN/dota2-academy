import React, { Component } from "react";
import TopNav from "./components/TopNav";
import QuizContainer from "./components/QuizContainer";
import Footer from "./components/Footer";
import styled from "styled-components";
import ContentContainer from "./components/ContentContainer";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <TopNav />
        <Main>
          <ContentContainer>
            <QuizContainer />
          </ContentContainer>
        </Main>
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

const Main = styled.div`
  height: 100%;
  box-sizing: border-box;
  margin-top: 68px;
  padding-top: 56px;
  background-image: url(http://cdn.dota2.com/apps/dota2/images/blogfiles/bg_five_heroes.jpg);
  background-repeat: no-repeat;
  background-position: center top;
  min-height: calc(100vh - 140px);
`;
