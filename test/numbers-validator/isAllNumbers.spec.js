import NumbersValidator from '../../app/numbers_validator.js';
import {expect} from 'chai';
import {describe, beforeEach, it} from 'mocha';

describe('isAllNumbers', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true if it is an array of numbers', () => {
    const arrayOfNumbers = [5, 2, 6, 11, 22];
    const isAllNumbersArray = validator.isAllNumbers(arrayOfNumbers);
    console.log(isAllNumbersArray);

    expect(isAllNumbersArray).to.be.true;
  });

  it('should return false if it is not an array of numbers', () => {
    const notArray = 'text';

    expect(() => {
      validator.isAllNumbers(notArray);
    }).to.throw('[text] is not an array');
  });
});
