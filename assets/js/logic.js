// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC5JhJbodE2o9gJ7Rhql9R4mWpRS_7bEPg",
    authDomain: "cazzle-e4640.firebaseapp.com",
    databaseURL: "https://cazzle-e4640.firebaseio.com",
    projectId: "cazzle-e4640",
    storageBucket: "cazzle-e4640.appspot.com",
    messagingSenderId: "284034470468"
  };
  firebase.initializeApp(config);
 
var database = firebase.database();
var waterGif = 'https://media3.giphy.com/media/xT0GqcCJJJH12hJvGM/giphy.gif';
var missGif = 'https://media3.giphy.com/media/xT0GqcCJJJH12hJvGM/giphy.gif';
var shipCount1 = 0;
var shipCount2 =0;
var hits = 0;
var misses = 0;
var currentPlayers = "null";
var currentTurn = "null";
var player1 = "null";
var player2 = "null";
var playerCounter = 0;
// var playerOneExists = "null";
// var playerTwoExists = "null";
var playersRef = database.ref("players");

  
var playerOneArray = [
        [
            {col: 'a', hasShip: false, hit: "", miss: missGif},
            {col: 'b', hasShip: false},
            {col: 'c', hasShip: false},
            {col: 'c', hasShip: false}
        ],
        [
            {col: 'a', hasShip: false},
            {col: 'b', hasShip: false},
            {col: 'c', hasShip: false},
            {col: 'c', hasShip: false}
        ],
        [
            {col: 'a', hasShip: false},
            {col: 'b', hasShip: false},
            {col: 'c', hasShip: false},
            {col: 'c', hasShip: false}
        ],
        [
            {col: 'a', hasShip: false},
            {col: 'b', hasShip: false},
            {col: 'c', hasShip: false},
            {col: 'c', hasShip: false}
        ]
    ];

    var playerTwoArray = [
        [
            {col: 'a', hasShip: false, hit: "", miss: missGif},
            {col: 'b', hasShip: false},
            {col: 'c', hasShip: false},
            {col: 'c', hasShip: false}
        ],
        [
            {col: 'a', hasShip: false},
            {col: 'b', hasShip: false},
            {col: 'c', hasShip: false},
            {col: 'c', hasShip: false}
        ],
        [
            {col: 'a', hasShip: false},
            {col: 'b', hasShip: false},
            {col: 'c', hasShip: false},
            {col: 'c', hasShip: false}
        ],
        [
            {col: 'a', hasShip: false},
            {col: 'b', hasShip: false},
            {col: 'c', hasShip: false},
            {col: 'c', hasShip: false}
        ]
    ];
database.ref().set(""); //need a "NewGame" button that will allow anyone to reset the game. 
// ^^^ this causes firebase to refresh everytime the player refreshes or opens new page. Need to make it so that it renders the updated board.  
// database.ref().push(playerOneArray);
// database.ref().push(playerTwoArray);

$(document).on("click", ".joinBtn", function(event){
	event.preventDefault();
	database.ref().once("value", function(snapshot){
		playerCounter = snapshot.numChildren();
		console.log(snapshot.numChildren());
})

if(playerCounter === 0){
	database.ref("playerOne").set(playerOneArray);
	sessionStorage.setItem("player", "playerOne");
	// When player joins, hides join button to prevent from user using the same machine to hit the join button again. 
	if (sessionStorage.getItem("player") === "playerOne"){
		$(".joinBtn").hide();
		
	}
}

if(playerCounter === 1){
	database.ref("playerTwo").set(playerTwoArray);
	sessionStorage.setItem("player", "playerTwo");
	if (sessionStorage.getItem("player") === "playerTwo"){
		$(".joinBtn").hide();
	}
	
}

if (playerCounter === 2) {
	alert("Cannot Join")
}

})

// database.ref().set({
// 	playerOne: playerOneArray,
// 	playerTwo: playerTwoArray
// })

// When something changes in firebase, capture changes, and render board
database.ref().on("value", function(newSnap){
newSnap.val();
var playerOneArray = newSnap.val();
var playerTwoArray = newSnap.val();

renderBoard();
renderOppBoard();
})

// Renders board onto page, each tile with a waterGif image.
function renderBoard(){

var board="<table border=2>";

for (var y=0; y<playerOneArray.length; y++ ) {        // for each row
    board += "<tr>";
    for (var x=0; x<playerOneArray[y].length; x++ ) { // for each clm
        var waterGif = 'https://media3.giphy.com/media/xT0GqcCJJJH12hJvGM/giphy.gif';
        if(playerOneArray[y][x].hasShip) {
          waterGif = playerOneArray[y][x].hasShip;
        }
            board += "<td "+ "class='p-1'" +
            " data-row='"+ y + "'"+
            " data-col='"+ x + "'>" +
               " <img src='" +
               waterGif +
               "' /></td>";
    }
    board += "</tr>";
}
board += "</table>";
$("#player-one-board").html(board);
}

function renderOppBoard(){
    var board="<table border=2>";

for (var y=0; y<playerTwoArray.length; y++ ) {        // for each row
    board += "<tr>";
    for (var x=0; x<playerTwoArray[y].length; x++ ) { // for each clm
        var waterGif = 'https://media3.giphy.com/media/xT0GqcCJJJH12hJvGM/giphy.gif';
        if(playerTwoArray[y][x].hasShip) {
          waterGif = playerTwoArray
       [y][x].hasShip;
        }
            board += "<td "+ "class='p-2'" +
            " data-row='"+ y + "'"+
            " data-col='"+ x + "'>" +
               " <img src='" +
               waterGif +
               "' /></td>";
    }
    board += "</tr>";
}
board += "</table>";
$("#opponent-board").html(board);

}

function setBoard1 (){
        
}
// $(document).ready(function() {
        $(document).on("click", ".p-1", function(event) {
            event.preventDefault();
            $(this).attr("data-ship", "ship");
        // On Click, captures the coordinates of the tile clicked.
        
            var row = $(this).attr("data-row");
            // console.log(row);
            var col = $(this).attr("data-col");
            // console.log(col);
            var ship = "https://media.giphy.com/media/rbMT3rRP5vybm/giphy.gif";
            shipCount1++;
            if (shipCount1 === 2){
                setBoard1();
                // shipCount = nA
            }
            else if (shipCount1 > 2) {
            	return;
            }
            // Changes the value of that specific part of the array
            playerOneArray[row][col].hasShip=ship;
  
            // sends changes to firebase.
            database.ref('playerOne').set(playerOneArray);
 

})

function setBoard2 (){
        
}
// $(document).ready(function() {
        $(document).on("click", ".p-2", function(event) {
            event.preventDefault();
            $(this).attr("data-ship", "ship");
        // On Click, captures the coordinates of the tile clicked.
        
            var row = $(this).attr("data-row");
            // console.log(row);
            var col = $(this).attr("data-col");
            // console.log(col);
            var ship = "https://media.giphy.com/media/rbMT3rRP5vybm/giphy.gif";
            shipCount2++;

            if (shipCount2 === 2){
                setBoard2();
                // shipCount = nAn               
            }
            else if ( shipCount2 > 2){
            	return;
            }
            // Changes the value of that specific part of the array
            playerTwoArray[row][col].hasShip=ship;

            // sends changes to firebase.
            database.ref('playerTwo').set(playerTwoArray);

     
})

// function playGame() {
// 	$(".p-1").click(function){
// 		toggle()

// }        

// //Distinguishing Player 1 and Player 2 //--------------------------------------
// //onclick the join button increment player count
// //playerCounter++ 
// if (playerCounter === 1) {
// 	sessionStorage.setItem('playerNum', 1);

// }

// else if (playerCounter === 2) {
// 	sessionStorage.setItem('playerNum', 2);
// }




// function getInGame() {
//     //commenting out for when if we need to implement chat        
//     // var chatData = database.ref("/chat/" + Date.now());

//     if (currentPlayers < 2) {

//         if(playerOneExists) {

//             playerNum = 2;
//         }
//         else{
//             playerNum = 1;
//         }
//     //Creates key based on player number
//     playerRef = database.ref("/players/" + playerNum);

//     //Creates player object
//     playerRef.set({
//         name: username,
//         wins: 0,
//         loss: 0
//     });

//     } 
// }
// });


// arrayObjects[0][0].hasShip = "https://media0.giphy.com/media/3oz8xRQiRlaS1XwnPW/giphy.gif";

    // database.ref().set(arrayObjects);

    // database.ref().on("value", function(snap){
    //  console.log()
    // })
// EVERY TIME THE USER CLICKS ON AN IMAGE, STORE THE VALUE ON A VARIABLE, CHANGE IT HERE
// //    arrayObjects[0][0].hasShip = "https://media0.giphy.com/media/3oz8xRQiRlaS1XwnPW/giphy.gif";
// REPLACE WITH [X]AND[Y]

// boat gif https://media.giphy.com/media/rbMT3rRP5vybm/giphy.gif
// Boat gif image https://media0.giphy.com/media/3oz8xRQiRlaS1XwnPW/giphy.gif
// waterGif gif https://media3.giphy.com/media/xT0GqcCJJJH12hJvGM/giphy.gif
