// initialize the array with empty string
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X"; //Keep track of current player starting with X
let isGameOver = false; //Checks if game has ended... It is iniatially set to false

const cells = document.querySelectorAll(".cell"); //allows to add event listener
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner() {
  for (let combination of winningCombinations) { // loops through all winning combination
    const [a, b, c] = combination;
    // Checks if a win is found
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      isGameOver = true;
      message.textContent = `${board[a]} wins!`;
      return;
    }
  }
// Checks if no winner is found and no empty cell
  if (!board.includes("")) {
    isGameOver = true;
    message.textContent = "It's a draw!";
  }
}

// This function runs when there is a click event
function handleClick(event) {
  const index = event.target.getAttribute("data-index"); //gets cell index
  
  if (board[index] || isGameOver) return; // if cell is already occupied or gameover  it exists the function

  board[index] = currentPlayer; //if empty, update it with current player
  event.target.textContent = currentPlayer;
  checkWinner();

  currentPlayer = currentPlayer === "X" ? "O" : "X"; //switches current player

  if (!isGameOver) {
    message.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  isGameOver = false;
  message.textContent = `Player ${currentPlayer}'s turn`;
  
  cells.forEach(cell => (cell.textContent = ""));
}

cells.forEach(cell => cell.addEventListener("click", handleClick));
resetButton.addEventListener("click", resetGame);

// message.textContent = `Player ${currentPlayer}'s turn`;


