import React from "react";
import blob from "./blob.svg";
import Intro from "./components/Intro";
import Game from "./components/Game";

function App() {
  const [showIntro, setShowIntro] = React.useState(true);
  const [rawQuestions, setRawQuestions] = React.useState([]);

  React.useEffect(() => {
    fetch(
      // "https://opentdb.com/api.php?amount=5&category=14&difficulty=easy&type=multiple"
      "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        setRawQuestions(data.results);
        console.log("data fetched from api");
      });
  }, [showIntro]);

  
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

  const apiQs = rawQuestions;
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
  }

  function startGame() {
    setShowIntro(false);
  }

  return (
    <div className="App">
      <main>
        <img src={blob} alt="blob" className="upper-right-blob" />
        <img src={blob} alt="blob" className="lower-left-blob" />
        {showIntro ? (
          <Intro startGame={startGame} />
        ) : (
          <Game
            gameArray={gameArray}
            setShowIntro={setShowIntro}
          />
        )}
      </main>
    </div>
  );
}

export default App;
