const Randomizer = () => {
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

  //   var answers = ["answer1", "answer2", "answer3", "answer4"];
  //   shuffle(answers);
  //   console.log(answers);

  //   var arr2 = [
  //     { text: "answer1" },
  //     { text: "answer2" },
  //     { text: "answer3" },
  //     { text: "answer4" },
  //   ];
  //   shuffle(arr2);
  //   console.log(arr2);

  var arr3 = [
    { id: 1, text: "answer1", isCorrect: true },
    { id: 2, text: "answer2", isCorrect: false },
    { id: 3, text: "answer3", isCorrect: false },
    { id: 4, text: "answer4", isCorrect: false },
  ];
  shuffle(arr3);
  console.log(arr3);

  return (
    <div>
      {/* {shuffle(arr2)} */}
      {/* <h1>hello</h1> */}
      {arr3.map((answer) => (
        <h1 key={answer.id}>{answer.text}</h1>
      ))}
      
    </div>
  );
};

export default Randomizer;
