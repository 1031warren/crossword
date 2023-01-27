//this function builds a 3 word crossword puzzle
function loadCrosswordPuzzle(){
    //this is the table on the html page
    var table = document.getElementById("puzzle");
    //an array that holds the words for the puzzle
    var arrWords = new Array("JavaScript", "cascade", "html");
    //this is the 2nd row on the table
   var tr =table.rows[1];

    // this prints out the first word with in the array on column two
    for (var i=0; i<arrWords[0].length; i++){
        //every time the loop runs, one needs to change a row 
    
       //this is the next column in the row 
        var cell = tr.cells [i];
        cell.innerText = arrWords[0][i];
    }
      
    //the command here prints out the second word with in the array qhich is also in column two
    for(var i=0; i<arrWords[1].length; i++){
        var trow = table.rows[i];
        var cell = trow.cells[1];
        cell.innerText = arrWords[1][i];
    }
    //finally here the the third word is printed in the tenth column     
    for(var i=0; i<arrWords[2].length; i++){
        var trow = table.rows[i];
        var cell = trow.cells[9];
        cell.innerText = arrWords[2][i];
    }






































}