import NumbersValidator from '../../app/numbers_validator.js';
import {expect} from 'chai';
import {describe, beforeEach, it} from 'mocha';

describe('isNumberEven positive tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with an even number', () => {
    const vaidationResults = validator.isNumberEven(4);

    expect(vaidationResults).to.be.equal(true);
  });

  it('should return false when provided with an even number', () => {
    const vaidationResults = validator.isNumberEven(5);

    expect(vaidationResults).to.be.equal(false);
  });

  it('should throw an error when provided a string', () => {
    expect(() => {
      validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });
});
