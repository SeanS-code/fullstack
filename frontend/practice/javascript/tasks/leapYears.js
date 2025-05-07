function ifLeapYear(year) {
    if (year%4 == 0 && (year%100 != 0 || year%400 == 0))
        return true
    return false
}

res = ifLeapYear(1600)
console.log(res)