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
var waterGif = 'https://media4.giphy.com/media/3oKIPaGG4PDQgQDFZe/giphy.gif';
var missGif = 'https://media1.giphy.com/media/KUcie8kMYmuek/giphy.gif';
var hitGif = 'https://media4.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif';

var hits = 0;
var misses = 0;
var player1 = "null";
var player2 = "null";
var playersRef = database.ref("players");
var shipCount = 0;
console.log(shipCount)
  
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
// database.ref().set("");
// database.ref().push(playerOneArray);
// database.ref().push(playerTwoArray);
database.ref().set({
    playerOne: playerOneArray,
    playTwo: playerTwoArray
})

// When something changes in firebase, capture changes, and render board
database.ref().on("value", function(newSnap){
newSnap.val();
var playerOneArray = newSnap.val();

renderBoard();
renderOppBoard();
})

// Renders board onto page, each tile with a waterGif image.
function renderBoard(){

var board="<table border=2>";

for (var y=0; y<playerOneArray.length; y++ ) {        // for each row
    board += "<tr>";
    for (var x=0; x<playerOneArray[y].length; x++ ) { // for each clm
        var waterGif = 'https://media1.giphy.com/media/KUcie8kMYmuek/giphy.gif';
        if(playerOneArray[y][x].hasShip) {
          waterGif = playerOneArray[y][x].hasShip;
        }
            board += "<td "+ "class='p-one'" +
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
        var waterGif = 'https://media1.giphy.com/media/KUcie8kMYmuek/giphy.gif';
        if(playerTwoArray[y][x].hasShip) {
          waterGif = playerTwoArray
       [y][x].hasShip;
        }
            board += "<td "+ "class='p-two'" +
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


function startGame (){
    $("#comments").html("Get Ready For Battle!")
        // getInGame();


}
    // $(document).ready(function() {
        $(document).on("click", ".p-one", function(event) {
            event.preventDefault();
            $(this).attr("data-ship", "ship");
        // On Click, captures the coordinates of the tile clicked.
            var row = $(this).attr("data-row");
            // console.log(row);
            var col = $(this).attr("data-col");
            // console.log(col);
            var ship = "https://media.giphy.com/media/rbMT3rRP5vybm/giphy.gif";
            shipCount++;
            if (shipCount === 2){
                startGame();
            }
            // Changes the value of that specific part of the array
            playerOneArray[row][col].hasShip=ship;
            // arrayObjects
            // sends changes to firebase.

            database.ref('playerOne').set(playerOneArray);
            // database.ref().set("")
            // database.ref().push(playerOneArray);

            // database.ref().set(playerTwoArray);

            

})
function getInGame() {
    //commenting out for when we need to implement chat        
    // var chatData = database.ref("/chat/" + Date.now());

    if (currentPlayers < 2) {

        if(playerOneExists) {

            playerNum = 2;
        }
        else{
            playerNum = 1;
        }
    //Creates key based on player number
    playerRef = database.ref("/players/" + playerNum);

    //Creates player object
    playerRef.set({
        name: username,
        wins: 0,
        loss: 0
    });

    } 
}
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







