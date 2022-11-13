import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

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

  // Act
  const result = transformToNumber(input);

  // Assert
  expect(result).toBeNaN();
});
