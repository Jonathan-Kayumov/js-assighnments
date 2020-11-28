const multiplyer = (num1, num2) => {
    return (num1 * num2);
}
let myMultResult = multiplyer(10, 20);
console.log(myMultResult);



const divider = (num1, num2) => {
    if (num2 == 0) {
        return ("cannot divide by zero");
    }
    return (num1 / num2);
}
let myDivResult = divider(100, 2);
console.log(myDivResult);


let mySecondDivResult = divider(100, 0);
console.log(mySecondDivResult);