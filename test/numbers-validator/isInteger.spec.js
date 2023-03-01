import NumbersValidator from '../../app/numbers_validator.js';
import {expect} from 'chai';
import {describe, beforeEach, it} from 'mocha';

describe('isInteger', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return truy when provided with a number', () => {
    const validatingResult = validator.isInteger(5);

    expect(validatingResult).to.be.equal(true);
  });

  it('should throw an error when provide not a number', () => {
    const notNumber = 'text';

    expect(() => {
      validator.isInteger(notNumber);
    }).to.throw('[text] is not a number');
  });
});
