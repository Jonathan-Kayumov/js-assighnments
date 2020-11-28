for (i = 1; i < 21; i++) {
    console.log(i)
    if (i == 10) {
        break
    }
}


let i = 0;
while (i < 21) {
    console.log(i);
    if (i == 10) {
        break;
    }
    i++;
}


let boo = true;
let i = 0;
while (boo == true) {
    console.log(i);
    if (i == 10) {
        boo = false;
    }
    i++;
}

const x = () => {
    for (var i = 0; i < 21; i++) {
        console.log(i);
        if (i == 10) return false;
    }
    return true
}
console.log(x());