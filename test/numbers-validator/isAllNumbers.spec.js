import {expect} from 'chai';
import {beforeEach, describe, it} from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';
import {generateRandomFloatArray} from '../../generateRandomFloatArray.js';

describe('isAllNumbers positive tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  const randomArray = Array.from({length: 5}, () => Math.floor(Math.random() * 50));
  it('should return true if array of numbers is provided', () => {
    const isAllNumbersArray = validator.isAllNumbers(randomArray);

    expect(isAllNumbersArray).to.be.true;
  });

  const zeroArray = [0];
  it('should return true if array with 0 is provided', () => {
    const resultZeroArray = validator.isAllNumbers(zeroArray);

    expect(resultZeroArray).to.be.true;
  });

  const randomFloatArray = generateRandomFloatArray(3, -10, 10);
  it('should return true if array of negative and positive float numbers is provided', () => {
    const resultFloatArray = validator.isAllNumbers(randomFloatArray);

    expect(resultFloatArray).to.be.true;
  });
});

describe('isAllNumbers negative tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  const nonArray = [true, 'string', null, undefined, 0];
  it('should throw an error if it is not an array', () => {
    nonArray.forEach((element) => {
      expect(() => validator.isAllNumbers(element))
          .to.throw(`[${element}] is not an array`);
    });
  });

  const nonNumbersArray = [[true], ['string'], [null], [undefined]];
  it('should return false if it is not an array of numbers', () => {
    nonNumbersArray.forEach((element) => {
      expect(validator.isAllNumbers(element)).to.equal(false);
    });
  });
});
