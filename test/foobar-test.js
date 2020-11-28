var chai = require('chai');
var foobar = require("../foobar")

describe("we are testing foobar function", function () {
    it("should return foo if input is < 10", function () {
        var result = foobar(4);
        chai.assert.equal(result, "foo");
    });
    it("should return bar if input is > 10", function () {
        var result = foobar(15);
        chai.assert.equal(result, "bar");
    });
});
