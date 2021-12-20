import './main.scss';
import '/node_modules/primeflex/primeflex.min.css';
import '/node_modules/primeflex/themes/arya-blue.css';

import TicTacToe from './tictactoe.js';

window.onload = function () {
  let game1 = new TicTacToe();
  game1.gameInit();
};

// restart game
document.querySelector('.restart').addEventListener('click', function () {
  let restartGame = confirm('Restart the game?');
  if (restartGame) {
    window.location.reload();
  }
});
