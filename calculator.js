let add = require("./adder")
let sub = require("./subtractor")
let multiplier = require("./multiplier")
let divider = require("./divider")

let calculator = {
    add: add,
    sub: sub,
    multiplier: multiplier,
    divider: divider,
};


module.exports = calculator;