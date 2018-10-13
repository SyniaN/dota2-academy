import React from "react";
import styled from "styled-components";
import FlashCardContainer from "./FlashCardContainer";
import quizQuestionGenerator from "../util/quizQuestionGenerator";
import FinalScore from "./FinalScore";

export default class QuizContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currentQuestionIndex: 0,
      points: 0
    };
    this.onNextQuestionClick = this.onNextQuestionClick.bind(this);
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

  onNextQuestionClick() {
    this.setState(state => ({
      currentQuestionIndex: state.currentQuestionIndex + 1
    }));
  }

  render() {
    const questionCount = this.state.questions.length;
    return (
      <Wrapper>
        {questionCount > 0 &&
          this.state.currentQuestionIndex < questionCount && (
            <React.Fragment>
              <h2>{`${this.state.points}/${this.state.questions.length}`}</h2>
              <FlashCardContainer
                checkAnswer={this.checkAnswer}
                onNextQuestionClick={this.onNextQuestionClick}
                chosenQuestion={
                  this.state.questions[this.state.currentQuestionIndex]
                    .chosenQuestion
                }
                potentialAnswers={
                  this.state.questions[this.state.currentQuestionIndex]
                    .potentialAnswers
                }
              />
            </React.Fragment>
          )}
        {this.state.currentQuestionIndex === questionCount && (
          <FinalScore
            points={this.state.points}
            questionCount={questionCount}
          />
        )}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-color: rgba(20, 20, 20, 0.5);
  padding: 24px 48px;
  border-radius: 10px;
  min-height: 450px;
`;
