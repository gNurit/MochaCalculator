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
    });
    
    describe(".substract", function(){
        it("Should substract two numbers if they are positive", function(){
            expect(calculator.substract(1,2)).to.equal(-1);
            expect(calculator.substract(4,5)).to.equal(-1);
            expect(calculator.substract(11,12)).to.equal(-1);
            expect(calculator.substract(5,9)).to.equal(-4);
        });
        it("Should substract two numbers regardless of sign", function(){
            expect(calculator.substract(1,-2)).to.equal(3);
            expect(calculator.substract(-4,5)).to.equal(-9);
            expect(calculator.substract(-11,12)).to.equal(-23);
            expect(calculator.substract(-5,-9)).to.equal(4);
        });
        it("Should substract any amount of numbers passed into the function", function(){
            expect(calculator.substract(1,-2, 4, 5, 6)).to.equal(-12);
            expect(calculator.substract(-11,12, 4, 5)).to.equal(-32);
            expect(calculator.substract(-5,-9, -2, -14, -1)).to.equal(21);
        });
    });
    
    describe(".multiply", function(){
        it("Should multiply two numbers", function(){
            expect(calculator.multiply(1,2)).to.equal(2);
            expect(calculator.multiply(4,5)).to.equal(20);
            expect(calculator.multiply(11,-12)).to.equal(-132);
            expect(calculator.multiply(5,9)).to.equal(45);
        });
        it("Should multiply a collection of numbers", function(){
            expect(calculator.multiply(1,-2,5)).to.equal(-10);
            expect(calculator.multiply(-4,5, 2, 1, 0)).to.equal(0);
            expect(calculator.multiply(2,1,-1,2)).to.equal(-4);
            expect(calculator.multiply(-5,5,5,5)).to.equal(-625);
        });
        it("Should throw an exception if any of the items in the array is not a number", function(){
            expect(calculator.multiply(1,-2, 4, 5, true)).to.throw(/not a number/);
            expect(calculator.multiply(1,-2, 4, [2,3,4], 34)).to.throw(/not a number/);
            expect(calculator.multiply(1,-2, 'we', 5, 3)).to.throw(/not a number/);
        });
    });
})