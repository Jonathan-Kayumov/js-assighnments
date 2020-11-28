let chai = require('chai');
let calculator = require("../calculator");

describe("we are testing add function", () => {
    it("should return 45 when 10 + 35", () => {
        let result = calculator.add(10, 35);
        chai.assert.equal(result, 45);
    });
    it("should retuen -14 when -63 + 49", () => {
        let result = calculator.add(-63, 49)
        chai.assert.equal(result, -14)
    });
});


describe("we are testing sub function", () => {
    it("should return 21 when 30 - 9", () => {
        let result = calculator.sub(30, 9);
        chai.assert.equal(result, 21);
    });
    it("should retuen 150 when 100 - -50", () => {
        let result = calculator.sub(100, -50)
        chai.assert.equal(result, 150)
    });
});


describe("we are testing multiplier function", () => {
    it("should return 25 when 5 * 5", () => {
        let result = calculator.multiplier(5, 5);
        chai.assert.equal(result, 25);
    });
    it("should retuen -75 when 25 * -3", () => {
        let result = calculator.multiplier(25, -3)
        chai.assert.equal(result, -75)
    });
});


describe("we are testing divider function", () => {
    it("should return 4 when 100 / 25", () => {
        let result = calculator.divider(100, 25);
        chai.assert.equal(result, 4);
    });
    it("should retuen -100 when 200 / -2", () => {
        let result = calculator.divider(200, -2)
        chai.assert.equal(result, -100)
    });
});