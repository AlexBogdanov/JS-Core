const assert = require('chai').assert;

const sumNumbers = require('./04SumNumbers/sumNumbers');
const isSymmetric = require('./05IsSymmetric/isSymmetric');

describe('05IsSymmetric', function () {
    it('Should return false for non symmetric arr', function () {
        const result = isSymmetric([1, 2, 3, 4, 2, 1]);
        assert.equal(result, false);
    });

    it('Should return false for non symmetric arr', function () {
        const result = isSymmetric([-1, 2, 1]);
        assert.equal(result, false);
    });

    it('Should return true for single element arr', function () {
        const result = isSymmetric([1]);
        assert.equal(result, true);
    });

    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        const result = isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5]);
        assert.equal(result, true);
    });

    it("should return false for non arr", function () {
        const result = isSymmetric(1, 2, 2, 1);
        assert.equal(result, false);
    });
});

describe('04SumNumbers', function() {
    
});

/**
 * integer nums
 * empty arr 0
 * 
 */