import React from "react";
import "./FlashCard.css";

export default class FlashCard extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">{this.props.question.text}</h1>

     <div>
       <input type="radio" id="123"
       name="potentialAnswers" value="123"/>
      <label for="123">123</label>
     </div>

     <div>
       <input type="radio" id="456"
       name="potentialAnswers" value="456"/>
      <label for="123">456</label>
     </div>

     <div>
       <input type="radio" id="789"
       name="potentialAnswers" value="789"/>
      <label for="123">789</label>
     </div>

      </div>
    );
  }
}
