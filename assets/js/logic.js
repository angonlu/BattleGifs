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
var missGif = 'https://media2.giphy.com/media/6trotNE8bTgpW/giphy.gif';
var shipCount = 0;
var hits = 0;
var misses = 0;
console.log(shipCount)
  
var player-one-array = [
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

    var player-two-array = [
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
database.ref().push(player-one-array);
database.ref().push(player-two-array);

// When something changes in firebase, capture changes, and render board
database.ref().on("value", function(newSnap){
newSnap.val();
var player-one-array = newSnap.val();

renderBoard();
renderOppBoard();
})

// Renders board onto page, each tile with a waterGif image.
function renderBoard(){

var board="<table border=2>";

for (var y=0; y<player-one-array.length; y++ ) {        // for each row
    board += "<tr>";
    for (var x=0; x<player-one-array[y].length; x++ ) { // for each clm
        var waterGif = 'https://media3.giphy.com/media/xT0GqcCJJJH12hJvGM/giphy.gif';
        if(player-one-array[y][x].hasShip) {
          waterGif = player-one-array[y][x].hasShip;
        }
            board += "<td "+ "class='tile'" +
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

for (var y=0; y<player-two-array.length; y++ ) {        // for each row
    board += "<tr>";
    for (var x=0; x<player-two-array[y].length; x++ ) { // for each clm
        var waterGif = 'https://media3.giphy.com/media/xT0GqcCJJJH12hJvGM/giphy.gif';
        if(arrayObjects[y][x].hasShip) {
          waterGif = player-two-array[y][x].hasShip;
        }
            board += "<td "+ "class='tile'" +
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
        alert("Get ready for battle!");
        shipCount = null;

}
    // $(document).ready(function() {
        $(document).on("click", "td", function(event) {
            event.preventDefault();
            $(this).attr("data-ship", "ship");
        // On Click, captures the coordinates of the tile clicked.
        
            var row = $(this).attr("data-row");
            // console.log(row);
            var col = $(this).attr("data-col");
            // console.log(col);
            var ship = "https://media0.giphy.com/media/3oz8xRQiRlaS1XwnPW/giphy.gif";
            shipCount++;
            if (shipCount === 2){
                startGame();
            }
            // Changes the value of that specific part of the array
            player-one-array[row][col].hasShip=ship;
            arrayObjects
            // sends changes to firebase.
            database.ref().set(arrayObjects);

            

})
// });


// arrayObjects[0][0].hasShip = "https://media0.giphy.com/media/3oz8xRQiRlaS1XwnPW/giphy.gif";

    // database.ref().set(arrayObjects);

    // database.ref().on("value", function(snap){
    //  console.log()
    // })
// EVERY TIME THE USER CLICKS ON AN IMAGE, STORE THE VALUE ON A VARIABLE, CHANGE IT HERE
// //    arrayObjects[0][0].hasShip = "https://media0.giphy.com/media/3oz8xRQiRlaS1XwnPW/giphy.gif";
// REPLACE WITH [X]AND[Y]

// Boat gif image https://media0.giphy.com/media/3oz8xRQiRlaS1XwnPW/giphy.gif
// waterGif gif https://media3.giphy.com/media/xT0GqcCJJJH12hJvGM/giphy.gif







