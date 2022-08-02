import React from "react";
import blob from "./blob.svg";
import Intro from "./components/Intro";
import Game from "./components/Game";
// import Results from "./components/Results";
// import Randomizer from "./components/Randomizer";
import Notes from "./components/Notes";

function App() {
  const [showIntro, setShowIntro] = React.useState(true);
  const [gameInProgress, setGameInProgress] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [rawQuestions, setRawQuestions] = React.useState([]);

  React.useEffect(() => {
    fetch(
      //`https://swapi.dev/api/people/1`
      "https://opentdb.com/api.php?amount=5&category=14&difficulty=easy&type=multiple"
      // "https://opentdb.com/api.php?amount=1&category=14&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        setRawQuestions(data.results);
        console.log("data fetched", data.results);
      });
  }, []);

  function startGame() {
    setShowIntro(false);
    setGameInProgress(true);
    console.log("the game is now in progress");
  }

  function calculateScore() {
    setGameInProgress(false);
    console.log("game is over. calculating your score");
    //if question component is true, setScore(prevScore => prevScore + 1)
  }

  function endGame() {
    setShowIntro(true);
    setGameInProgress(false);
    console.log("resetting the game, sending you to Intro page");
  }

  return (
    <div className="App">
      <main>
        <Notes rawQuestions={rawQuestions}/>
        <img src={blob} alt="blob" className="upper-right-blob" />
        <img src={blob} alt="blob" className="lower-left-blob" />
        {/* {showIntro ? (
          <Intro startGame={startGame} />
        ) : (
          <Game
            rawQuestions={rawQuestions}
            startGame={startGame}
            gameInProgress={gameInProgress}
            calculateScore={calculateScore}
            score={score}
            setScore={setScore}
            endGame={endGame}
          />
        )} */}
      </main>
    </div>
  );
}

export default App;
