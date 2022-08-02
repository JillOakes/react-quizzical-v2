import React from "react";

const Notes = (props) => {
  

  return (
    <div>
      <h1>notes</h1>
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
