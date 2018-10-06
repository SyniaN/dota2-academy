import React from "react";
import "./FlashCard.css";

export default class FlashCard extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">{this.props.question.text}</h1>

        {this.props.potentialAnswers.map((answer, index) => {
          return (
            <div>
              <input
                onClick={() => {
                  this.props.onAnswerSelect(index);
                }}
                type="radio"
                name="answer"
                value={index}
                checked={this.props.selectedAnswerIndex === index}
              />
              <label for={index}>{answer.text}</label>
            </div>
          );
        })}
      </div>
    );
  }
}
