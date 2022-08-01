import React from "react";
import blob from "./blob.svg";
import Intro from "./components/Intro";
import Game from "./components/Game";
import Results from "./components/Results";
// import Randomizer from "./components/Randomizer";

function App() {
  const [showIntro, setShowIntro] = React.useState(true);
  const [gameInProgress, setGameInProgress] = React.useState(false);
  const [score, setScore] = React.useState(0);

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
        {/* <Randomizer /> */}
        <img src={blob} alt="blob" className="upper-right-blob" />
        <img src={blob} alt="blob" className="lower-left-blob" />
        {showIntro ? (
          <Intro startGame={startGame} />
        ) : (
          <Game
            startGame={startGame}
            gameInProgress={gameInProgress}
            calculateScore={calculateScore}
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
