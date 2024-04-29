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
    divMessage.innerHTML = result + "<br>You Chose: " + choice + "<br>Computer Chose: " + computer;
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


  document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("myModal");

    let menuBtn = document.getElementById("menuBtn");

    let resume = document.getElementsByClassName("close")[0];

    let modal2 = document.querySelector("#winModal");

    let restart = document.querySelector(".restart");

    let winRestart = document.querySelector("#restartWin");

    let winClose = document.querySelector("#closeWin");

    winRestart.onclick = function() {
      window.location.reload();
      modal2.style.display = "none";
    }

    winClose.onclick = function() {
      modal2.style.display = "none";
    }

    restart.onclick = function() {
      window.location.reload();
      modal.style.display = "none";
    }

    menuBtn.onclick = function() {
        modal.style.display = "block";
    }

    resume.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  })
