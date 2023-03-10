import {expect} from 'chai';
import {beforeEach, describe, it} from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';

describe('isAllNumbers positive tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  const generateRandomFloatArray = ((length, min, max) => {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(parseFloat((Math.random() * (max - min) + min).toFixed(1)));
    }
    return arr;
  });

  const randomFloatArray = generateRandomFloatArray(3, -10, 10);

  afterEach(() => {
    validator = null;
  });

  it('should return true if array of numbers is provided', () => {
    const randomArray = Array.from({length: 5}, () =>
      Math.floor(Math.random() * 50),
    );
    const isAllNumbersArray = validator.isAllNumbers(randomArray);

    expect(isAllNumbersArray).to.be.true;
  });

  it('should return true if array with 0 is provided', () => {
    const zeroArray = [0];
    const resultZeroArray = validator.isAllNumbers(zeroArray);

    expect(resultZeroArray).to.be.true;
  });

  it('should return true if array of negative and positive float numbers is provided', () => {
    const resultFloatArray = validator.isAllNumbers(randomFloatArray);

    expect(resultFloatArray).to.be.true;
  });
});

describe('isAllNumbers negative tests', () => {
  let validator;

  const nonArray = [true, 'string', null, undefined, 0];
  const nonNumbersArray = [[true], ['string'], [null], [undefined]];

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  nonArray.forEach((element) => {
    it('should throw an error if it is not an array', () => {
      expect(() => validator.isAllNumbers(element))
          .to.throw(`[${element}] is not an array`);
    });
  });

  nonNumbersArray.forEach((element) => {
    it('should return false if it is not an array of numbers', () => {
      expect(validator.isAllNumbers(element)).to.equal(false);
    });
  });
});
