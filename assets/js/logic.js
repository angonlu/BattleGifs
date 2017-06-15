// var iMax = 20;
// var jMax = 10;
// var f = new Array();

// for (i=0;i<iMax;i++) {
//  f[i]=new Array();
//  for (j=0;j<jMax;j++) {
//   f[i][j]=0;
//  }
// }


    var twoDimensionalArrayOfLetters = [
        ['a1', 'b1', 'c1', 'd1'],
        ['a2', 'b2', 'c2', 'd2'],
        ['a3', 'b3', 'c3', 'd3'],
        ['a4', 'b4', 'c4', 'd4']
    ];

    var sOut="<table>";
for (var y=0; y<twoDimensionalArrayOfLetters.length; y++ ) {        // for each row
    sOut += "<tr>";
    for (var x=0; x<twoDimensionalArrayOfLetters[y].length; x++ ) { // for each clm
        sOut += "<td>" + twoDimensionalArrayOfLetters[y][x] + "</td>";
        
    }
    sOut += "</tr>";
}
sOut += "</table>";
console.log(sOut)

$("body").append(sOut)