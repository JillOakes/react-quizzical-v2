Quizzical is the final solo project for the Scrimba "Learn React for free" course.
I used the Open Trivia Database API to make this project:  https://opentdb.com/

The parent component is App.  The two children components are Intro and Game.

Inside App, the "showIntro" state is what toggles between the view of Intro and Game.
The Open Trivia DB API is called at App level, and the response is saved in the state "rawQuestions".
From there the data is decoded from unicode, santized for ease of use (each question's answers are put into a single array and given a true/false value), and the five answer arrays are shuffled.
The new array, gameArray, is handed as a prop to the Game component.

Inside the Game component, the "gameInProgress" state is what toggles between the view of the "Check answers" button and the view of the score and "Play again" button.
Each selected answer button and the score are held in separate states.
Button colors are transparent or blue while the game is in progress.  When gameInProgess is toggled, the score is tallied and button colors change to green/red to indicate correct/incorrect answers.
Clicking the "Play again" button toggles the view back to the Intro Component at App level and resets the state back to the beginning so new questions are fetched.


![quizzical01](https://user-images.githubusercontent.com/108361750/182857790-aebac114-fbb1-48c1-ad23-109bd14d23bf.PNG)
![quizzical02](https://user-images.githubusercontent.com/108361750/182857811-e8811b6c-f2c1-4ad3-8736-d83e4753178e.PNG)
![quizzical03](https://user-images.githubusercontent.com/108361750/182857823-29fe8624-35bf-408a-b74b-4328beb34c32.PNG)
![quizzical04](https://user-images.githubusercontent.com/108361750/182857835-3436f685-2c98-4ae1-be18-70dba42a3d5b.PNG)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
