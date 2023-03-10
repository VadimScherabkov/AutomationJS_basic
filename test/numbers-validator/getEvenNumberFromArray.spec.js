import {expect} from 'chai';
import {beforeEach, describe, it} from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';
import {generateRandomFloatArray} from '../../generateRandomFloatArray.js';

describe('getEvenNumbersFromArray positive tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  const randomArray = Array.from({length: 5}, () => Math.floor(Math.random() * 201) - 100);
  it('should return an array of even numbers, if positive and negative num are provided', () => {
    const evenNumbersArray = validator.getEvenNumbersFromArray(randomArray);

    expect(evenNumbersArray).to.be.eql(randomArray.filter((element) => {
      return element % 2 === 0;
    }));
  });

  const zeroArray = [0];
  it('should return an array with 0 if 0 is provided', () => {
    const result = validator.getEvenNumbersFromArray(zeroArray);

    expect(result).to.be.eql(zeroArray.filter((element) => {
      return element % 2 === 0;
    }));
  });

  const emptyArray = [];
  it('should return empty array if empty array is provided', () => {
    const emptyResult = validator.getEvenNumbersFromArray(emptyArray);

    expect(emptyResult).to.be.eql(emptyArray);
  });

  const start = 1;
  const randomOddArray = Array.from({length: 5}).map((_, i) => start + i * 2);
  it('should throw an empty array if array is of odd numbers only', () => {
    const oddNumbersArray = validator.getEvenNumbersFromArray(randomOddArray);

    expect(oddNumbersArray).to.be.eql([]);
  });
});

describe('getEvenNumbersFromArray negative tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  const notAllNumbersArray = [5, '2', 11, 22];
  it('should throw an error if array is not full of numbers', () => {
    expect(() => validator.getEvenNumbersFromArray(notAllNumbersArray))
        .to.throw(`[${notAllNumbersArray}] is not an array of "Numbers"`);
  });

  const arrayOfValues = [[true], ['string'], [null], [undefined]];
  it('should throw an error if array is not type of numbers', () => {
    arrayOfValues.forEach((element) => {
      expect(() => validator.getEvenNumbersFromArray(element))
          .to.throw(`[${element}] is not an array of "Numbers"`);
    });
  });

  const randomFloatArray = generateRandomFloatArray(3, -10, 10);
  it('should throw an error if array of positive and negative fractional numbers', () => {
    randomFloatArray.forEach((element) => {
      expect(() => validator.getEvenNumbersFromArray(element))
          .to.throw(`[${element}] is not an array of "Numbers"`);
    });
  });
});
