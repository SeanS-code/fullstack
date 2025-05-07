function removeFromArr(arr, ...args) {
    let newArr = []

    arr.forEach((item) => {
        if (!args.includes(item)) {
            newArr.push(item)
        }
    });

    console.log(newArr)
}

removeFromArr([1, 2, 3, 4], 3, 2)