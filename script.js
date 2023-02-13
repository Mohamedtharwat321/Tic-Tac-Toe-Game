let turn = "x";
let gameTitle = document.querySelector(".game-title");
let squares = [];
let chk = 1;

/////////////////////////////////
///// END GAME
/////////////////////////////////

function endGame(num1, num2, num3) {
  if (squares[num1] == "X") {
    gameTitle.innerHTML = "Player 1 Winner (X)";
  } else {
    gameTitle.innerHTML = "Player 2 Winner (O)";
  }
  document.getElementById("item" + num1).style.backgroundColor = "#7302b4";
  document.getElementById("item" + num2).style.backgroundColor = "#7302b4";
  document.getElementById("item" + num3).style.backgroundColor = "#7302b4";

  setInterval(function () {
    gameTitle.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 4000);

  window.game = function () {
    return false;
  };
}
function draw() {
  gameTitle.innerHTML = "Draw";
  setInterval(function () {
    gameTitle.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 4000);
}

/////////////////////////////////
///// WINNER
/////////////////////////////////
function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("item" + i).innerHTML;
  }
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != ""
  ) {
    endGame(1, 2, 3);
  } else if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[4] != ""
  ) {
    endGame(4, 5, 6);
  } else if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[7] != ""
  ) {
    endGame(7, 8, 9);
  } else if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[1] != ""
  ) {
    endGame(1, 4, 7);
  } else if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[2] != ""
  ) {
    endGame(2, 5, 8);
  } else if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[3] != ""
  ) {
    endGame(3, 6, 9);
  } else if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != ""
  ) {
    endGame(1, 5, 9);
  } else if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[3] != ""
  ) {
    endGame(3, 5, 7);
  } else if (
    squares[1] != "" &&
    squares[2] != "" &&
    squares[3] != "" &&
    squares[4] != "" &&
    squares[5] != "" &&
    squares[6] != "" &&
    squares[7] != "" &&
    squares[8] != "" &&
    squares[9] != ""
  ) {
    draw();
  }
}

/////////////////////////////////
///// DESIGN THE GAME
/////////////////////////////////
function game(id) {
  let element = document.getElementById(id);
  if (turn === "x" && element.innerHTML == "") {
    element.innerHTML = "X";
    turn = "o";
    gameTitle.innerHTML = "Player 2 (O)";
  } else if (turn === "o" && element.innerHTML == "") {
    element.innerHTML = "O";
    turn = "x";
    gameTitle.innerHTML = "Player 1 (X)";
  }
  winner();
}
