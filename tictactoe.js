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
    this.winnerArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
  }

  gameInit() {
    let that = this;
    document.querySelector('.submit').addEventListener('click', function () {
      that.submitValue();
    });
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
    let currentPlayer = this.isOddPlayerTurn
      ? this.players.odd
      : this.players.even;
    this.markBox(innerBox, inputValue, currentPlayer);
    this.checkWinner(this.winnerArray, currentPlayer);

    // players take turns
    this.isOddPlayerTurn = !this.isOddPlayerTurn;
  }

  markBox(box, inputValue, player) {
    box[inputValue - 1].innerHTML = player.mark;
    this.usedNumber.push(inputValue);
    player.chosenNumber.push(inputValue);
  }

  checkWinner(winnerArray, playerInfo) {
    for (const arr of winnerArray) {
      if (arr.every((value) => playerInfo.chosenNumber.includes(value))) {
        alert('Player ' + playerInfo.name + ' win!');
      }
    }
  }
}

export default TicTacToe;
