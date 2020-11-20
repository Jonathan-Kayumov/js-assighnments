function multiplyer(num1, num2) {
    return (num1 * num2);
}
var myMultResult = multiplyer(10, 20);
console.log(myMultResult);



function divider(num1, num2) {
    if (num2 == 0) {
        return ("cannot divide by zero");
    }
    return (num1 / num2);
}
var myDivResult = divider(100, 2);
console.log(myDivResult);


var mySecondDivResult = divider(100, 0);
console.log(mySecondDivResult);