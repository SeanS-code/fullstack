// Variables
const numerics = ['0123456789']

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
        case "add":
            return add(n,m)
        case "sub":
            return sub(n,m)
        case "mult":
            return mult(n,m)
        case "div":
            return div(n,m)
    }
}

// Button Functions

function clear(display) {
    while (display.firstChild) {
        display.removeChild(display.lastChild);
    }
}
function del(display) {
    display.removeChild(display.lastChild);
}

// Helper Functions
function process(digits) {
    subs = digits.split(/[+]/)

    enm = parseInt(subs[0])
    for (let i = 0; i < subs.length; i++) {
        enm = operate(enm, parseInt(subs[i+1]), "add")
    }

    return enm
}

// DOM Commands

const buttons = document.querySelectorAll('button');
const frame = document.querySelector('.container');
const display = document.querySelector('.display');
const prev = document.querySelector('.previous');

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let pressed = btn.textContent;

        switch (pressed) {
            case "Clear":
                return clear(display)
            case "Del":
                return del(display)
            case "=":
                if (display.textContent == "")
                    break
                result = process(display.textContent)
                clear(display)
                clear(prev)
                prev.append(result)
                return console.log(result)
            default:
                display.append(pressed)
        }
    })
})

/* Old Timey Calculator Logic aka. First Attempt

case "+":
                if (display.textContent == "")
                    break
                digits = parseInt(display.textContent)
                result = operate(result, digits, "add")
                clear(display)
                clear(prev)
                prev.append(result)
                break
            case "-":
                if (display.textContent == "")
                    break
                digits = parseInt(display.textContent)
                result = operate(result, digits, "sub")
                clear(display)
                clear(prev)
                prev.append(result)
                break
            case "×":
                if (display.textContent == "")
                    break
                if (result == 0) {
                    result = parseInt(display.textContent)
                    clear(display)
                    clear(prev)
                    prev.append(result)
                    break
                }
                digits = parseInt(display.textContent)
                result = operate(result, digits, "mult")
                clear(display)
                clear(prev)
                prev.append(result)
                break
            case "÷":
                if (display.textContent == "")
                    break
                digits = parseInt(display.textContent)
                result = operate(result, digits, "div")
                clear(display)
                clear(prev)
                prev.append(result)
                break
*/