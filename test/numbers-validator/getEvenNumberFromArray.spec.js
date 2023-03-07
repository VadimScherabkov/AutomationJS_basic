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

  it('should return an array of even numbers', () => {
    const randomArray = Array.from({length: 5}, () => Math.floor(Math.random() * 50));
    const evenNumbersArray = validator.getEvenNumbersFromArray(randomArray);

    expect(evenNumbersArray).to.be.eql(randomArray.filter((element) => {
      return element % 2 ===0;
    }));
  });
});

describe('getEvenNumbersFromArray negative tests', () => {
  let validator;

  const arrayOfValues = [[true], ['string'], [0], [null], [undefined]];

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should trow an error if array is not full of numbers', () => {
    const notAllNumbersArray = [5, '2', 11, 22];

    expect(() => {
      validator.getEvenNumbersFromArray(notAllNumbersArray);
    }).to.throw('[5,2,11,22] is not an array of "Numbers"');
  });

  arrayOfValues.forEach((element) => {
    it('should trow an error if array is not type of numbers', () => {
      expect(() => {
        validator.getEvenNumbersFromArray(element[0]);
      }).to.throw(`[${element[0]}] is not an array of "Numbers"`);
    });
  });

  // Этот тест показывает, что тестируемая функция не полноценная. Нужна проверка на нечетные числа, а ее нет.
  // it('should throw an error if array is of odd numbers', () => {
  //   const randomArray = Array.from({length: 5}, () => Math.floor(Math.random() * 50));
  //   console.log(randomArray);

  //   const oddNumbersArray = validator.getEvenNumbersFromArray(randomArray);
  //   console.log(oddNumbersArray);

  //   expect(oddNumbersArray).to.be.eql(
  //     randomArray.filter(function(element) {
  //       return element % 2 != 0;
  //     }),
  // );
  // })
});
