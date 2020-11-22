var add = require("./adder")
var sub = require("./subtractor")
var multiplier = require("./multiplier")
var divider = require("./divider")

var calculator = {
    add: add,
    sub: sub,
    multiplier: multiplier,
    divider: divider,
};


module.exports = calculator;