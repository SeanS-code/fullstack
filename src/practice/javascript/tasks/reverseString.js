function reveresString(str) {
    const chars = str.split("");
    let reversed = ""

    for (let i = 0; i < chars.length ; i++) {
        reversed = reversed + chars[(chars.length - 1) - i]
    }

    console.log(reversed)
}

reveresString("ereht olleh")