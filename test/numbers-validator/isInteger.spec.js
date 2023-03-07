import {expect} from 'chai';
import {beforeEach, describe, it} from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';

describe('isInteger positive test', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with a number', () => {
    const randomNumber = Math.floor(Math.random() * 201) - 100;
    const validatingResult = validator.isInteger(randomNumber);

    expect(validatingResult).to.be.equal(true);
  });
});

describe('isInteger negative test', () => {
  let validator;

  const nonNumbersArray = [[true], ['string'], [null], [undefined]];

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  nonNumbersArray.forEach((element) => {
    it('should throw an error when provide not a number', () => {
      expect(() => {
        validator.isInteger(element[0]);
      }).to.throw(`[${element[0]}] is not a number`);
    });
  });

  it('should return false when provided with fractional number', () => {
    const randomFloat = (Math.random() * (10 + 10) - 10).toFixed(1);

    expect(() => {
      validator.isInteger(randomFloat);
    }).to.throw(`[${randomFloat}] is not a number`);
  });
});
