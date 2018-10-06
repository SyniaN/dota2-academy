import React from "react";
import styled from "styled-components";
import FlashCardContainer from "./FlashCardContainer";
import quizQuestionGenerator from "../util/quizQuestionGenerator";

export default class QuizContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currentQuestionIndex: 0,
      points: 0
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  componentDidMount() {
    this.setState({
      questions: quizQuestionGenerator()
    });
  }

  checkAnswer(answerIndex) {
    const currentQuestion = this.state.questions[
      this.state.currentQuestionIndex
    ];

    const answerCorrect =
      currentQuestion.potentialAnswers[answerIndex].isCorrect;

    this.setState(state => ({
      points: answerCorrect ? state.points + 1 : state.points
    }));
  }

  nextQuestion() {
    this.setState(state => ({
      currentQuestionIndex: state.currentQuestionIndex + 1
    }));
  }

  render() {
    return (
      <Wrapper>
        {this.state.questions.length > 0 && (
          <FlashCardContainer
            checkAnswer={this.checkAnswer}
            chosenQuestion={
              this.state.questions[this.state.currentQuestionIndex]
                .chosenQuestion
            }
            potentialAnswers={
              this.state.questions[this.state.currentQuestionIndex]
                .potentialAnswers
            }
          />
        )}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;
