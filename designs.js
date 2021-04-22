
const submitSize = document.getElementById('submitSize');
let canvas = document.getElementById('pixelCanvas');

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
    for(var y= 1; y <= height; y++){ //loop for creating grid
        var newRow = canvas.insertRow();
        for(var x= 1; x <= width; x++){
            newRow.insertCell();
        };
    };
};

//listen to the pick color event
canvas.addEventListener('click', function(event){
    if (event.target.nodeName === 'TD'){
        let color = document.getElementById('colorPicker').value;
        event.target.style.backgroundColor = color
    }
});

//initial grid
makeGrid(20, 20);
