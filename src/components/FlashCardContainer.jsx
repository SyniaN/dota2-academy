import React from "react";
import FlashCard from "./FlashCard";
import styled from "styled-components";

export default class FlashCardContainer extends React.Component {
  render() {
    const chosenQuestion = {
      imgUrl: undefined,
      text: "What is my name?"
    };

    const potentialAnswers = [
      {
        text: "123",
        isCorrect: undefined
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
        <FlashCard
          question={chosenQuestion}
          potentialAnswers={potentialAnswers}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;
