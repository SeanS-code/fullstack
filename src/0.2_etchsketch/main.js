function styling(box, squares) {
    size = Math.ceil((960/squares)) - 2
    box.style.height = size+"px"
    box.style.width = size+"px"
    box.style.border = "1px solid black"
}

function clearCheck() {
    let boxList = document.querySelectorAll('.hover')
    boxList.forEach((boxes) => {
        boxes.style.backgroundColor = ""
        shade = .2
    })
}

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        box = document.createElement('div');
        styling(box, size)
        box.classList.add('hover')
        display.appendChild(box);
    }

    let boxList = document.querySelectorAll('.hover')
    boxList.forEach(boxes => boxes.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = "rgba(0, 0, 0, " + shade +")"
        shade[boxes] += .5
    }))
}

function resetGrid() {
    gridsize = prompt("How many squares on one side? (less than 100)")
    if (gridsize === undefined || gridsize === "" || gridsize > 100 || gridsize < 0)
        resetGrid()

    let grid = document.querySelector('.container')
    while (grid.hasChildNodes())
        grid.removeChild(grid.firstChild)

    shade = .2
    createGrid(gridsize)
}

const display = document.querySelector('.container')
const changeGrid = document.querySelector('.sizing')
const clear = document.querySelector('.clear')

let shade = []
let gridsize = 16

createShadeArr(gridsize)
createGrid(gridsize)

clear.addEventListener("click", clearCheck)
changeGrid.addEventListener("click", resetGrid)
