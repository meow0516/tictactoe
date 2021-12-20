const winnerArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

class TicTacToe {
  constructor() {
    this.isOddPlayerTurn = true;
    this.usedNumber = [];
    this.players = {
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
  }

  gameInit() {
    let that = this;
    this.insertBoxes();
    document.querySelector('.submit').addEventListener('click', function () {
      that.submitValue();
    });
  }

  insertBoxes() {
    for (let i = 1; i < 10; i++) {
      let newOxBox = document.createElement('div');
      let newInnerOxBox = document.createElement('div');
      let oxBoxContainer = document.querySelector('.ox_box_container');
      newOxBox.className = 'ox_box col-4';
      newInnerOxBox.className =
        'inner_ox_box flex justify-content-center align-items-center h-6rem bg-blue-700 text-white text-4xl';
      newInnerOxBox.textContent = i;
      newOxBox.appendChild(newInnerOxBox);
      oxBoxContainer.appendChild(newOxBox);
    }
  }

  submitValue() {
    let inputValue = document.getElementById('inputValue').valueAsNumber;
    let innerBox = document.querySelectorAll('.inner_ox_box');

    // check valid input
    let isValidInput = inputValue > 0 && inputValue < 10;
    if (!isValidInput) return alert('please input valid number');

    // check input is used
    let isUsedInput = this.usedNumber.includes(inputValue);
    if (isUsedInput) return alert('This number already used! Try another one.');

    // mark box
    this.markBox(innerBox, inputValue, this.currentPlayer);

    // check winner
    this.checkWinner(this.currentPlayer);

    // players take turns
    this.isOddPlayerTurn = !this.isOddPlayerTurn;
  }

  get currentPlayer() {
    return this.isOddPlayerTurn ? this.players.odd : this.players.even;
  }

  markBox(box, inputValue, player) {
    box[inputValue - 1].innerHTML = player.mark;
    this.usedNumber.push(inputValue);
    player.chosenNumber.push(inputValue);
  }

  checkWinner(playerInfo) {
    for (const arr of winnerArray) {
      if (arr.every((value) => playerInfo.chosenNumber.includes(value))) {
        alert('Player ' + playerInfo.name + ' win!');
      }
    }
  }
}

export default TicTacToe;
