import React from "react";
import styled from "styled-components";
import FlashCardContainer from "./FlashCardContainer";

export default class QuizContainer extends React.Component {
  render() {
    const chosenQuestion = {
      imgUrl: undefined,
      text: "What is my name?"
    };

    const potentialAnswers = [
      {
        text: "123",
        isCorrect: false
      },
      {
        text: "456",
        isCorrect: true
      },
      {
        text: "789",
        isCorrect: false
      }
    ];
    return (
      <Wrapper>
        <FlashCardContainer
          chosenQuestion={chosenQuestion}
          potentialAnswers={potentialAnswers}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;
