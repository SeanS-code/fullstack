let gridsize = 16 * 16

const display = document.querySelector('.container')
const grid_size = document.querySelector('.sizing')

for (let i = 0; i < gridsize; i++) {
    box = document.createElement('div');

    box.classList.add('hover')
    display.appendChild(box);
}

// let boxList = document.querySelectorAll('.hover')
let boxList = document.querySelectorAll('.hover')
boxList.forEach(boxes => boxes.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = "black"
}))

display.addEventListener("mouseleave", () => {
    boxList.forEach((boxes) => {
        boxes.style.backgroundColor = ""
    })
})

grid_size.addEventListener("click", () => {

})

