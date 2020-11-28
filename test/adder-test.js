let chai = require('chai');
let add = require("../adder");

describe("we are testing add function", () => {
    it("should return 4 when 4 + 4", () => {
        let result = add(2, 2);
        chai.assert.equal(result, 4);
    });

    it("should retuen 0 when 2 + -2", () => {
        let result = add(2, -2);
        chai.assert.equal(result, 0);
    });

    it("should return -4 when -2 + -2", () => {
        let result = add(-2, -2);
        chai.assert.equal(result, -4);
    });
});