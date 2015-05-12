//Make sure the document is ready before applying jQuery library
$(document).ready(function(){

  console.log('starting game');

var clickCounter = 0;
var displayChars = ['X', 'O'];
var board = ['', '', '', '', '', '', '', '', ''];

//This function takes the number of clicks and divides by 2. If it's 1, 1 % 2=1, 0 % 2 =0. Will alternate between 0 and 1.
//Returns the index value of displayChars
function getCharacter(numOfClicks){
  var index = numOfClicks % 2;
  return displayChars[index];
}


//invokes getCharacters on the current clickCounter value.
//Sets the player to the var charToDisplay
$('.box_cell').one("click", function(){
  clickCounter++;
  var charToDisplay = getCharacter(clickCounter);
  $(this).css("background-color", "purple").text(charToDisplay);

//this adds X or O to the data of the cell that was clicked on
  $(this).attr('data-populatedCell', charToDisplay);

  var attrId = $(this).attr('id');


  // Create a global array to represent the state of the board.

  board[attrId] = charToDisplay;

  console.log(board);

  if (getWinner(charToDisplay)) {
      alert('The winner is ' + charToDisplay + '!');
  } else if (isATie()) {
      alert('It is a tie!');
  }

});
//On click, every item that has a class of .box_cell will change the css hex background-color of that box
//On click you generate the event, the event handler is the function


//Checks to see if either X or O has hit all the winning combinations
function getWinner(playerToken){
  var winner = false;
    if (
      //Wins Horizontal
      (playerToken === board[0] && playerToken === board[1] && playerToken === board [2]) ||
      (playerToken === board[3] && playerToken === board[4] && playerToken === board [5]) ||
      (playerToken === board[6] && playerToken === board[7] && playerToken === board [8]) ||

      //Wins Vertically
      (playerToken === board[0] && playerToken === board[3] && playerToken === board [6]) ||
      (playerToken === board[1] && playerToken === board[4] && playerToken === board [7]) ||
      (playerToken === board[2] && playerToken === board[5] && playerToken === board [8]) ||

      //Wins Diagonally
      (playerToken === board[0] && playerToken === board[4] && playerToken === board [8]) ||
      (playerToken === board[2] && playerToken === board[4] && playerToken === board [6])) {

        winner = true;
      // console.log(winner 'is the winner');
    }
    return winner;
};

//Checks to see if there is a tie
function isATie(){
  var tie = false;
  if (clickCounter >= 10 && getWinner == false){
    tie = true;
    }
    return tie;
  };

});//End of document ready




// NameSpace---put all javascript inside of this namespace?
// var TicTacToe = TicTacToe || {};
