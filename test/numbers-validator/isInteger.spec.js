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

  it('should return true if positive or negative number is provided', () => {
    const randomNumber = Math.floor(Math.random() * 201) - 100;
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

  const nonNumbersArray = [[true], ['string'], [null], [undefined], []];

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  nonNumbersArray.forEach((element) => {
    it('should throw an error if non - number is provided', () => {
      expect(() => validator.isInteger(element))
          .to.throw(`[${element}] is not a number`);
    });
  });

  it('should return false if fractional number is provided', () => {
    const randomFloat = (Math.random() * (10 + 10) - 10).toFixed(1);

    expect(() => validator.isInteger(randomFloat))
        .to.throw(`[${randomFloat}] is not a number`);
  });
});
