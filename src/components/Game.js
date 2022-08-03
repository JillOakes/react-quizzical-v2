import React from "react";

const Game = (props) => {
  const [score, setScore] = React.useState(0);
  const [q0Answer, setQ0Answer] = React.useState();
  const [q1Answer, setQ1Answer] = React.useState();
  const [q2Answer, setQ2Answer] = React.useState();
  const [q3Answer, setQ3Answer] = React.useState();
  const [q4Answer, setQ4Answer] = React.useState();

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
    console.log(selectedBtn.id);
    //console.log(typeof selectedBtn.id[3]);
    if(selectedBtn.id[3] === "0"){
      setQ0Answer(selectedBtn.id)
    }
    if(selectedBtn.id[3] === "1"){
      setQ1Answer(selectedBtn.id)
    }
    if(selectedBtn.id[3] === "2"){
      setQ2Answer(selectedBtn.id)
    }
    if(selectedBtn.id[3] === "3"){
      setQ3Answer(selectedBtn.id)
    }
    if(selectedBtn.id[3] === "4"){
      setQ4Answer(selectedBtn.id)
    }
  }

  function calculateScore() {
    props.setGameInProgress(false);
    console.log("game NOT in progress. calculating your score");
   
    if (props.gameArray.length > 0) {
      props.gameArray.forEach((question) => {
        // console.log("here's a question");
        for (let i = 0; i < question.answers.length; i++) {
          if(question.answers[i].isCorrect && (("btn" + question.id + question.answers[i].id) === q0Answer)){
            console.log("increment score")
          }
          if(question.answers[i].isCorrect && (("btn" + question.id + question.answers[i].id) === q1Answer)){
            console.log("increment score")
          }
          if(question.answers[i].isCorrect && (("btn" + question.id + question.answers[i].id) === q2Answer)){
            console.log("increment score")
          }
          if(question.answers[i].isCorrect && (("btn" + question.id + question.answers[i].id) === q3Answer)){
            console.log("increment score")
          }
          if(question.answers[i].isCorrect && (("btn" + question.id + question.answers[i].id) === q4Answer)){
            console.log("increment score")
          }
        }
      });
    }
    // for each question in the array
    // for each answer in its array
    // if answer.isCorrect && backgroundColor blue, props.setScore(prevScore => prevScore + 1)
    // THEN
    // if answer.isCorrect, set backgroundColor green
    // else if !answer.isCorrect has backgroundColor blue, set backgroundColor red
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
