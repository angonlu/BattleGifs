// Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyC5JhJbodE2o9gJ7Rhql9R4mWpRS_7bEPg",
  //   authDomain: "cazzle-e4640.firebaseapp.com",
  //   databaseURL: "https://cazzle-e4640.firebaseio.com",
  //   projectId: "cazzle-e4640",
  //   storageBucket: "cazzle-e4640.appspot.com",
  //   messagingSenderId: "284034470468"
  // };
  // firebase.initializeApp(config);
  var config = {
    apiKey: "AIzaSyAIk5zTDk0Nila3OqJ_AL-5TPviPnso14A",
    authDomain: "in-class-38a0b.firebaseapp.com",
    databaseURL: "https://in-class-38a0b.firebaseio.com",
    projectId: "in-class-38a0b",
    storageBucket: "in-class-38a0b.appspot.com",
    messagingSenderId: "155278234783"
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
var isPlaying = false;
// var playerOneExists = "null";
// var playerTwoExists = "null";
var playersRef = database.ref("players");
var playerOneArray = [];
var playerTwoArray = [];
  
var playerOneArrayDefault = [
        [
            {col: 'a', hasShip: false,  hit: ""},
            {col: 'b', hasShip: false,  hit: ""},
            {col: 'c', hasShip: false,  hit: ""},
            {col: 'c', hasShip: false,  hit: ""} 
        ],
        [
            {col: 'a', hasShip: false, hit: "", miss: true},
            {col: 'b', hasShip: false, hit: "", miss: true},
            {col: 'c', hasShip: false, hit: "", miss: true},
            {col: 'c', hasShip: false, hit: "", miss: true}
        ],
        [
            {col: 'a', hasShip: false, hit: "", miss: true},
            {col: 'b', hasShip: false, hit: "", miss: true},
            {col: 'c', hasShip: false, hit: "", miss: true},
            {col: 'c', hasShip: false, hit: "", miss: true}
        ],
        [
            {col: 'a', hasShip: false, hit: "", miss: true},
            {col: 'b', hasShip: false, hit: "", miss: true},
            {col: 'c', hasShip: false, hit: "", miss: true},
            {col: 'c', hasShip: false, hit: "", miss: true}
        ],
    ];

    var playerTwoArrayDefault = [
<<<<<<< HEAD
        [
=======
		[
>>>>>>> 6a03b9d284db802798562986ec12fefd44841b0d
            {col: 'a', hasShip: false,  hit: "", miss: true},
            {col: 'b', hasShip: false,  hit: "", miss: true},
            {col: 'c', hasShip: false,  hit: "", miss: true},
            {col: 'c', hasShip: false,  hit: "", miss: true}, 
        ],
        [
            {col: 'a', hasShip: false, hit: "", miss: true},
            {col: 'b', hasShip: false, hit: "", miss: true},
            {col: 'c', hasShip: false, hit: "", miss: true},
            {col: 'c', hasShip: false, hit: "", miss: true},
        ],
        [
            {col: 'a', hasShip: false, hit: "", miss: true},
            {col: 'b', hasShip: false, hit: "", miss: true},
            {col: 'c', hasShip: false, hit: "", miss: true},
            {col: 'c', hasShip: false, hit: "", miss: true},
        ],
        [
            {col: 'a', hasShip: false, hit: "", miss: true},
            {col: 'b', hasShip: false, hit: "", miss: true},
            {col: 'c', hasShip: false, hit: "", miss: true},
            {col: 'c', hasShip: false, hit: "", miss: true}
        ]
    ];
database.ref().set(""); //need a "NewGame" button that will allow anyone to reset the game. 
// ^^^ this causes firebase to refresh everytime the player refreshes or opens new page. Need to make it so that it renders the updated board.  
// database.ref().push(playerOneArray);
// database.ref().push(playerTwoArray);

$(document).on("click", ".joinBtn", function(event){
<<<<<<< HEAD
    event.preventDefault();
    database.ref().once("value", function(snapshot){
        playerCounter = snapshot.numChildren();
        console.log(snapshot.numChildren());
        
})

if(playerCounter === 0){
    database.ref("playerOne").set(playerOneArrayDefault);
    sessionStorage.setItem("player", "playerOne");
    // When player joins, hides join button to prevent from user using the same machine to hit the join button again. 
    if (sessionStorage.getItem("player") === "playerOne"){
        $(".joinBtn").hide();   
    }
}

if(playerCounter === 1){
    database.ref("playerTwo").set(playerTwoArrayDefault);
    sessionStorage.setItem("player", "playerTwo");
    if (sessionStorage.getItem("player") === "playerTwo"){
        $(".joinBtn").hide();
    }   
}

if (playerCounter === 2) {
    sessionStorage.setItem("player", "");
    alert("Cannot Join")
=======
	event.preventDefault();
	database.ref().once("value", function(snapshot){
		playerCounter = snapshot.numChildren();
		console.log(snapshot.numChildren());
		
})

if(playerCounter === 0){
	database.ref("playerOne").set(playerOneArrayDefault);
	sessionStorage.setItem("player", "playerOne");
	// When player joins, hides join button to prevent from user using the same machine to hit the join button again. 
	if (sessionStorage.getItem("player") === "playerOne"){
		$(".joinBtn").hide();	
	}
}

if(playerCounter === 1){
	database.ref("playerTwo").set(playerTwoArrayDefault);
	sessionStorage.setItem("player", "playerTwo");
	if (sessionStorage.getItem("player") === "playerTwo"){
		$(".joinBtn").hide();
	}	
}

if (playerCounter === 2) {
	sessionStorage.setItem("player", "");
	alert("Cannot Join")
>>>>>>> 6a03b9d284db802798562986ec12fefd44841b0d

}

})

// database.ref().set({
<<<<<<< HEAD
//  playerOne: playerOneArray,
//  playerTwo: playerTwoArray
=======
// 	playerOne: playerOneArray,
// 	playerTwo: playerTwoArray
>>>>>>> 6a03b9d284db802798562986ec12fefd44841b0d
// })

// When something changes in firebase, capture changes, and render board
database.ref().on("value", function(newSnap){
newSnap.val();

<<<<<<< HEAD
  playerOneArrayDefault = newSnap.val().playerOne;
  playerTwoArrayDefault = newSnap.val().playerTwo;
=======
  playerOneArray = newSnap.val().playerOne;
  playerTwoArray = newSnap.val().playerTwo;
>>>>>>> 6a03b9d284db802798562986ec12fefd44841b0d

// search playerOneArray to see if they placed 2 ships
var numP1Ships = 0;
var numP2Ships = 0;
<<<<<<< HEAD
for(var i = 0; i < playerOneArray.length; i++) {
    for(var j = 0; j < playerOneArray[i].length; j++) {
        if(playerOneArray[i][j].hasShip) {
            numP1Ships++;
        }
    }
}
if (numP1Ships === 2 && numP2Ships === 2 && !isPlaying) {
    isPlaying = true;
    playGame();


    
=======
for(var i =0; i < playerOneArray.length; i++) {
	for(var j = 0; j <playerOneArray[i].length; j++) {
		if(playerOneArray[i][j].hasShip) {
			numP1Ships++;
		}
	}
}
if (numP1Ships === 2 && numP2Ships === 2 && !isPlaying) {
	isPlaying = true;
	playGame();


	
>>>>>>> 6a03b9d284db802798562986ec12fefd44841b0d
}


renderBoard();
renderOppBoard();
})

database.ref('currentPlayer').on("value", function(newSnap){
console.log(newSnap.val())
<<<<<<< HEAD
})  
=======
})	
>>>>>>> 6a03b9d284db802798562986ec12fefd44841b0d

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

// function setBoard1 (){
        
// }
// $(document).ready(function() {
        $('body.newGame').on("click", ".p-1", function(event) {
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
                // setBoard1();
                
            }
            else if (shipCount1 > 2) {
                return;
            }

            if (sessionStorage.getItem("player") === "playerOne"){
               playerOneArray[row][col].hasShip=ship;
  
                // sends changes to firebase.
                database.ref('playerOne').set(playerOneArray);
        
            }

            if (sessionStorage.getItem("player") === "playerOne"){
			   playerOneArray[row][col].hasShip=ship;
  
            	// sends changes to firebase.
            	database.ref('playerOne').set(playerOneArray);
		
			}
            // Changes the value of that specific part of the array
         
 

})

// function setBoard2 (){
        
// }
// $(document).ready(function() {
        $('body.newGame').on("click", ".p-2", function(event) {
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
                // setBoard2();
                              
            }
            else if ( shipCount2 > 2){
                return;
            }
<<<<<<< HEAD
            if (sessionStorage.getItem("player") === "playerTwo"){
            
            playerTwoArray[row][col].hasShip=ship;
=======
 			if (sessionStorage.getItem("player") === "playerTwo"){
			
			playerTwoArray[row][col].hasShip=ship;
>>>>>>> 6a03b9d284db802798562986ec12fefd44841b0d

            // sends changes to firebase.
            database.ref('playerTwo').set(playerTwoArray);

<<<<<<< HEAD
            }   
=======
			}	
>>>>>>> 6a03b9d284db802798562986ec12fefd44841b0d
            // Changes the value of that specific part of the array
            
     
})

function playGame() {
<<<<<<< HEAD
    $('body').removeClass('newGame');

    $(document).on("click", ".p-2",  function(event) {
        event.preventDefault();
        console.log("attack");

        $(this).attr("data-hit", "hit");

        var row = $(this).attr("data-row");
=======
	$('body').removeClass('newGame');

	$(document).on("click", ".p-2",  function(event) {
		event.preventDefault();
		console.log("attack");

		$(this).attr("data-hit", "hit");

		var row = $(this).attr("data-row");
>>>>>>> 6a03b9d284db802798562986ec12fefd44841b0d
        
        var col = $(this).attr("data-col");
         
        var hit = "https://media0.giphy.com/media/BarqgIZ0PdkQg/giphy.gif"; 

        if (sessionStorage.getItem("player") === "playerOne"){
<<<<<<< HEAD
            
            if(playerTwoArray[row][col].hasShip) {

                playerTwoArray[row][col].hasShip=hit;   
            }

            // sends changes to firebase.
            database.ref('playerOne').set(playerTwoArray);

            }
    })
=======
			
			if(playerTwoArray[row][col].hasShip) {

				playerTwoArray[row][col].hasShip=hit;	
			}

            // sends changes to firebase.
            database.ref('playerTwo').set(playerTwoArray);

			}
	})
>>>>>>> 6a03b9d284db802798562986ec12fefd44841b0d
}

// players have now placed their ships. This function is the game logic and allows for players to switch off and take turns to select squares
// Need to be able to distinguish which phase the game this is. 
// if (both players have setShips), then run playGame();

// If page refeshes at any time in the game, should be able to call on firebase and keep playing from wherever game left off. ******



// Player 1 interacts with Player 2 board. Player 2 interacts with Player 1 board. 
<<<<<<< HEAD
$(document).on("click",     )
=======
$(document).on("click", 	)
>>>>>>> 6a03b9d284db802798562986ec12fefd44841b0d

// If Player 1 selects a square that has a ship, mark as hit - update to html to reflect hit.
// If Player 1 selects a square that does not have a ship, mark as missed - update on html to reflect miss.
// After Player 1 has selected a square. Let Player 2 select a square.
// Be able to track who's turn it is. Store player "turns" in firebase. Every a player selects a square, update firebase each time I update the variable, then render updated board. Need to be notified and moves need to work.  
// If all ships are selected, alert player 1 wins.

<<<<<<< HEAD
// Allow reset game via a "newGame" button that will reset firebase changes //database.ref().set(""); 
=======
// Allow reset game via a "newGame"	button that will reset firebase changes //database.ref().set(""); 
>>>>>>> 6a03b9d284db802798562986ec12fefd44841b0d

// }

// if (shipHits === 2) {
<<<<<<< HEAD
//  winGame();
//  alert("You Win!");
// }    
=======
// 	winGame();
// 	alert("You Win!");
// } 	
>>>>>>> 6a03b9d284db802798562986ec12fefd44841b0d

// boat gif https://media.giphy.com/media/rbMT3rRP5vybm/giphy.gif
// Boat gif image https://media0.giphy.com/media/3oz8xRQiRlaS1XwnPW/giphy.gif
// waterGif gif https://media3.giphy.com/media/xT0GqcCJJJH12hJvGM/giphy.gif