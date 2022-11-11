import { it, expect } from 'vitest';
import { add } from './math';

it('should summarize all number values in an array', () => {
  // Arrange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce((prev, curr) => prev + curr, 0);

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(expectedResult);
});

it('should yield NaN if at least one invalid number is provided ', () => {
  const inputs = ['invalid', 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provided', () => {
  const numbers = ['1', '2'];

  const result = add(numbers);

  const expectedResult = numbers.reduce((prev, curr) => +prev + +curr, 0);

  expect(result).toBe(expectedResult);
});

it('should yield 0 if and empty array is provided', () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it('should throw an error if no value is passed into the function', () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow();
});
