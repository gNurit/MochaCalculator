"use strict";

var expect = require("chai").expect;
var calculator = require("../Calculator");

describe("Calculator", function() {
    it("Should exist", function(){        
        expect(calculator).to.not.be.undefined;
    });
    describe(".add", function(){
        it("Should add two numbers if they are positive", function(){
            expect(calculator.add(1,2)).to.equal(3);
            expect(calculator.add(4,5)).to.equal(9);
            expect(calculator.add(11,12)).to.equal(23);
            expect(calculator.add(5,9)).to.equal(14);
        });
        it("Should add two numbers regardless of sign", function(){
            expect(calculator.add(1,-2)).to.equal(-1);
            expect(calculator.add(-4,5)).to.equal(1);
            expect(calculator.add(-11,12)).to.equal(1);
            expect(calculator.add(-5,-9)).to.equal(-14);
        });
        it("Should add any amount of numbers passed into the function", function(){
            expect(calculator.add(1,-2, 4, 5, 6)).to.equal(14);
            expect(calculator.add(-11,12, 4, 5)).to.equal(10);
            expect(calculator.add(-5,-9, -2, -14, -1)).to.equal(-31);
        });
    })
})