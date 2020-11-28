let chai = require('chai');
let foobar = require("../foobar")

describe("we are testing foobar function", () => {
    it("should return foo if input is < 10", () => {
        let result = foobar(4);
        chai.assert.equal(result, "foo");
    });
    it("should return bar if input is > 10", () => {
        let result = foobar(15);
        chai.assert.equal(result, "bar");
    });
});
