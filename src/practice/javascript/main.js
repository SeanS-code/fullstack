let add7 = (n) => n +7;

let multiply = (n, m) => n * m

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function lastLetter(l) {
    i = l.length;
    return l.charAt(i-1)
}

console.log(add7(3))
console.log(multiply(3,4))
console.log(capitalize("future"))
console.log(lastLetter("abcd"))