import React from "react";
const Results = (props) => {
  return (
    <div className="results-container">
      {props.gameInProgress ? (
        <button className="check-answers" onClick={props.calculateScore}>
          Check answers
        </button>
      ) : (
        <div className="score">
          <h1 className="correct-answers">
            You scored {props.score}/5 correct answers.
          </h1>
          <button className="play-again" onClick={props.endGame}>
            Play again
          </button>
        </div>
      )}
    </div>
  );
};

export default Results;
