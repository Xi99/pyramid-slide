


var heightElem = document.getElementById("slider");

var formElem = document.getElementById("draw-form");

var symbolElem= document.getElementById("symbol");

// What was I trying to do here!
function getSymbol(symbol) {  
    var value = symbolElem.value;
    return value;
}


// Is this way better than what I got going on?
symbolElem.onchange = function(event) {
    symbolStr = symbolElem.value;
    getSymbol(symbolStr);

}


// set a handler function for the form's submission event
heightElem.oninput = function(event) {

   
    // figure out the height the user typed
    heightStr = heightElem.value;
    height = parseInt(heightStr);

    drawPyramid(height);
}

function drawPyramid(height) {

    
    document.getElementById("pyramid").innerHTML = "";
   
    var symbolElem= document.getElementById("symbol");
    symbolStr = symbolElem.value;
    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbolStr;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("div");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
