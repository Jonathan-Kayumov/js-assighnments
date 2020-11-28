var chai = require('chai');
var add = require("../adder");

describe("we are testing add function", function () {
    it("should return 4 when 4 + 4", function () {
        var result = add(2, 2);
        chai.assert.equal(result, 4);
    });

    it("should retuen 0 when 2 + -2", function () {
        var result = add(2, -2);
        chai.assert.equal(result, 0);
    });

    it("should return -4 when -2 + -2", function () {
        var result = add(-2, -2);
        chai.assert.equal(result, -4);
    });
});