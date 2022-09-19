const { get } = require("lodash");

class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    index = Math.floor(Math.random() * 2);
    return acceptedValues[index];
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    if(userSelection == "rock" && cpuSelection == "paper") {
      return "lose";
    }
    if(userSelection == "rock" && cpuSelection == "rock") {
      return "tie";
    }
    if(userSelection == "rock" && cpuSelection == "scissors") {
      return "win";
    }
    if(userSelection == "paper" && cpuSelection == "paper") {
      return "tie";
    }
    if(userSelection == "paper" && cpuSelection == "rock") {
      return "win";
    }
    if(userSelection == "paper" && cpuSelection == "scissors") {
      return "lose";
    }
    if(userSelection == "scissors" && cpuSelection == "paper") {
      return "win";
    }
    if(userSelection == "scissors" && cpuSelection == "rock") {
      return "lose";
    }
    if(userSelection == "scissors" && cpuSelection == "scissors") {
      return "tie";
    }
  }


  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    generateCPUResponse();
  
    if(determineWinner(userSelection, cpuSelection) == "win"){
      this.score.user ++;
      this.gameHistoryLog.push(`USER selected Scissors, CPU selected Paper: USER wins`);
    }
    if(determineWinner(userSelection, cpuSelection) == "lose"){
      this.score.cpu ++;
      this.gameHistoryLog.push(`USER selected Scissors, CPU selected Paper: USER wins`);
    }
  }

}