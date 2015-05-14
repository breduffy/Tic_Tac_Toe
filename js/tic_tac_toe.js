'use strict';

var gameRef;
var gameRef, gameAuth, player;

//Make sure the document is ready before applying jQuery library
$(document).ready(function(){

gameRef = new Firebase('https://archrivaltictactoe.firebaseIO.com/');

//Attempt at Firebase
// var otherPlayer = function(player) {
//     return player === 'X' ? 'O' : 'X';
//   };

//   //Get a "unique" id for the user
//   if (!(gameAuth = gameRef.getAuth())) {
//     gameRef.authAnonymously(function(error, authData) {
//       if (error) {
//         console.log("Login Failed!", error);
//       } else {
//         gameAuth = authData;
//       }
//     });
//   }

//   //On load, set up event handling on the object at "gameRef"
//   gameRef.on('value', function(snapshot) {
//     var message = snapshot.val();
//     var disable = false;
//     console.log(message);
//     if (message) {
//       if (gameAuth.uid === message.waitingPlayer) {
//         player = otherPlayer(message.player);
//         disable = true;
//       } else {
//         player = message.player;
//       }
//     }
//     $('#player').text(player);
//     $('#move').prop('disabled', disable);
//   });




alert('Choose Arch-Rivals');
console.log('starting game');

var clickCounter = 0;
var displayChars = ['X', 'O'];
var board = ['', '', '', '', '', '', '', '', ''];
var xWins = 0;
var oWins = 0;
var images;
var oPlayerImg;
var xPlayerImg;


//This function should take the selected Arch-Rivals and put them in the html based on the ID of the option.
//The ID of the option is equal to the archRival[i]
$("select").change(function () {

  //Array of Arch-Rivals
  var archRivals = [['Sherlock Holmes', 'Dr. Moriarty'],['Tesla', 'Edison'], ['Coyote', 'Road Runner'], ['Romulus', 'Remus'], ['Alien', 'Predator'], ['Charles Xavier', 'Magneto'], ['Red Sox','Yankees'], ['Hamilton', 'Burr'], ['Mozart', 'Salieri'], ['Dr. Jeckyll', 'Mr. Hyde'], ['Spy', 'Spy'], ['Caravaggio', 'Baglione'], ['Hector', 'Achilles'],['Michael Corleone','Fredo Corleone'],['The Sharks', 'The Jets'],['The Montagues','The Capulets'],['Hatfields','McCoys'], ['Neo','Agent Smith'], ["I'm a Mac", "and I'm a PC"],['Nature','Nurture'],['Jacob', 'The Smoke Monster']];

  var attrVal = $(this).val();

  var strGood = archRivals[attrVal][0];
  var strBad = archRivals[attrVal][1];
  var str = " ";

  $("#goodGuy").text(strGood + "  ");
  $("#badGuy").text(strBad + "  ");

  //Images
  images= {
    "Sherlock Holmes": "images/0/holmes.png",
    "Dr. Moriarty": "images/0/moriarty.png",
    "Tesla": "images/1/tesla.png",
    "Edison": "images/1/edison.png",
    "Coyote": "images/2/coyote.png",
    "Road Runner": "images/2/roadrunner.png",
    "Romulus": "images/3/romulus.png",
    "Remus": "images/3/remus.png",
  }

  //Sets the value of to the array value of strGood or strBad
  oPlayerImg = images[strGood];
  xPlayerImg = images[strBad];

})







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

  //deleted .text(charToDisplay) from end of this to try to use the images
  $(this).css("background-color", "#4f9487");

  $(this).html('<img src="' + (charToDisplay === 'X'? charToDisplay = xPlayerImg : oPlayerImg) + '">');


  //this adds X or O to the data of the cell that was clicked on
  $(this).data('populatedCell', charToDisplay);

  var attrId = $(this).attr('id');


  // Create a global array to represent the state of the board.

  board[attrId] = charToDisplay;

  console.log(board);

  //Send board to firebase
  gameRef.set({player: otherPlayer(player), waitingPlayer: gameAuth.uid, board: board});



  //If there is a winner, this will alert the winner and start a new game
  if (getWinner(charToDisplay)) {
      alert('The winner is ' + charToDisplay + '!');
      console.log('The winner is ' + charToDisplay + '!');
      newGame();

      //This keeps score
      if (charToDisplay === 'X') {
        xWins += 1;
        $('#xScore').text(xWins);
      }

      else if (charToDisplay === 'O') {
        oWins +=1;
        $('#oScore').text(oWins);
      }

  //This alert if there is a tie and will fire off a new game
  } else if (isATie()) {
      alert('It is a tie!');
      newGame();
  } else{
    console.log('Neither win nor tie')
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
  if (clickCounter >= 9){
    tie = true;
    }
    return tie;
  };

//This function resets the game
function newGame(){
  $('.box_cell').empty();
  $('.box_cell').css("background-color", "transparent");
  $('.box_cell').data('populatedCell', '');
  board = [];
  clickCounter = 0;
};


});//End of document ready




// NameSpace---put all javascript inside of this namespace?
// var TicTacToe = TicTacToe || {};


