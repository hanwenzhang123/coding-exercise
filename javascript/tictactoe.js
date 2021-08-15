// container element where the rows and cells are going to be appended
const con = document.querySelector("#tictactoe")

// the current board
let cellsArr = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];

// current player
let currentPlayer = Math.floor(Math.random() * 10) % 2 == 0 ? "X" : "O";
let gameOver = false;

// conditions of winning, for both X and O
const winningConditions =
  [[0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]]


// reset function
// sets gameOver to true so players can't press buttons anymore
// resets the board (cellsArr array)
// adds a winningAlert to the DOM
// disables all buttons on the board
// resets DOM after 4 seconds
const reset = (tie) => {
  gameOver = true;
  cellsArr = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
  const winningAlert = document.createElement("p");
  winningAlert.innerText = tie ? "Its a tie!" : `${currentPlayer} has won!`;
  con.appendChild(winningAlert);
  document.querySelectorAll("button").forEach(e => e.disabled = true)
  setTimeout(() => {
    gameOver = false;
    init();
  }, 4000)
}

// check win function
// resarr -> maps through all the arrays of the winningConditions array and swaps the
//          indexes with the value of the board e.g: [1, 2, 3] => ["X", undefined, "O"]
// res -> find a array in winningConditions that has only 1 kind of element, 
//        but not undefined (Set is a data structure that only allows unique elements, so   
//        if the size of it is == 1 the array that was made of that set has only unique elements)
// if an array was found than res != undefined. If it is undefined, nothing happends, game is still on,
// else if it is undefined than reset the game, it is not a tie
// else if no array was found but all cells are already played, reset game, it is a tie
const checkWin = () => {
  const resarr = winningConditions.map(e => e.map(e => cellsArr[e]));
  const res = resarr.find(e => (new Set(e)).size == 1 && e.indexOf(undefined) == -1)
  if (res != undefined) {
    reset(false);
  } else if (cellsArr.indexOf(undefined) == -1) {
    reset(true);
  }
}

// initilizes the game
// creates a row with buttons, each 3 iterations create a new row so we have 3x3 board
// add an EventListener to each cell: 
// if gameOver or cell was already played, do nothing
// else set cell to currentPlayer, disable cell, check if won and switch player
function init() {
  let row = document.createElement("div");
  row.className = "row"
  while (con.firstChild) con.firstChild.remove();
  for (let i = 1; i < 10; i++) {
    const cell = document.createElement("button");
    row.appendChild(cell);
    if (i % 3 == 0) {
      con.appendChild(row)
      row = document.createElement("div");
      row.className = "row"
    }

    cell.addEventListener("click", () => {
      if (gameOver) return;
      if (cellsArr[i - 1] != undefined) return;
      cellsArr[i - 1] = currentPlayer;
      cell.innerText = currentPlayer;
      cell.disabled = true;
      checkWin();
      currentPlayer = currentPlayer == "X" ? "O" : "X"
    })
  }
}

init();


// button {
//   width: 30px;
//   height: 30px;
// }

// .row {
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
// }


// p {
//   width: 100%;
//   text-align: center
// }

// <div id="tictactoe"></div>
