import React from "react";
import styled from "styled-components";

export default class FinalScore extends React.Component {
  render() {
    return (
      <Wrapper>
        <h1>Finished</h1>
        <h3>
          You scored {this.props.points} out of {this.props.questionCount}
        </h3>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;
