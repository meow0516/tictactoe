import './main.scss'
import '/node_modules/primeflex/primeflex.min.css'
import '/node_modules/primeflex/themes/arya-blue.css'

let click = 0;
let usedNumber = [];
let players = {
  playerOdd: [],
  playerEven: [],
};
let winnerArray = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,6,7]
];
  


document.querySelector('.submit').addEventListener('click',function(e){
  
  let inputValue = document.getElementById('inputValue').valueAsNumber
  let inner_box = document.querySelectorAll('.inner_ox_box')
  
  // check if inputvalue is used
  // number hasn't been used
  if( usedNumber.indexOf(inputValue) === -1){

    // calculate current player
    click = click + 1

    // current player = playerOdd O
    if( click%2 == 1){
      inner_box[inputValue-1].innerHTML = 'O'
      usedNumber.push(inputValue)
      players.playerOdd.push(inputValue)
      
      checkWinner(winnerArray, players.playerOdd,'Odd')
    }

    // current player = playerEven X
    else{
      inner_box[inputValue-1].innerHTML = 'X'
      usedNumber.push(inputValue)
      players.playerEven.push(inputValue)
  
      checkWinner(winnerArray, players.playerEven,'Even')
    }

  }
  // number has been used
  else{
    alert("This number already used! Try another one.")
  }

  
})

function checkWinner(winnerArray, playerArray, winner){
  for (const arr of winnerArray) {
    if (arr.every(i => playerArray.includes(i))){
    alert('Player ' + winner + ' win!')
    }
  }
}
