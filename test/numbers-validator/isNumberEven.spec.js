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

  it('should return true when provided with an even number', () => {
    const vaidationResults = validator.isNumberEven(2);

    expect(vaidationResults).to.be.equal(true);
  });


  it('should return false when provided with not even number', () => {
    const vaidationResults = validator.isNumberEven(5);

    expect(vaidationResults).to.be.equal(false);
  });
});

describe('isNumberEven negative tests', () => {
  let validator;

  const errorArray = [[true], ['string'], [null], [undefined]];

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  errorArray.forEach((element) => {
    it('should throw an error when provided type is not "Number"', () => {
      expect(() => {
        validator.isNumberEven(element[0]);
      }).to.throw(`[${element[0]}] is not of type "Number" it is of type "${typeof element[0]}"`);
    });
  });
});
