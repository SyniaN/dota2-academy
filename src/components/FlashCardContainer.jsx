import React from "react";
import FlashCard from "./FlashCard";
import styled from "styled-components";

export default class FlashCardContainer extends React.Component {
  render() {
    const chosenQuestion = "What is my age?";

    return (
      <Wrapper>
        <FlashCard question={chosenQuestion} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;
