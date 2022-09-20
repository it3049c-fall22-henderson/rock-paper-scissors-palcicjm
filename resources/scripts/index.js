// Elements
 welcomeScreen = document.getElementById(`welcome-screen`);
 gameScreen = document.querySelector(`#game-screen`);
 startGameButton = document.querySelector(`#start-game-button`);
 userName = document.querySelector(`#username`);
 userSelection = document.querySelector(`#user-selection`);
 goButton = document.querySelector(`#go-button`);
 scoreParagraph = document.querySelector(`#score`);
 gameHistoryParagraph = document.querySelector(`#game-history`);


startGameButton.addEventListener('click',function(e){
	e.preventDefault();
});

goButton.addEventListener('click',function(e){
	e.preventDefault();
});

// instantiate the game object from the `RockPaperScissors` class.
let game = new RockPaperScissors();

// hide game screen
//gameScreen.classList.add("d-none");

// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph.innerHTML(`${game.username} : ${game.score.user} v CPU:  ${game.score.cpu}`)
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph.innerHTML(this.gameHistoryLog.toString());
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  username = document.querySelector(`#username`);
  game = new RockPaperScissors(username);
  gameScreen.setAttribute("class", "game-screen");
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  userSelection = document.querySelector(`#user-selection`);
  game.play(userSelection);
  updateScoreTallyUI();
  updateGameHistoryUI();
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });