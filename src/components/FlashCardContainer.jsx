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
        text: "43"
      }
    ];

    return (
      <Wrapper>
        <FlashCard question={chosenQuestion} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;
