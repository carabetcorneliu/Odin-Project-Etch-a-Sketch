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
}

buildGrid(16);

// Mouse over eventListener for trail effect
const gridElements = document.querySelectorAll('.columnElement');

gridElements.forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.classList.add('gridTrail');
    });
});
