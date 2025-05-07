function repeatString(str, n) {
    let rep = ""
    
    if (n < 0) {
        rep = "Input a number greater than 0"; 
    } else {
        for (let i=0; i < n; i++)
            rep = rep + str;
    }

    console.log(rep)
}

repeatString("", 5)

