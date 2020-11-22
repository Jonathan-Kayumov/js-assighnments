var chai = require('chai');
var multiplier = require("../multiplier");

describe("we are testing multiplier function", function () {
    it("should return 4 when 2 * 2", function () {
        var result = multiplier(2, 2);
        chai.assert.equal(result, 4);
    });

    it("should return -4 when 2 * -2", function () {
        var result = multiplier(2, -2);
        chai.assert.equal(result, -4);
    });

    it("should return 4 when -2 * -2", function () {
        var result = multiplier(-2, -2);
        chai.assert.equal(result, 4);
    });
});