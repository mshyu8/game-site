/**
       * This puts the results of the game out to the player 
       * choice = what the player chose
       * computer = what the computer randomly "chose"
       * result = result of the game
       **/
function rpsResult(choice, computer, result) {
    // Getting div into a variable
    divMessage = document.getElementById("rpsMessage");
    // Making it visible for the user
    divMessage.style.visibility="visible";
    // Outputting result into the div
    playerResult = "rpsImg/" + choice + ".jpg";
    computerResult = "rpsImg/" + computer + ".jpg";
    divMessage.innerHTML = result + "<br>You Chose: <img src='" + playerResult + "' class='RPSImg'/>" + "<br>Computer Chose: <img src='" + computerResult + "' class='RPSImg'/>";
  }

  function RockPaperScissors(choice) {
    // Getting random choice (0 = rock, 1 = paper, 2 = scissors)
    computerChoice = Math.floor(Math.random() * 3);

    // If the user chose rock
    if (choice == "Rock") {
      // Computer also chose rock, tie
      if (computerChoice == 0) {
        rpsResult(choice, "Rock", "Tie");
      // Computer chose paper, user lost
      } else if (computerChoice == 1) {
        rpsResult(choice, "Paper", "Lose");
      // Computer chose scissors, user won
      } else {
        rpsResult(choice, "Scissors", "Win");
      }
    }

    // If the user chose paper
    if (choice == "Paper") {
      // Computer chose rock, user won
      if (computerChoice == 0) {
        rpsResult(choice, "Rock", "Win");
      // Computer chose paper, tie
      } else if (computerChoice == 1) {
        rpsResult(choice, "Paper", "Tie");
      // Computer chose scissors, user lost
      } else {
        rpsResult(choice, "Scissors", "Lose");
      }
    }

    // If the user chose scissors
    if (choice == "Scissors") {
    // Computer chose rock, user lost
      if (computerChoice == 0) {
        rpsResult(choice, "Rock", "Lose");
      // Computer chose paper, user won
      } else if (computerChoice == 1) {
        rpsResult(choice, "Paper", "Win");
      // Computer chose scissors, tie
      } else {
        rpsResult(choice, "Scissors", "Tie");
      }
    }

  }
//How to play pop-up close button
document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display ="none";
    rpsGame.style.visibility="visible";
});
//How to play pop-up delay
window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        500
)})
      


  function ticChoice(choice) {
    // Getting the column and row from the id. Could use these for 2d array
    // values to find if someone has won.
    column = choice % 10;
    row = (choice / 10) - (column / 10);

    //ex how to change image, size is too small. The images are just 
    // 'x.png' and 'o.png', already added to the project. Can make subdirectory if wanted
    document.getElementById(choice).innerHTML = '<img src="x.png" height="10" width = "10">';

    // Ex how to change actual value of button so you know what is there 
    // for checking win conditions
    document.getElementById(choice).value = "X";
    
    // This should make it so the button can only be hit once
    document.getElementById(choice).onClick = null;
  }