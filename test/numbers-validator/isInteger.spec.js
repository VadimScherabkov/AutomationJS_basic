import {expect} from 'chai';
import {beforeEach, describe, it} from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';

describe('isInteger positive tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  const randomNumber = Math.floor(Math.random() * 201) - 100;
  it('should return true if positive or negative number is provided', () => {
    const validatingResult = validator.isInteger(randomNumber);

    expect(validatingResult).to.be.equal(true);
  });

  it('should return true if zero is provided', () => {
    const zero = validator.isInteger(0);

    expect(zero).to.be.true;
  });
});

describe('isInteger negative tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  const nonNumbersArray = [true, 'string', null, undefined, []];
  it('should throw an error if non - number is provided', () => {
    nonNumbersArray.forEach((element) => {
      expect(() => validator.isInteger(element))
          .to.throw(`[${element}] is not a number`);
    });
  });

  const randomFloat = (Math.random() * (10 + 10) - 10).toFixed(1);
  it('should return false if fractional number is provided', () => {
    expect(() => validator.isInteger(randomFloat))
        .to.throw(`[${randomFloat}] is not a number`);
  });
});
