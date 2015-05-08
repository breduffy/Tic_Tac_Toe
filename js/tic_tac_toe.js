//Make sure the document is ready before applying jQuery library
$(document).ready(function(){

  console.log('starting game');

//On click, every item that has a class of .box_cell will change the css hex background-color of that box
//On click you generate the event, the event handler is the function
$('.box_cell').on("click", function(event){
    $(event.currentTarget).css("background-color", "purple").text('X');
  });

$('.box_cell').on("click", function(event){
    $(event.currentTarget).css("background-color", "blue").text('O');
  });





});

//NameSpace---put all javascript inside of this namespace?
var TicTacToe = TicTacToe || {

// // Create board
// var board = [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ];

};



//1. Set Board
//2. Click X create array[]
//3. Click 0 create array[]
//4. FInd Winner will return winner
// set a true or false to know whether they are clicked...you can set data attributes through jquery
// can use toggle if isset is true, toggle does nothing, if false will be x or o
//winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8]









