import React from "react";
import blob from "./blob.svg";
import Intro from "./components/Intro";
import Game from "./components/Game";

function App() {
  const [showIntro, setShowIntro] = React.useState(true);
  // const [gameInProgress, setGameInProgress] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [rawQuestions, setRawQuestions] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=14&difficulty=easy&type=multiple"
      //`https://swapi.dev/api/people/1`
    )
      .then((res) => res.json())
      .then((data) => {
        setRawQuestions(data.results)
        console.log("data fetched from api");
      });
  }, [showIntro]);


  function startGame() {
    setShowIntro(false);
    // setGameInProgress(true);
    // console.log("game in progress");
  }

  // function calculateScore() {
  //   setGameInProgress(false);
  //   console.log("game NOT in progress. calculating your score");
  //   //for each question's answer array, if id of true answer is blue, setScore(prevScore => prevScore + 1)
  //   // THEN change id of true answer to green if true or red if false
  // }

  function endGame() {
    setShowIntro(true);
    // setGameInProgress(false);
    console.log("resetting the game, sending you to Intro page");
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
            rawQuestions={rawQuestions}
            startGame={startGame}
            // gameInProgress={gameInProgress}
            // calculateScore={calculateScore}
            score={score}
            setScore={setScore}
            endGame={endGame}
          />
        )}
      </main>
    </div>
  );
}

export default App;
