const container = document.querySelector('#container');

//function to build the square grid with X row/columns
function buildGrid(x) {
    for (let i = 0; i < x; i++) {
        const row = document.createElement('div');
        row.classList.add('rowElement');
        container.appendChild(row);
    }


    const rows = document.querySelectorAll('.rowElement');
    rows.forEach((row) => {
        for (let i = 0; i < x; i++) {
            const column = document.createElement('div');
            column.classList.add('columnElement');
            row.appendChild(column);
        }
    });
    trailDrawer();
}



// EventListener for buttons Resize/ResetTrail grid
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === "newGrid") {
            let gridSize = prompt("Enter squares number per side (max 100): ", 16);
            while (gridSize < 1 || gridSize > 100) {
                gridSize = prompt("Number 1-100 allowed only: ");
            }
            container.innerHTML = "";
            buildGrid(gridSize);

        } else if (button.id === "resetGrid") {
            container.innerHTML = "";
            buildGrid(16);
        }
    });
});

// random color function
function generateRandomColor(){
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`;
}

// Mouseover eventListener for trail effect => transformed to function
// and moved listener to buildGrid function
let trailDrawer = () => {
    const gridElements = document.querySelectorAll('.columnElement');

    gridElements.forEach((element) => {
        element.addEventListener('mouseover', () => {
//            element.classList.add('gridTrail');        // before extra credit version
            element.style.cssText = 'background-color: ' + generateRandomColor() + ';';
 //           element.style.opacity += '0.1';
        });
    });
}


buildGrid(16);
