import {expect} from 'chai';
import {beforeEach, describe, it} from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';

describe('isNumberEven positive tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  const randomEvenInt = Math.floor((Math.random() * 201) - 100) * 2;
  it('should return true if an even positive or negative number is provided', () => {
    const validationResults = validator.isNumberEven(randomEvenInt);

    expect(validationResults).to.be.equal(true);
  });

  const randomOddInt = Math.floor((Math.random() * 201) - 100) * 2 + 1;
  it('should return false if an odd positive or negative number is provided', () => {
    const validationResults = validator.isNumberEven(randomOddInt);

    expect(validationResults).to.be.equal(false);
  });

  it('should return false if positive number with decimal place is provided ', () => {
    const floatOddResult = validator.isNumberEven(5.5);

    expect(floatOddResult).to.be.equal(false);
  });

  it('should return false if negative number with decimal place is provided', () => {
    const floatEvenResult = validator.isNumberEven(-5.5);

    expect(floatEvenResult).to.be.equal(false);
  });

  it('should return true if 0 is provided', () => {
    const zero = validator.isNumberEven(0);

    expect(zero).to.be.equal(true);
  });
});

describe('isNumberEven negative tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  const errorArray = [true, 'string', null, undefined, []];
  it('should throw an error if provided type is not "Number"', () => {
    errorArray.forEach((element) => {
      expect(() => validator.isNumberEven(element))
          .to.throw(`[${element}] is not of type "Number" it is of type "${typeof element}"`);
    });
  });
});
