function sumAll(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR"
    if (min < 0 || max < 0) return "ERROR"
    if (min > max) {
        const temp = min
        min = max
        max = temp
    }

    let sum = 0
    for (let i = min; i <= max; i++) {
        sum += i
    }

    return sum
}

res = sumAll(5, 1)
console.log(res)