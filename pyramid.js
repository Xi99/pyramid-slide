/* function buildPyramid() {
    var pyra = document.getElementById("slider");
}   document.getElementById("pyramid").innerHTML = "test";
*/

//var input = document.querySelector('slider');
//input.addEventListener('input', drawPyramid());

var heightElem = document.getElementById("slider");

var formElem = document.getElementById("draw-form");
// set a handler function for the form's submission event
formElem.oninput = function(event) {

    // QUIZ
    // what happens if we don't do this?
    //event.preventDefault();

    // QUIZ
    // what happens if we don't do this?
    //clearError();

    // figure out the height the user typed
    heightStr = heightElem.value;
    height = parseInt(heightStr);

    drawPyramid(height);
}

function drawPyramid(height) {

    
    document.getElementById("pyramid").innerHTML = "";
   
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
            rowStr += "#";
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("div");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
