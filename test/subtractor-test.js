let chai = require('chai');
let sub = require("../subtractor");

describe("we are testing sub function", () => {
    it("should return 0 when 2 - 2", () => {
        let result = sub(2, 2);
        chai.assert.equal(result, 0);
    });

    it("should retuen 4 when 2 - -2", () => {
        let result = sub(2, -2);
        chai.assert.equal(result, 4);
    });

    it("should retuen 0 when -2 - -2", () => {
        let result = sub(-2, -2);
        chai.assert.equal(result, 0);
    });
});