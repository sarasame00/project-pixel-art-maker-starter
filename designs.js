
const submitSize = document.getElementById('submitSize');
let canvas = document.getElementById('pixelCanvas');

//loop for creating initial grid
for(var y = 1; y <= 20; y++){ 
    var newRow = canvas.insertRow();
    newRow;
    for(var x= 1; x <= 20; x++){
        var newCell = newRow.insertCell();
        if(x%2 == 0){
            newCell.style.backgroundColor = '#f08000'; //coloring initial griz
        };
    };
};

//listen to the submit size event
submitSize.addEventListener('click', function(event){
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

//listen to the pick color event
canvas.addEventListener('click', pickColor);

//Function for changing pixels colors.
function pickColor(evt){
    let color = document.getElementById('colorPicker').value;
    evt.target.style.backgroundColor = color
}
