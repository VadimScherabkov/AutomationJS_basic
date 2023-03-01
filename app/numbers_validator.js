/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
/**
 * A simple class containg methods for validating number
 *
 * @class NumbersValidator
 */
export default class NumbersValidator {
  /**
   * Creates an instace of NumbersValidator.
   * @memberof NumbersValidator
   */
  constructor() {
  };
  /**
   * @param {Number} number number to check
   * @return {Boolean} true if element is even
   * @memberof NumbersValidator
   */
  isNumberEven(number) {
    const typeofVariable = typeof number;
    if (typeofVariable !== 'number') {
      // eslint-disable-next-line max-len
      throw new Error(`[${number}] is not of type "Number" it is of type "${typeofVariable}"`);
    } else {
      return number % 2 === 0;
    }
  };

  /**
   * @param {Array<Number>} arrayOfNumbers array of numbers to go through
   * @return {Array<Number>} array of even numbers
   */

  getEvenNumbersFromArray(arrayOfNumbers) {
    if (Array.isArray(arrayOfNumbers) &&
    arrayOfNumbers.every((item) => typeof item === 'number')) {
      return arrayOfNumbers.filter(this.isNumberEven);
    }
    throw new Error(`[${arrayOfNumbers}] is not an array of "Numbers"`);
  };

  /**
   * @param {Array<Number>} arrayOfNumbers array of numbers to go through
   * @return {Boolean} true if all are numbers
   */
  isAllNumbers(arrayOfNumbers) {
    if (!Array.isArray(arrayOfNumbers)) {
      throw new Error(`[${arrayOfNumbers}] is not an array`);
    }
    return arrayOfNumbers.every((n) => typeof n === 'number');
  };

  /**
   * Check if passed value is integer
   * @param n - value
   * @return {boolean} true if value is integer
   */
  isInteger(n) {
    if (typeof n !== 'number') {
      throw new Error(`[${n}] is not a number`);
    }
    return Number.isInteger(n);
  };
};
