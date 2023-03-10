/* eslint-disable require-jsdoc */
import {expect} from 'chai';
import {beforeEach, describe, it} from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';

describe('getEvenNumbersFromArray positive tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return an array of even numbers, if positive and negative num are provided', () => {
    const randomArray = Array.from({length: 5}, () => Math.floor(Math.random() * 201) - 100);
    const evenNumbersArray = validator.getEvenNumbersFromArray(randomArray);

    expect(evenNumbersArray).to.be.eql(randomArray.filter((element) => {
      return element % 2 === 0;
    }));
  });

  it('should return an array with 0 if 0 is provided', () => {
    const zeroArray = [0];
    const result = validator.getEvenNumbersFromArray(zeroArray);

    expect(result).to.be.eql(zeroArray.filter((element) => {
      return element % 2 === 0;
    }));
  });

  it('should return empty array if empty array is provided', () => {
    const emptyArray = [];
    const emptyResult = validator.getEvenNumbersFromArray(emptyArray);

    expect(emptyResult).to.be.eql(emptyArray);
  });
});

describe('getEvenNumbersFromArray negative tests', () => {
  let validator;

  const arrayOfValues = [[true], ['string'], [null], [undefined]];

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

  it('should throw an error if array is not full of numbers', () => {
    const notAllNumbersArray = [5, '2', 11, 22];

    expect(() => validator.getEvenNumbersFromArray(notAllNumbersArray))
        .to.throw(`[${notAllNumbersArray}] is not an array of "Numbers"`);
  });

  arrayOfValues.forEach((element) => {
    it('should throw an error if array is not type of numbers', () => {
      expect(() => validator.getEvenNumbersFromArray(element))
          .to.throw(`[${element}] is not an array of "Numbers"`);
    });
  });

  randomFloatArray.forEach((element) => {
    it('should throw an error if array of positive and negative fractional numbers', () => {
      expect(() => validator.getEvenNumbersFromArray(element))
          .to.throw(`[${element}] is not an array of "Numbers"`);
    });
  });

  // Этот тест показывает, что тестируемая функция не полноценная.
  // По - хорошему она должна обрабатывать нечетные массив,
  // но она просто возвращает пустой массив, выкинув все нечетные числа
  it('should throw an error if array is of odd numbers only', () => {
    const start = 1;
    const randomOddArray = Array.from({length: 5}).map((_, i) => start + i * 2);

    const oddNumbersArray = validator.getEvenNumbersFromArray(randomOddArray);

    expect(oddNumbersArray).to.be.eql([]);
  });
});
