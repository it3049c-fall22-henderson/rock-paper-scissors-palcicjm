// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.querySelector(`#game-screen`);
const startGameButton = document.querySelector(`#start-game-button`);
const userName = document.querySelector(`#username`);
const userSelection = document.querySelector(`#user-selection`);
const goButton = document.querySelector(`#go-button`);
const scoreParagraph = document.querySelector(`#score`);
const gameHistoryParagraph = document.querySelector(`#game-history`);

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph.innerHTML(game.username ,":" , game.score.user, "v CPU: " , game.score.cpu)
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph.innerHTML(game.gameHistoryLog[0]);
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  const username = document.querySelector(`#username`);
  game = new RockPaperScissors(userName);
  gameScreen.classList.remove(`d-none`);
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  userSelection = document.getElementByID("user-selection")
  play(userSelection)
  updateScoreTallyUI()
  updateGameHistoryUI()
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });