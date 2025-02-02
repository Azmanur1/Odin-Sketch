



function generateGrid()
{
    const gridSizeInput = document.getElementById("gridSizeInput");
    let size = gridSizeInput.value || gridSizeInput.defaultValue;
    size = parseInt(size);
    if(isNaN(size) || size<2 || size>100){
        alert("Please Enter number between 2 and 100");
        return;
    }

    const container = document.getElementById("gridContainer");
    container.innerHTML = '';
    const squareSize = 960/size+'px';
    console.log(squareSize);
    for(let i=0;i<size*size;i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squareSize;
        square.style.height = squareSize;
        
        square.addEventListener("mouseover", () => {
            if(square.classList.contains(".hovered")){
                square.classList.remove("hovered")
            }
            else{
                square.classList.add("hovered");
            }
            
            
        });

        container.appendChild(square);
        
    }
}

function reset() 
{
    document.querySelectorAll(".hovered").forEach(item => {
        item.classList.remove("hovered");
    });
}