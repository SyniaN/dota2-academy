import React from "react";
import FlashCard from "./FlashCard";
import styled from "styled-components";

export default class FlashCardContainer extends React.Component {
  render() {
    const chosenQuestion = {
      imgUrl: undefined,
      text: "What is my name?"
    };

    const potentialAnswers = ["123", "456", "789"];

    const correctAnswer = "789";

    return (
      <Wrapper>
        <FlashCard
          question={chosenQuestion}
          potentialAnswers={potentialAnswers}
          correctAnswer={correctAnswer}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;
