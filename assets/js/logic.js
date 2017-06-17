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
function renderBoard(){
var arrayObjects = [
        [
            {col: 'a', hasShip: false},
            {col: 'b', hasShip: false},
            {col: 'c', hasShip: false}
        ],
        [
            {col: 'a', hasShip: false},
            {col: 'b', hasShip: false},
            {col: 'c', hasShip: false}
        ],
        [
            {col: 'a', hasShip: false},
            {col: 'b', hasShip: false},
            {col: 'c', hasShip: false}
        ],
        [
            {col: 'a', hasShip: false},
            {col: 'b', hasShip: false},
            {col: 'c', hasShip: false}
        ]
    ];
database.ref().set(arrayObjects);








var board="<table border=2>";

for (var y=0; y<arrayObjects.length; y++ ) {        // for each row
    board += "<tr>";
    for (var x=0; x<arrayObjects[y].length; x++ ) { // for each clm
        var image = 'https://media3.giphy.com/media/xT0GqcCJJJH12hJvGM/giphy.gif';
        if(arrayObjects[y][x].hasShip) {
          image = arrayObjects[y][x].hasShip;
        }
            board += "<td "+ "class='board'" +
            " data-col='"+ y + "'"+
            " data-row='"+ x + "'>" +
               " <img src='" +
               image +
               "' /></td>";
    }
    board += "</tr>";
}
board += "</table>";
$("#container").html(board);
}
database.ref().on("value", function(newSnap){
    newSnap.val();
var arrayObjects = newSnap.val();

renderBoard();
})
// renderBoard();
$(document).ready(function() {
    // renderBoard();

    $("td").on("click", function() {
        // On Click, captures the coordinates of the tile clicked.
    var col = $(this).attr("data-row");
    console.log(col);
    var row = $(this).attr("data-col");
    console.log(row);
    var ship = "https://media0.giphy.com/media/3oz8xRQiRlaS1XwnPW/giphy.gif"
    // Changes the value of that specific part of the array
    arrayObjects[row][col].hasShip=ship;
    // sends changes to firebase.
    database.ref().set(arrayObjects);
    

    
});
})

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







