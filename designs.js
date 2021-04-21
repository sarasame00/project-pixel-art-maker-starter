
const submitSize = document.getElementById('submitSize');
let canvas = document.getElementById('pixelCanvas');

//listen to the submit size event
submitSize.addEventListener('click', function(event){ //
    event.preventDefault();  
    let height = document.getElementById('inputHeight').value; //input value
    let width = document.getElementById('inputWidth').value; //input value    
    return makeGrid(height, width);
});

//Function for making the grid
function makeGrid(height, width) {
    canvas.innerHTML = ""; //clean canvas
    for(var y= 1; y <= width; y++){ //loop for creating griz
        var newRow = canvas.insertRow();
        newRow;
        for(var x= 1; x <= height; x++){
            newRow.insertCell();
        };
    };
};

