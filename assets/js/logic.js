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
var water = 'https://media3.giphy.com/media/xT0GqcCJJJH12hJvGM/giphy.gif';
var setShipcount = 0;
  
var arrayObjects1 = [
        [
            {col: 'a1', hasShip: false},
            {col: 'b1', hasShip: false},
            {col: 'c1', hasShip: false}
        ],
        [
            {col: 'a1', hasShip: false},
            {col: 'b1', hasShip: false},
            {col: 'c1', hasShip: false}
        ],
        [
            {col: 'a1', hasShip: false},
            {col: 'b1', hasShip: false},
            {col: 'c1', hasShip: false}
        ],
        [
            {col: 'a1', hasShip: false},
            {col: 'b1', hasShip: false},
            {col: 'c1', hasShip: false}
        ]
    ];
database.ref().set(arrayObjects);
// When something changes in firebase, capture changes, and render board
            database.ref().on("value", function(newSnap){
              newSnap.val();
            var arrayObjects = newSnap.val();

            renderBoard();
});

var arrayObjects2 = [
        [
            {col: 'a2', hasShip: false},
            {col: 'b2', hasShip: false},
            {col: 'c2', hasShip: false}
        ],
        [
            {col: 'a2', hasShip: false},
            {col: 'b2', hasShip: false},
            {col: 'c2', hasShip: false}
        ],
        [
            {col: 'a2', hasShip: false},
            {col: 'b2', hasShip: false},
            {col: 'c2', hasShip: false}
        ],
        [
            {col: 'a2', hasShip: false},
            {col: 'b2', hasShip: false},
            {col: 'c2', hasShip: false}
        ]
    ];
database.ref().set(arrayObjects);
// When something changes in firebase, capture changes, and render board
            database.ref().on("value", function(newSnap){
              newSnap.val();
            var arrayObjects = newSnap.val();

            renderBoard();
});

// Renders board onto page, each tile with a water image.
function renderBoard(){

var board1="<table border=2>";

for (var y=0; y<arrayObjects1.length; y++ ) {        // for each row
    board1 += "<tr>";
    for (var x=0; x<arrayObjects1[y].length; x++ ) { // for each clm
        var water = 'https://media3.giphy.com/media/xT0GqcCJJJH12hJvGM/giphy.gif';
        if(arrayObjects1[y][x].hasShip) {
          water = arrayObjects1[y][x].hasShip;
        }
            board1 += "<td "+ "class='tile'" +
            " data-row='"+ y + "'"+
            " data-col='"+ x + "'>" +
               " <img src='" +
               water +
               "' /></td>";
    }
    board1 += "</tr>";
}
board1 += "</table>";

for (var y=0; y<arrayObjects.length; y++ ) {        // for each row
    board2 += "<tr>";
    for (var x=0; x<arrayObjects1[y].length; x++ ) { // for each clm
        var water = 'https://media3.giphy.com/media/xT0GqcCJJJH12hJvGM/giphy.gif';
        if(arrayObjects1[y][x].hasShip) {
          water = arrayObjects1[y][x].hasShip;
        }
            board += "<td "+ "class='tile'" +
            " data-row='"+ y + "'"+
            " data-col='"+ x + "'>" +
               " <img src='" +
               water +
               "' /></td>";
    }
    board += "</tr>";
}
board += "</table>";
$("body").html(board1);
$("body").html(board2);
}

// renderBoard();

    function startGame(){
        alert("Ready for Battle!");
    }





    // $(document).ready(function() {
        $(document).on("click", "td", function(event) {
            console.log(event)
        // On Click, captures the coordinates of the tile clicked.
            var row = $(this).attr("data-row");
            console.log(row);
            var col = $(this).attr("data-col");
            console.log(col);
            var ship = "https://media0.giphy.com/media/3oz8xRQiRlaS1XwnPW/giphy.gif"
            // Changes the value of that specific part of the array
            arrayObjects[row][col].hasShip=ship;
            // sends changes to firebase.
            database.ref().set(arrayObjects);

            setShipcount++

            if (setShipcount===2){ 
                    startGame();
                }
            

            
});


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
// water gif https://media3.giphy.com/media/xT0GqcCJJJH12hJvGM/giphy.gif