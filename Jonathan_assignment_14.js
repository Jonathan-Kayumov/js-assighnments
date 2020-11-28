"use strict";
const first = (var1, var2) => {
    if (var1 == var2) {
        return true;
    } else {
        return false;
    }
}
let sol = first("trash", "trash");
console.log(sol)
sol = first("trash", "garbage");
console.log(sol)