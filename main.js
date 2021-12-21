import './main.scss';
import '/node_modules/primeflex/primeflex.min.css';
import '/node_modules/primeflex/themes/arya-blue.css';

import TicTacToe from './tictactoe.js';

window.onload = function () {
  let game1 = new TicTacToe('game1');
  let game2 = new TicTacToe('game2');
  game1.gameInit();
  game2.gameInit();
};
