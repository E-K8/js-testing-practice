import { describe, it, expect } from 'vitest';
import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber', () => {
  it('should transform a string number to a number of type number', () => {
    // Arrange
    const value = '2';
    const expectedResult = +value;

    // Act
    const result = transformToNumber(value);

    // Assert
    expect(result).toBe(expectedResult);
  });

  // or the same ^^^ achieved like so:
  // it('should transform a string number to a number of type number', () => {
  //   // Arrange
  //   const value = '2';

  //   // Act
  //   const result = transformToNumber(value);

  //   // Assert
  //   expect(result).toBeTypeOf('number');
  // });

  it('should transform a string number to a number of type number', () => {
    // Arrange
    const input = '2';

    // Act
    const result = transformToNumber(input);

    // Assert
    expect(result).toBe(+input);
  });

  it('should yield 0 if there is no value provided', () => {
    // Arrange
    const value = '';
    const expectedResult = 0;

    // Act
    const result = transformToNumber(value);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it('should yield NaN for non-transformable values', () => {
    // Arrange
    const input = 'invalid';
    const input2 = {};

    // Act
    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    // Assert
    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe('cleanNumbers', () => {
  it('should return an array of number values if an array of string number values is provided', () => {
    // ARRANGE
    const numberValues = ['1', '2'];

    // ACT
    const cleanedNumbers = cleanNumbers(numberValues);

    // ASSERT
    expect(cleanedNumbers[0]).toBeTypeOf('number');
  });

  it('should throw an error if an array of at least one empty string is provided', () => {
    const numberValues = ['', 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});
