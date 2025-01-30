function convertToCelsius(temp) {
    return (temp - 32) * (5/9)
}

function convertToFahrenheit(temp) {
    return (temp * (9/5)) + 32
}

let cel = -100, far = -10 

res = [convertToCelsius(cel).toFixed(1), convertToFahrenheit(far).toFixed(1)]
console.log(res)