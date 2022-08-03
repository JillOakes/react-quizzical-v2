import React from "react";

const Game = (props) => {
  const [score, setScore] = React.useState(0);


  //changes selected button's color light blue before submitting
  function handleClick(e) {
    let currentQId = e.target.getAttribute("data-qid");
    // get all siblings of currently clicked button
    let buttonList = document.querySelectorAll(
      `button[data-qid="${currentQId}"]`
    );

    buttonList.forEach((element) => {
      element.style.backgroundColor = "#FFFFFF";
    });

    let selectedBtn = document.getElementById(e.target.id);
    selectedBtn.style.backgroundColor = "#D6DBF5";
  }

  function calculateScore() {
    props.setGameInProgress(false);
    console.log("game NOT in progress. calculating your score");
    //for each question's answer array, if id of true answer is blue, props.setScore(prevScore => prevScore + 1)
    // THEN change id of true answer to green if true or red if false
  }

  function endGame() {
    props.setShowIntro(true);
    props.setGameInProgress(true);
    console.log("resetting the game, sending you to Intro page");
  }

  return (
    <div className="questions-container">
      {props.gameArray.map((question) => (
        <div key={question.id}>
          <h3 className="question">{question.question}</h3>
          {/* for each question, make a button for each answer in its answer array */}
          <div className="answers-container">
            {question.answers.map((answer) => (
              <button
                key={answer.id}
                id={"btn" + question.id + answer.id}
                data-qid={question.id}
                className="answer-button"
                onClick={(e) => handleClick(e)}
              >
                {answer.text}
              </button>
            ))}
          </div>
          <hr className="cardLine" />
        </div>
      ))}
      {props.gameInProgress ? (
        <button className="check-answers" onClick={calculateScore}>
          Check answers
        </button>
      ) : (
        <div className="score">
          <h1 className="correct-answers">
            You scored {score}/5 correct answers.
          </h1>
          <button className="play-again" onClick={endGame}>
            Play again
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
