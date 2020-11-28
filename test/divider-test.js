let chai = require('chai');
let divider = require("../divider");

describe("we are testing the divider function", () => {
    it("should retuen 1 when 2 / 2", () => {
        let result = divider(2, 2);
        chai.assert.equal(result, 1);
    });

    it("should retuen -1 when 2/-2", () => {
        let result = divider(2, -2);
        chai.assert.equal(result, -1);
    });

    it("should return 1 when -2/-2", () => {
        let result = divider(-2, -2);
        chai.assert.equal(result, 1);
    });
});