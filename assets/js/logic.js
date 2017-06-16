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

    // // var twoDimensionalArrayOfLetters = [
    // //     ['a1', 'b1', 'c1', 'd1'],
    // //     ['a2', 'b2', 'c2', 'd2'],
    // //     ['a3', 'b3', 'c3', 'd3'],
    // //     ['a4', 'b4', 'c4', 'd4']
    // ];
 	   var arrayObjects = [
        [
            {col: 'a', hasShip: false},
            {col: 'b', hasShip: false},
            {col: 'c', hasShip: false}
        ],
        [
            {col: 'a', hasShip: false},
            {col: 'b', hasShip: "https://media0.giphy.com/media/3oz8xRQiRlaS1XwnPW/giphy.gif"},
            {col: 'c', hasShip: false}
        ],
        [
            {col: 'a', hasShip: "https://media0.giphy.com/media/3oz8xRQiRlaS1XwnPW/giphy.gif"},
            {col: 'b', hasShip: false},
            {col: 'c', hasShip: false}
        ],
        [
            {col: 'a', hasShip: "https://media0.giphy.com/media/3oz8xRQiRlaS1XwnPW/giphy.gif"},
            {col: 'b', hasShip: false},
            {col: 'c', hasShip: false}
        ]
    ];

database.ref().set(arrayObjects);    

//    arrayObjects[0][0].hasShip = "https://media0.giphy.com/media/3oz8xRQiRlaS1XwnPW/giphy.gif";




    var board="<table border=2>";
for (var y=0; y<arrayObjects.length; y++ ) { // for each row
    board += "<tr>";
    for (var x=0; x<arrayObjects[y].length; x++ ) { // for each clm
    	if(arrayObjects[y][x].hasShip) {
    		board += "<td data-col="+ x +">" + arrayObjects[y][x].col + "<img src='"+arrayObjects[y][x].hasShip+"'/></td>";
    	} else {
    		board += "<td>" + arrayObjects[y][x].col + " <img src='https://media3.giphy.com/media/xT0GqcCJJJH12hJvGM/giphy.gif' /></td>";
    	}
        
// EVERY TIME THE USER CLICKS ON AN IMAGE, STORE THE VALUE ON A VARIABLE, CHANGE IT HERE
// //    arrayObjects[0][0].hasShip = "https://media0.giphy.com/media/3oz8xRQiRlaS1XwnPW/giphy.gif";
// REPLACE WITH [X]AND[Y]
        
    }
    board += "</tr>";
}
board += "</table>";
console.log(board)

$("body").append(board)


$("img").on("click", function(event){

	arrayObjects[0][0].hasShip = "https://media0.giphy.com/media/3oz8xRQiRlaS1XwnPW/giphy.gif";

	database.ref().set(arrayObjects);

	database.ref().on("value", function(snap){
		console.log()
	})
});








