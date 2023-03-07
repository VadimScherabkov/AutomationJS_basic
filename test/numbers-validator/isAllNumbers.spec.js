import {expect} from 'chai';
import {beforeEach, describe, it} from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';

describe('isAllNumbers positive tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true if it is an array of numbers', () => {
    const randomArray = Array.from({length: 5}, () =>
      Math.floor(Math.random() * 50),
    );
    const isAllNumbersArray = validator.isAllNumbers(randomArray);

    expect(isAllNumbersArray).to.be.true;
  });
});

describe('isAllNumbers negative tests', () => {
  let validator;

  const nonArray = [true, 'string', null, undefined];
  const nonNumbersArray = [[true], ['string'], [null], [undefined]];

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  nonArray.forEach((element) => {
    it('should return false if it is not an array', () => {
      expect(() => {
        validator.isAllNumbers(element[0]);
      }).to.throw(`[${element[0]}] is not an array`);
    });
  });

  nonNumbersArray.forEach((element) => {
    it('should return false if it is not an array of numbers', () => {
      expect(() => {
        validator.isAllNumbers(element[0]);
      }).to.throw(`[${element[0]}] is not an array`);
    });
  });
});
