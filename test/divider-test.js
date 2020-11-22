var chai = require('chai');
var divider = require("../divider");

describe("we are testing the divider function", function () {
    it("should retuen 1 when 2 / 2", function () {
        var result = divider(2, 2);
        chai.assert.equal(result, 1);
    });

    it("should retuen -1 when 2/-2", function () {
        var result = divider(2, -2);
        chai.assert.equal(result, -1);
    });

    it("should return 1 when -2/-2", function () {
        var result = divider(-2, -2);
        chai.assert.equal(result, 1);
    });
});