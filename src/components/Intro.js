const Intro = (props) => {
    return (
        <div className="intro-container">
        <h1 className="intro-title">Quizzical</h1>
        <p className="intro-description">5-Question Trivia Game</p>
        <button className="intro-button" onClick={props.startGame}>Start quiz</button>
      </div>
    )
}

export default Intro