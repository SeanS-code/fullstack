// Variables
digitArray = []
opArray = []
numArray = []

// Math Functions
function add(n, m) {
    return n + m
}

function sub(n, m) {
    return n - m
}

function mult(n, m) {
    return n * m
}

function div(n, m) {
    return n / m
}

function operate(n, m, operator) {
    switch (operator) {
        case "+":
            return add(n,m)
        case "−":
            return sub(n,m)
        case "×":
            return mult(n,m)
        case "÷":
            return div(n,m)
    }
}

// Button Functions

function clear(display, display_prev) {
    display.textContent = ""
    display_prev.textContent = ""

    numArray = []
    opArray = []
    digitArray = []
}
function del(display) {
    display.removeChild(display.lastChild);

    digitArray.pop()
}

function process() {
    let res = 0
    for (let i = 0; i < numArray.length-1; i++) {
        res += operate(numArray[i], numArray[i+1], opArray[i])
    }

    numArray = []
    opArray = []
    digitArray = []
    
    return res
}

// DOM Commands

const buttons = document.querySelectorAll('button');
const operators = document.querySelectorAll('.operator')

const frame = document.querySelector('.container');
const display = document.querySelector('.display');
const prev = document.querySelector('.previous');


operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        numArray.push(Number(digitArray.filter(l => l.match(/[0-9]/)).join('')))
        opArray.push(operator.textContent)

        digitArray = []
    })
})

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let pressed = btn.textContent;

        switch (pressed) {
            case "Clear":
                clear(display, prev)
                break
            case "Del":
                return del(display)
            case "=":

                if (display.textContent == "")
                    break
                result = process()

                clear(display, prev)
                prev.append(result)

                return console.log(result)
            default:
                digitArray.push(pressed)
                display.append(pressed)
        }
    })
})
