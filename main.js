import './main.scss';
import '/node_modules/primeflex/primeflex.min.css';
import '/node_modules/primeflex/themes/arya-blue.css';

let isOddPlayerTurn = true;
let usedNumber = [];
let players = {
  odd: {
    name: 'Odd',
    chosenNumber: [],
    mark: 'O',
  },
  even: {
    name: 'Even',
    chosenNumber: [],
    mark: 'X',
  },
};
let winnerArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

document.querySelector('.submit').addEventListener('click', function (e) {
  let inputValue = document.getElementById('inputValue').valueAsNumber;
  let innerBox = document.querySelectorAll('.inner_ox_box');
  // check valid input
  let isValidInput = inputValue > 0 && inputValue < 10;
  if (!isValidInput) return alert('please input valid number');

  // check input is used
  let isUsedInput = usedNumber.indexOf(inputValue);
  if (isUsedInput !== -1)
    return alert('This number already used! Try another one.');

  // mark box
  let currentPlayer = isOddPlayerTurn ? players.odd : players.even;
  innerBox[inputValue - 1].innerHTML = currentPlayer.mark;
  usedNumber.push(inputValue);
  currentPlayer.chosenNumber.push(inputValue);
  checkWinner(winnerArray, currentPlayer);
  isOddPlayerTurn = !isOddPlayerTurn;
});

function checkWinner(winnerArray, playerInfo) {
  for (const arr of winnerArray) {
    if (arr.every((i) => playerInfo.chosenNumber.includes(i))) {
      alert('Player ' + playerInfo.name + ' win!');
    }
  }
}

// restart game
document.querySelector('.restart').addEventListener('click', function () {
  let restartGame = confirm('Restart the game?');
  if (restartGame) {
    window.location.reload();
  }
});
