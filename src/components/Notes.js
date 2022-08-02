import React from "react";

const Notes = (props) => {
  //   console.log("raw questions: ", props.rawQuestions);
  const apiQs = props.rawQuestions;
  //   console.log("current questions: ", apiQs);

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
    // console.log("apiQs: ", apiQs);
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
                // onClick={(e) => handleClick(e)}
              >
                {answer.text}
              </button>
            ))}
          </div>
          <hr className="cardLine" />
        </div>
      ))}
      {/* {props.gameInProgress ? (
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
      )} */}
    </div>
  );
};

export default Notes;

// {
//     id: 0,
//     question: "This is question 1",
//     answers: [
//       { id: 5, text: "answer1.1", isCorrect: true },
//       { id: 6, text: "answer1.2", isCorrect: false },
//       { id: 7, text: "answer1.3", isCorrect: false },
//       { id: 8, text: "answer1.4", isCorrect: false },
//     ],
//   },
//   {
//     id: 1,
//     question: "This is question 2",
//     answers: [
//       { id: 5, text: "answer2.1", isCorrect: true },
//       { id: 6, text: "answer2.2", isCorrect: false },
//       { id: 7, text: "answer2.3", isCorrect: false },
//       { id: 8, text: "answer2.4", isCorrect: false },
//     ],
//   },
//   {
//     id: 2,
//     question: "This is question 3",
//     answers: [
//       { id: 5, text: "answer3.1", isCorrect: true },
//       { id: 6, text: "answer3.2", isCorrect: false },
//       { id: 7, text: "answer3.3", isCorrect: false },
//       { id: 8, text: "answer3.4", isCorrect: false },
//     ],
//   },
// ]);

// this is what rawQuestions looks like:
// [
//     {
//         "category": "Entertainment: Television",
//         "type": "multiple",
//         "difficulty": "easy",
//         "question": "Who played Agent Fox Mulder in the TV sci-fi drama &quot;The X-Files&quot;?",
//         "correct_answer": "David Duchovny",
//         "incorrect_answers": [
//             "Gillian Anderson",
//             "Robert Patrick",
//             "Mitch Pileggi"
//         ]
//     },
//     {
//         "category": "Entertainment: Television",
//         "type": "multiple",
//         "difficulty": "easy",
//         "question": "Who is the star of the AMC series Breaking Bad?",
//         "correct_answer": "Walter White",
//         "incorrect_answers": [
//             "Saul Goodman",
//             "Jesse Pinkman",
//             "Skyler White"
//         ]
//     },
//     {
//         "category": "Entertainment: Television",
//         "type": "multiple",
//         "difficulty": "easy",
//         "question": "In Game of Thrones, what continent lies across the Narrow Sea from Westeros?",
//         "correct_answer": "Essos",
//         "incorrect_answers": [
//             "Easteros",
//             "Westereast",
//             "Esuntos"
//         ]
//     },
//     {
//         "category": "Entertainment: Television",
//         "type": "multiple",
//         "difficulty": "easy",
//         "question": "In season one of the Netflix political drama &quot;House of Cards&quot;, what government position does Frank Underwood hold?",
//         "correct_answer": "House Majority Whip",
//         "incorrect_answers": [
//             "Attorney General",
//             "President",
//             "Chief of Staff"
//         ]
//     },
//     {
//         "category": "Entertainment: Television",
//         "type": "multiple",
//         "difficulty": "easy",
//         "question": "In the TV show &quot;Mad Men&quot;, what was Donald Draper&#039;s birthname?",
//         "correct_answer": "Richard &quot;Dick&quot; Whitman",
//         "incorrect_answers": [
//             "Donald Draper",
//             "John Ashbury",
//             "Michael &quot;Mikey&quot; Wilhelm"
//         ]
//     }
// ]

// {
//     id: 0,
//     question: "this is question 1",
//     correct_answer: "q1 answer 1",
//     incorrect_answers: ["q1 answer 2", "q1 answer 3", "q1 answer 4"],
// },
// {
//     id: 1,
//     question: "This is Q2",
//     correct_answer: "q2 answer 1",
//     incorrect_answers: ["q2 answer 2", "q2 answer 3", "q2 answer 4"],
// },
// {
//     id: 2,
//     question: "this is now question 3",
//     correct_answer: "q3 answer 1",
//     incorrect_answers: ["q3 answer 2", "q3 answer 3", "q3 answer 4"],
// }
