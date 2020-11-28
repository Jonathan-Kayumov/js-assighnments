let chai = require('chai');
let multiplier = require("../multiplier");

describe("we are testing multiplier function", () => {
    it("should return 4 when 2 * 2", () => {
        let result = multiplier(2, 2);
        chai.assert.equal(result, 4);
    });

    it("should return -4 when 2 * -2", () => {
        let result = multiplier(2, -2);
        chai.assert.equal(result, -4);
    });

    it("should return 4 when -2 * -2", () => {
        let result = multiplier(-2, -2);
        chai.assert.equal(result, 4);
    });
});