import React from "react";
// import Results from "./Results";
// import Randomizer from "./Randomizer";

const Game = (props) => {
    const [questions, setQuestions] = React.useState([
      {
        id: 0,
        question: "This is question 1",
        answers: [
          { id: 5, text: "answer1.1", isCorrect: true },
          { id: 6, text: "answer1.2", isCorrect: false },
          { id: 7, text: "answer1.3", isCorrect: false },
          { id: 8, text: "answer1.4", isCorrect: false },
        ],
      },
      {
        id: 1,
        question: "This is question 2",
        answers: [
          { id: 5, text: "answer2.1", isCorrect: true },
          { id: 6, text: "answer2.2", isCorrect: false },
          { id: 7, text: "answer2.3", isCorrect: false },
          { id: 8, text: "answer2.4", isCorrect: false },
        ],
      },
      {
        id: 2,
        question: "This is question 3",
        answers: [
          { id: 5, text: "answer3.1", isCorrect: true },
          { id: 6, text: "answer3.2", isCorrect: false },
          { id: 7, text: "answer3.3", isCorrect: false },
          { id: 8, text: "answer3.4", isCorrect: false },
        ],
      },
    ]);


  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  //for each question, shuffle the answer array
  questions.forEach((element) => {
    shuffle(element.answers);
  });

  //changes selected button's color light blue before submitting
  function handleClick(e) {
    // console.log(e.target);
    let currentQId = e.target.getAttribute("data-qid");
    // get all siblings of currently clicked button
    let buttonList = document.querySelectorAll(
      `button[data-qid="${currentQId}"]`
    );
    //console.log(buttonList);
    //console.log(`button[data-qid="${currentQId}"]`);

    buttonList.forEach((element) => {
      element.style.backgroundColor = "#FFFFFF";
    });

    let selectedBtn = document.getElementById(e.target.id);
    selectedBtn.style.backgroundColor = "#D6DBF5";
  }

  return (
    <div className="questions-container">
      {questions.map((question) => (
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

export default Game;
