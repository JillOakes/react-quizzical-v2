import React from "react";

const Game = (props) => {
const apiQs = props.rawQuestions;

// For handling the default encoding of character text from the API
function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

//For shuffling the answers around to be random
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle
  while (currentIndex !== 0) {
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const gameArray = [];
if (apiQs.length > 0) {
  for (let i = 0; i < apiQs.length; i++) {
    const foo = {
      id: i,
      question: htmlDecode(apiQs[i].question),
      answers: [
        { id: 5, text: htmlDecode(apiQs[i].correct_answer), isCorrect: true },
        {
          id: 6,
          text: htmlDecode(apiQs[i].incorrect_answers[0]),
          isCorrect: false,
        },
        {
          id: 7,
          text: htmlDecode(apiQs[i].incorrect_answers[1]),
          isCorrect: false,
        },
        {
          id: 8,
          text: htmlDecode(apiQs[i].incorrect_answers[2]),
          isCorrect: false,
        },
      ],
    };
    gameArray.push(foo);
  }
  //for each question, shuffle the answer array
  gameArray.forEach((element) => {
    shuffle(element.answers);
  });
  console.log("game array:", gameArray);
}

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

  return (
    <div className="questions-container">
      {gameArray.map((question) => (
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
