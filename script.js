let container = document.getElementById("container");

function getNumbers() {
    container.innerHTML = "";
    let colsNumber = document.getElementById("cols-input").value;
    let rowsNumber = document.getElementById("rows-input").value;
    createGrid(rowsNumber,colsNumber);
}


function createGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.innerText = (i+1);
        container.appendChild(cell).className = "grid-item change-color";
    }
    let item = document.getElementsByClassName("change-color");
    
    for (var j = 0; j < item.length; j++) {
        (function(x){
            item[x].addEventListener("mouseover", function changeColor() {
                item[x].setAttribute("style", "background-color : blue")
            });
            item[x].addEventListener("mouseout", function colorBack() {
                item[x].setAttribute("style", "background-color : white");
            });
        })(j)
        
    }

}











