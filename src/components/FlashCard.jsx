import React from "react";
import "./FlashCard.css";

export default class FlashCard extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">{this.props.question}</h1>
      </div>
    );
  }
}
