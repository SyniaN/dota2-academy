import React from "react";
import FlashCard from "./FlashCard";
import styled from "styled-components";

export default class FlashCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswerIndex: -1,
      showAnswer: false
    };
    this.onAnswerSelect = this.onAnswerSelect.bind(this);
  }

  onAnswerSelect(newAnswer) {
    this.setState({ selectedAnswerIndex: newAnswer });
  }

  onCheckAnswerClick() {
    this.setState({ showAnswer: true });
    this.props.checkAnswer();
  }

  onNextQuestionClick() {
    this.props.nextQuestion();
  }

  render() {
    const chosenQuestion = this.props.chosenQuestion;

    const potentialAnswers = this.props.potentialAnswers.map(answer => ({
      ...answer,
      isCorrect: this.state.showAnswer ? answer.isCorrect : undefined
    }));

    return (
      <Wrapper>
        <FlashCard
          question={chosenQuestion}
          potentialAnswers={potentialAnswers}
          selectedAnswerIndex={this.state.selectedAnswerIndex}
          onAnswerSelect={this.onAnswerSelect}
        />
        <Button
          onClick={
            this.state.showAnswer
              ? this.onNextQuestionClick
              : this.onCheckAnswerClick
          }
        >
          {this.state.showAnswer ? "Next" : "Check Answer"}
        </Button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;

const Button = styled.button``;
