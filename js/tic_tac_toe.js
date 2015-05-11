//Make sure the document is ready before applying jQuery library
$(document).ready(function(){

  console.log('starting game');

var clickCounter = 0;
var displayChars = ['X', 'O'];

//This function takes the number of clicks and divides by 2. If it's 1, 1 % 2=1, 0 % 2 =0. Will alternate between 0 and 1.
//Returns the index value of displayChars
function getCharacter(numOfClicks){
  var index = numOfClicks % 2;
  return displayChars[index];
}


//invokes getCharacters on the current clickCounter value.
//Sets the player to the var charToDisplay
$('.box_cell').on("click", function(){
  clickCounter++;
  var charToDisplay = getCharacter(clickCounter);
  $(this).css("background-color", "purple").text(charToDisplay);

//this adds X or O to the data of the cell that was clicked on
  $(this).attr('data-populatedCell', charToDisplay);

  });
//On click, every item that has a class of .box_cell will change the css hex background-color of that box
//On click you generate the event, the event handler is the function




});//End of document ready




// // //NameSpace---put all javascript inside of this namespace?
// // // var TicTacToe = TicTacToe || {};


// // //How do I associate this board with the html?
// // // Create a global array to represent the state of the board.
// var board = ['', '', '', '', '', '', '', '', ''];




// //Checks to see if either X or O has hit all the winning combinations
// function getWinner(){
//   for (i = 0; i < board.length; i++) {
//     if ((displayChars[index] === board[0] && displayChars[index] === board[1] && displayChars[index] === board [2]) ||
//         (displayChars[0] === board[3] && displayChars[index] === board[4] && displayChars[index] === board [5]) ||
//         (displayChars[0] === board[6] && displayChars[index] === board[7] && displayChars[index] === board [8]) ||
//         (displayChars[0] === board[0] && displayChars[index] === board[3] && displayChars[index] === board [6]) ||
//         (displayChars[0] === board[1] && displayChars[index] === board[4] && displayChars[index] === board [7]) ||
//         (displayChars[0] === board[2] && displayChars[index] === board[5] && displayChars[index] === board [8]) ||
//         (displayChars[0] === board[0] && displayChars[index] === board[4] && displayChars[index] === board [8]))
//     {
//       winner = displayChars[index];
//       console.log(winner 'is the winner');
//     } else{
//       winner = 'tie';
//       console.log("It's a tie");
//     }
//   }
//   return winner;
// };




// // //1. Set Board
// // //2. Click X create array[]
// // //3. Click 0 create array[]
// // //4. FInd Winner will return winner
// // // set a true or false to know whether they are clicked...you can set data attributes through jquery
// // // can use toggle if isset is true, toggle does nothing, if false will be x or o
// // //winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8]









