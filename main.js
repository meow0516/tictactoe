import './main.scss'
import '/node_modules/primeflex/primeflex.min.css'
import '/node_modules/primeflex/themes/arya-blue.css'

let click = 0;
let usedNumber = [];
let players = {
  odd: {
    name: "Odd",
    chosenNumber: []
  }, 
  even: {
    name: "Even",
    chosenNumber: []
  },
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
  let innerBox = document.querySelectorAll('.inner_ox_box')
  if ( inputValue >0 && inputValue <10 ){
    // check if inputvalue is used
    // number hasn't been used
    if( usedNumber.indexOf(inputValue) === -1){
  
      // calculate current player
      click = click + 1
  
      // current player = playerOdd O
      if( click%2 ){
        innerBox[inputValue-1].innerHTML = 'O'
        usedNumber.push(inputValue)
        players.odd.chosenNumber.push(inputValue)
        
        checkWinner(winnerArray, players.odd)
      }
  
      // current player = playerEven X
      else{
        innerBox[inputValue-1].innerHTML = 'X'
        usedNumber.push(inputValue)
        players.even.chosenNumber.push(inputValue)
        
        checkWinner(winnerArray, players.even)
      }
  
    }
    // number has been used
    else{
      alert("This number already used! Try another one.")
    }

  }
  else{
    alert("please input valid number")
  }
  

  
})

function checkWinner(winnerArray, playerInfo){
  for (const arr of winnerArray) {
    if (arr.every(i => playerInfo.chosenNumber.includes(i))){
    alert('Player ' + playerInfo.name + ' win!')
    }
  }
}

// restart game 
document.querySelector('.restart').addEventListener('click',function()
{
  let restartGame = confirm('Restart the game?')
  if( restartGame ){
    window.location.reload()
  }
})

