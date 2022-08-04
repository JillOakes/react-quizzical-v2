import React from "react";

const Game = (props) => {
  const [score, setScore] = React.useState(0);
  const [gameInProgress, setGameInProgress] = React.useState(true);
  const [selectedQ0BtnId, setSelectedQ0BtnId] = React.useState();
  const [selectedQ1BtnId, setSelectedQ1BtnId] = React.useState();
  const [selectedQ2BtnId, setSelectedQ2BtnId] = React.useState();
  const [selectedQ3BtnId, setSelectedQ3BtnId] = React.useState();
  const [selectedQ4BtnId, setSelectedQ4BtnId] = React.useState();

  //--------------------  changes selected button's color to blue before submitting
  function handleClick(e) {
    let currentQId = e.target.getAttribute("data-qid");
    // get all siblings of currently clicked button
    let buttonList = document.querySelectorAll(
      `button[data-qid="${currentQId}"]`
    );

    //change all siblings to transparent color
    buttonList.forEach((element) => {
      element.style.backgroundColor = "#FFFFFF";
    });

    //change the selected button to blue
    let selectedBtn = document.getElementById(e.target.id);
    selectedBtn.style.backgroundColor = "#D6DBF5";
    
    if (selectedBtn.id[3] === "0") {
      setSelectedQ0BtnId(selectedBtn.id);
    }
    if (selectedBtn.id[3] === "1") {
      setSelectedQ1BtnId(selectedBtn.id);
    }
    if (selectedBtn.id[3] === "2") {
      setSelectedQ2BtnId(selectedBtn.id);
    }
    if (selectedBtn.id[3] === "3") {
      setSelectedQ3BtnId(selectedBtn.id);
    }
    if (selectedBtn.id[3] === "4") {
      setSelectedQ4BtnId(selectedBtn.id);
    }
  }

  function calculateScore() {
    setGameInProgress(false);

    // for each question in the array
    // for each answer in its array
    // if answer.isCorrect && that button is saved to state, increment score

    if (props.gameArray.length > 0) {
      props.gameArray.forEach((question) => {
        for (let i = 0; i < question.answers.length; i++) {
          if (
            question.answers[i].isCorrect &&
            "btn" + question.id + question.answers[i].id === selectedQ0BtnId
          ) {
            setScore((prevScore) => prevScore + 1);
          }
          if (
            question.answers[i].isCorrect &&
            "btn" + question.id + question.answers[i].id === selectedQ1BtnId
          ) {
            setScore((prevScore) => prevScore + 1);
          }
          if (
            question.answers[i].isCorrect &&
            "btn" + question.id + question.answers[i].id === selectedQ2BtnId
          ) {
            setScore((prevScore) => prevScore + 1);
          }
          if (
            question.answers[i].isCorrect &&
            "btn" + question.id + question.answers[i].id === selectedQ3BtnId
          ) {
            setScore((prevScore) => prevScore + 1);
          }
          if (
            question.answers[i].isCorrect &&
            "btn" + question.id + question.answers[i].id === selectedQ4BtnId
          ) {
            setScore((prevScore) => prevScore + 1);
          }
        }
      });
    }

    // To change the buttons' colors:
    // if answer.isCorrect, set backgroundColor to green #94D7A2
    // else if !answer.isCorrect && that button is saved to state, set backgroundColor to red #F8BCBC

    props.gameArray.forEach((question) => {
      for (let i = 0; i < question.answers.length; i++) {
        if (question.answers[i].isCorrect) {
          document.getElementById(
            "btn" + question.id + question.answers[i].id
          ).style.backgroundColor = "#94D7A2";
        } else if (
          !question.answers[i].isCorrect &&
          "btn" + question.id + question.answers[i].id === selectedQ0BtnId
        ) {
          document.getElementById(
            "btn" + question.id + question.answers[i].id
          ).style.backgroundColor = "#F8BCBC";
        } else if (
          !question.answers[i].isCorrect &&
          "btn" + question.id + question.answers[i].id === selectedQ1BtnId
        ) {
          document.getElementById(
            "btn" + question.id + question.answers[i].id
          ).style.backgroundColor = "#F8BCBC";
        } else if (
          !question.answers[i].isCorrect &&
          "btn" + question.id + question.answers[i].id === selectedQ2BtnId
        ) {
          document.getElementById(
            "btn" + question.id + question.answers[i].id
          ).style.backgroundColor = "#F8BCBC";
        } else if (
          !question.answers[i].isCorrect &&
          "btn" + question.id + question.answers[i].id === selectedQ3BtnId
        ) {
          document.getElementById(
            "btn" + question.id + question.answers[i].id
          ).style.backgroundColor = "#F8BCBC";
        } else if (
          !question.answers[i].isCorrect &&
          "btn" + question.id + question.answers[i].id === selectedQ4BtnId
        ) {
          document.getElementById(
            "btn" + question.id + question.answers[i].id
          ).style.backgroundColor = "#F8BCBC";
        }
      }
    });
  }

  function endGame() {
    props.setShowIntro(true);
    setGameInProgress(false);
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
      {gameInProgress ? (
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
