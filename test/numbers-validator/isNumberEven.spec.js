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

  it('should return true if an even positive or negative number is provided', () => {
    const randomEvenInt = Math.floor((Math.random() * 201) - 100) * 2;
    const validationResults = validator.isNumberEven(randomEvenInt);

    expect(validationResults).to.be.equal(true);
  });

  it('should return false if an odd positive or negative number is provided', () => {
    const randomOddInt = Math.floor((Math.random() * 201) - 100) * 2 + 1;
    const validationResults = validator.isNumberEven(randomOddInt);

    expect(validationResults).to.be.equal(false);
  });

  // Этот тест failed, хотя '4.4' четное число. Возвращается false
  it('should return true if an float positive even number is provided ', () => {
    const floatOddResult = validator.isNumberEven(4.4);

    expect(floatOddResult).to.be.equal(true);
  });

  // Этот тест failed, хотя '-4.4' четное число. Возвращается false
  it('should return true if an float negative even number is provided', () => {
    const floatEvenResult = validator.isNumberEven(-4.4);

    expect(floatEvenResult).to.be.equal(true);
  });

  it('should return false if an float positive odd number is provided ', () => {
    const floatOddResult = validator.isNumberEven(5.5);

    expect(floatOddResult).to.be.equal(false);
  });

  it('should return false if an float negative odd number is provided', () => {
    const floatEvenResult = validator.isNumberEven(-5.5);

    expect(floatEvenResult).to.be.equal(false);
  });
});

describe('isNumberEven negative tests', () => {
  let validator;

  const errorArray = [[true], ['string'], [null], [undefined], [], [0]];

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  errorArray.forEach((element) => {
    it('should throw an error if provided type is not "Number"', () => {
      expect(() => validator.isNumberEven(element))
          .to.throw(`[${element}] is not of type "Number" it is of type "${typeof element}"`);
    });
  });
});
